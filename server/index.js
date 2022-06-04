import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import express from 'express'
import fetch from 'node-fetch'

dotenv.config()

const app = express()
const token = process.env.BEARER_TOKEN
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 8000
const URL = 'https://api.twitter.com/2'

const getUser = async (userName) => {
  const response = await fetch(`${URL}/users/by/username/${userName}`, {
    method: 'get',
    headers: {
      'User-Agent': 'v2UserLookupJS',
      authorization: `Bearer ${token}`,
    },
  })

  if (response.status === 404) {
    res.status(404).send('No user found!')
  }

  return await response.text()
}

const getUserTweets = async (id) => {
  const response = await fetch(`${URL}/users/${id}/tweets?tweet.fields=lang&exclude=replies,retweets&`, {
    method: 'get',
    headers: {
      'User-Agent': 'v2UserLookupJS',
      authorization: `Bearer ${token}`,
    },
  })
  return await response.text()
}

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
