import dotenv from "dotenv"
import Perspective from "perspective-api-client"
dotenv.config();


const perspectiveClient = new Perspective({ apiKey: process.env.PERSPECTIVE_API_KEY })


const perspective = async (req, res) => {
  const text = req.body.text
  if (!text) {
    res.status(400).send('No text provided!')
    return
  }
  const result = await perspectiveClient.analyze(text, { attributes: ['toxicity', 'insult', 'profanity', 'threat'] })
  const attributes = result.attributeScores
  const attributeWeight = {
    INSULT: 1,
    PROFANITY: 1,
    THREAT: 1,
    TOXICITY: 6,
  }
  let sum = 0
  let scores = []
  for (key in attributes) {
    sum += attributeWeight[key] * attributes[key].summaryScore?.value
    scores.push({ name: new String(key).toLowerCase(), value: attributes[key].summaryScore?.value })
  }
  const score = sum / 9
  res.send({
    score,
    isTroll: score > 0.7 ? true : false,
    attributes: scores.sort((a, b) => a.name.localeCompare(b.name)),
  })
}

export { perspective }
