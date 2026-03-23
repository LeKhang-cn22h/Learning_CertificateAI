// src/entities/topic/index.ts
import type { Course } from "@/entities/course"

export interface TopicInstructor {
  id:       string
  name:     string
  avatar:   string
  title:    string
  rating:   number
  students: number
}

export interface LearningPath {
  id:            string
  title:         string
  description:   string
  steps:         string[]
  estimatedTime: string
  level:         string
}

export interface TopicData {
  slug:            string
  title:           string
  description:     string
  skills:          string[]
  featuredCourses: Course[]
  learningPaths:   LearningPath[]
  topInstructors:  TopicInstructor[]
  allCourses:      Course[]
}