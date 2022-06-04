require('dotenv').config()
const Perspective = require('perspective-api-client')
const perspectiveClient = new Perspective({ apiKey: process.env.PERSPECTIVE_API_KEY })

const perspective = async (req, res) => {
  const text = req.body.text
  if (!text) {
    res.status(400).send('No text provided!')
    return
  }
  const result = await perspectiveClient.analyze(text, { attributes: ['toxicity', 'insult', 'profanity', 'threat'] })
  let sum = 0
  const attributes = result.attributeScores
  let scores = {}
  const attributeWeight = {
    INSULT: 1,
    PROFANITY: 1,
    THREAT: 1,
    TOXICITY: 6,
  }
  for (key in attributes) {
    sum += attributeWeight[key] * attributes[key].summaryScore?.value
    scores = { [key]: attributes[key].summaryScore?.value, ...scores }
  }
  const score = sum / 9
  res.send({
    score,
    isTroll: score > 0.7 ? true : false,
    attributes: scores,
  })
}

module.exports = perspective
