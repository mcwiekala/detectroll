import 'dotenv/config'
import cors from 'cors'
import express, { Response, Request } from 'express'
import perspective from './perspective/index.js'
import path from 'node:path'
import { getUser, getUserTweets } from './twitter/index.js'
import { tweet } from './twitter/tweet.js'
import { attributeKeys } from './perspective/types.js'
import { handleMessage } from './messages.js'

const app = express()
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 8000

app.post('/api/analyze', async (req: Request, res: Response) => {
  const { text, lang } = req.body
  if (!text) {
    res.status(400).send('No text provided!')
    return
  }
  if (!lang) {
    res.status(400).send('No language provided!')
    return
  }
  const analysis = await perspective(res, text, lang)
  if (analysis == undefined) {
    return
  }
  const scores: { name: string; value: number }[] = []
  const attributes = analysis.attributes
  let key: keyof typeof attributes
  for (key in attributes) {
    scores.push({ name: new String(key).toLowerCase(), value: attributes[key] })
  }
  scores.sort((a, b) => a.name.localeCompare(b.name))
  res.send(handleMessage({ score: analysis.score, isTroll: analysis.isTroll, attributes: scores }))
})

app.get('/api/analyze/:twitterName', async (req, res) => {
  let user = JSON.parse(await getUser(req.params.twitterName))
  if (user.errors) {
    res.status(404).send('No users found!')
    return
  }
  const tweets = JSON.parse(await getUserTweets(user.data.id))
  if (tweets.meta.result_count === 0) {
    res.status(404).send('No tweets found!')
    return
  }

  const latestTweets: tweet[] = tweets.data.filter((tweet: { lang: string; text: string; id: string }) => tweet.lang !== 'und').slice(0, 3)
  const initialAttributeValue = { score: 0, count: 0 }
  let attributes: { [key in attributeKeys]: typeof initialAttributeValue } = {
    INSULT: { score: 0, count: 0 },
    PROFANITY: { score: 0, count: 0 },
    THREAT: { score: 0, count: 0 },
    TOXICITY: { score: 0, count: 0 },
  }
  let totalScore: number = 0
  for (const { text, lang } of latestTweets) {
    const analysis = await perspective(res, text, lang)
    if (analysis == undefined) {
      res.status(404).send('Could not get analysis!')
      return
    }
    let attributeName: keyof typeof attributes
    for (attributeName in attributes) {
      attributes[attributeName].score += analysis.attributes[attributeName]
      attributes[attributeName].count++
    }
    totalScore += analysis.score
  }
  const scores: { name: string; value: number }[] = []
  let attributeName: keyof typeof attributes
  for (attributeName in attributes) {
    if (attributes[attributeName].count !== 0) {
      scores.push({ name: new String(attributeName).toLowerCase(), value: attributes[attributeName].score / attributes[attributeName].count })
    }
  }
  scores.sort((a, b) => a.name.localeCompare(b.name))
  res.send(handleMessage({ score: totalScore / 3, isTroll: totalScore > 0.7 ? true : false, attributes: scores }))
})

// TODO: remove later:

app.get('/api/json', (req, res) => {
  const jsonData = require('./resources/sample-response.json')
  res.send(jsonData)
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(path.resolve(), '/public', 'index.html'), (err) => {
    if (err) {
      console.log(err)
    }
  })
})

app.get('/api/message', (req, res) => {
  res.send('HELLO WORLD!')
})

app.get('/api/secret', (req, res) => {
  const secret = process.env.SECRET
  res.send(secret)
})

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`)
})
