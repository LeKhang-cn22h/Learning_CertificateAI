// src/features/practice/types.ts
import type { Difficulty } from "@/shared/types/enums"

export interface Challenge {
  id:          string
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