import 'dotenv/config'
import fetch from 'node-fetch'
import { Response } from 'express'

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

const API_KEY = process.env.PERSPECTIVE_API_KEY
const URL = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${API_KEY}`

const handleAnalysis = async (text: string, lang: string, requestedAttributes: { [key: string]: {} }) => {
  const res = await fetch(URL, {
    method: 'post',
    headers: {
      'User-Agent': 'DetectTroll',
    },
    body: JSON.stringify({
      comment: {
        text,
      },
      languages: [lang],
      requestedAttributes,
    }),
  })
  if (res.status === 404) {
    return null
  }
  return await JSON.parse(await res.text())
}

const getAnalyze = async (text: string, lang: string) => {
  let requestedAttributes
  let attributeCount
  if (coreLangs.includes(lang)) {
    requestedAttributes = {
      TOXICITY: {},
      THREAT: {},
      PROFANITY: {},
      INSULT: {},
    }
    attributeCount = 9
  }
  if (additionalLangs.includes(lang)) {
    requestedAttributes = {
      TOXICITY: {},
    }
    attributeCount = 6
  }
  if (!requestedAttributes || !attributeCount) {
    return { result: null, attributeCount: 'This language is not supported!' }
  }
  const result: perspectiveResponse = await handleAnalysis(text, lang, requestedAttributes)
  if (result === null) {
    return { result: null, attributeCount: 'Error' }
  }
  return { result, attributeCount }
}

const perspective = async (res: Response, text: string, lang: string) => {
  const { result, attributeCount } = await getAnalyze(text, lang)
  if (result == null || attributeCount == null) {
    res.status(400).send(attributeCount)
    return
  }
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

export default perspective
