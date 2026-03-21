// src/features/career/types.ts
import type { ID }     from '@/src/types/common'
import type { Course } from '@/src/features/content/types'

export interface CareerPath {
  id:             ID
  title:          string
  description:    string
  requiredSkills: string[]
  courses:        Course[]
  averageSalary:  string
  jobCount:       number
}

export interface CareerData {
  paths:        CareerPath[]
  trendingJobs: string[]
}

export interface CareerSearchResult {
  query:   string
  results: CareerPath[]
  total:   number
}
