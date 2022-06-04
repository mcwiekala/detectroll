import fetch from 'node-fetch'
import dotenv from "dotenv"

dotenv.config()

const TOKEN = process.env.TWITTER_API_TOKEN;
const TWITTER_API_URL = `https://api.twitter.com/2`;

const getUser = async (userName) => {
    const response = await fetch(`${TWITTER_API_URL}/users/by/username/${userName}`, {
      method: "get",
      headers: {
        "User-Agent": "v2UserLookupJS",
        "authorization": `Bearer ${TOKEN}`
      },
    });
    console.log(`twitter.getUser - the response from Twitter is: [${response.text()}]`)
  
    return await response.text();
  }
  
  
  const getUserTweets = async (id) => {
      const response = await fetch(`${TWITTER_API_URL}/users/${id}/tweets?tweet.fields=lang&exclude=replies,retweets&`, {
      method: "get",
      headers: {
        "User-Agent": "v2UserLookupJS",
        "authorization": `Bearer ${TOKEN}`
      },
    });
    return await response.text();
  }

  export { getUser, getUserTweets }
  