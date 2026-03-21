import type { ID }         from '@/src/types/common'
import type { Difficulty } from '@/src/types/enums'

export interface Challenge {
  id:          ID
  title:       string
  description: string
  difficulty:  Difficulty
  category:    string
  timeLimit:   number
  points:      number
  completedBy: number
  tags:        string[]
}

export interface PracticeData {
  challenges: Challenge[]
  categories: string[]
  total:      number
}
