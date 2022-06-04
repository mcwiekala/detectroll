import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import fetch from 'node-fetch'
import { perspective } from "./perspective/index.js";

dotenv.config();

const app = express();
const token = process.env.BEARER_TOKEN;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 8000


const getUser = async (userName) => {
  const response = await fetch(`https://api.twitter.com/2/users/by/username/${userName}`, {
    method: "get",
    headers: {
      "User-Agent": "v2UserLookupJS",
      "authorization": `Bearer ${token}`
    },
  });
  return await response.text();
}


const getUserTweets = async (id) => {
    const response = await fetch(`https://api.twitter.com/2/users/${id}/tweets?tweet.fields=lang&exclude=replies,retweets`, {
    method: "get",
    headers: {
      "User-Agent": "v2UserLookupJS",
      "authorization": `Bearer ${token}`
    },
  });
  return await response.text();
}

app.get('/analyze/:twitterName', async (req, res) => {
  let user = JSON.parse(await getUser(req.params.twitterName))
  const tweets = JSON.parse(await getUserTweets(user.data.id))

  res.send(tweets.data.filter(tweet => (tweet.lang !== "und")).slice(0,3))
});

app.get('/api/json', (req, res) => {
  const jsonData = require('./resources/sample-response.json')
  res.send(jsonData)
})

app.get('/api/secret', (req, res) => {
  const secret = process.env.SECRET
  res.send(secret)
})
app.post('/api/analyze', async (req, res) => {
  perspective(req, res)
})

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`)
})
