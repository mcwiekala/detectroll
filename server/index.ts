import 'dotenv/config'
import cors from 'cors'
import express, { Response, Request } from 'express'
import perspective from './perspective'
import { getUser, getUserTweets } from './twitter'

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
  }
  res.send(await perspective(res, text, lang))
})

app.get('/api/analyze/:twitterName', async (req, res) => {
  let user = JSON.parse(await getUser(req.params.twitterName))
  if (user.errors) {
    res.status(404).send('No user found!')
    return
  }
  const tweets = JSON.parse(await getUserTweets(user.data.id))

  if (tweets.meta.result_count === 0) {
    res.status(404).send('No tweets found!')
    return
  }

  res.send(tweets.data.filter((tweet) => tweet.lang !== 'und').slice(0, 3))
})

app.get('/api/json', (req, res) => {
  const jsonData = require('./resources/sample-response.json')
  res.send(jsonData)
})

app.get('/api/secret', (req, res) => {
  const secret = process.env.SECRET
  res.send(secret)
})

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`)
})
