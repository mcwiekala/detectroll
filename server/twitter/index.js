import fetch from 'node-fetch'
import dotenv from "dotenv"

dotenv.config()

const TOKEN = process.env.TWITTER_API_TOKEN;
const URL = process.env.TWITTER_API_URL;

const getUser = async (userName) => {
    const response = await fetch(`${URL}/users/by/username/${userName}`, {
      method: "get",
      headers: {
        "User-Agent": "v2UserLookupJS",
        "authorization": `Bearer ${TOKEN}`
      },
    });
  
    if (response.status === 404) {
      res.status(404).send("No user found!")
    }
  
    return await response.text();
  }
  
  
  const getUserTweets = async (id) => {
      const response = await fetch(`${URL}/users/${id}/tweets?tweet.fields=lang&exclude=replies,retweets&`, {
      method: "get",
      headers: {
        "User-Agent": "v2UserLookupJS",
        "authorization": `Bearer ${TOKEN}`
      },
    });
    return await response.text();
  }

  export { getUser, getUserTweets }
  