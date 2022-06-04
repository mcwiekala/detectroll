import { attributeWeight } from './algorithm'

export type perspectiveClientResponse = {
  score: number
  isTroll: boolean
  attributes: { name: string; value: number }[]
  message?: string
}

export type perspectiveApiResponse = {
  attributeScores: {
    [key in keyof typeof attributeWeight]: {
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
