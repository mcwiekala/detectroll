import { attributeWeight } from './algorithm'

export type perspectiveClientResponse = {
  score: number
  isTroll: boolean
  attributes: { name: string; value: number }[]
  message?: string
}

export type attributeKeys = keyof typeof attributeWeight

export type perspectiveApiResponse = {
  attributeScores: {
    [key in attributeKeys]: {
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
