// src/features/career/types.ts
import type { Course } from "@/entities/course"

export interface CareerPath {
  id:             string
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