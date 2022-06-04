require('dotenv').config()
// const fetch = require('node-fetch')
const PerspectiveClass = require('perspective-api-client')
const perspectiveClient = new PerspectiveClass({ apiKey: process.env.PERSPECTIVE_API_KEY })

enum attributesTypes {
  TOXICITY = 'TOXICITY',
  SEVERE_TOXICITY = 'SEVERE_TOXICITY',
  IDENTITY_ATTACK = 'IDENTITY_ATTACK',
  INSULT = 'INSULT',
  PROFANITY = 'PROFANITY',
  THREAT = 'THREAT',
}

const coreLangs = ['de', 'en', 'es', 'fr', 'it', 'pt', 'ru']
const additionalLangs = ['ar', 'zh', 'cs', 'nl', 'hi', 'hi-Latin', 'id', 'ja', 'ko', 'pl']

type perspectiveResponse = {
  attributeScores: {
    [key in attributesTypes]: {
      spanScores: [
        {
          begin: number
          end: number
          score: {
            value: number
            type: string
          }
        },
      ]
      summaryScore: {
        value: number
        type: string
      }
    }
  }
  languages: string[]
  detectedLanguages: string[]
}

const getAnalyze = async (text: string, lang: string) => {
  if (lang in coreLangs) {
    const result: perspectiveResponse = await perspectiveClient.analyze({
      comment: {
        text,
      },
      languages: [lang],
      requestedAttributes: {
        TOXICITY: {},
      },
    })
    return { result, attributeCount: 9 }
  }
  if (lang in additionalLangs) {
    const result: perspectiveResponse = await perspectiveClient.analyze(text, { attributes: ['toxicity'] })
    return { result, attributeCount: 6 }
  }
  return { result: null, attributeCount: null }
}

const perspective = async (req, res, lang: string) => {
  const text = req.body.text
  if (!text) {
    res.status(400).send('No text provided!')
    return
  }
  const { result, attributeCount } = await getAnalyze(text, lang)
  if (result == null || attributeCount == null) {
    res.status(400).send('This language is not supported!')
    return
  }
  console.log(result)
  const attributes = result.attributeScores
  const attributeWeight: { [key in attributesTypes]: number } = {
    INSULT: 1,
    PROFANITY: 1,
    THREAT: 1,
    TOXICITY: 6,
    IDENTITY_ATTACK: 0,
    SEVERE_TOXICITY: 0,
  }
  let sum = 0
  const scores: { name: string; value: number }[] = []
  let key: keyof typeof attributes
  for (key in attributes) {
    sum += attributeWeight[key] * attributes[key].summaryScore.value
    scores.push({ name: new String(key).toLowerCase(), value: attributes[key].summaryScore.value })
  }
  const score = sum / 9
  res.send({
    score,
    isTroll: score > 0.7 ? true : false,
    attributes: scores.sort((a, b) => a.name.localeCompare(b.name)),
  })
}

module.exports = perspective
