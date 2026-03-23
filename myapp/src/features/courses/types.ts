// src/features/courses/types.ts
import type { Course } from "@/entities/course"

export type {
  Course,
  CourseDetail,
  CoursesData,
  ExploreData,
  Lesson,
  QuizQuestion,
  CourseFormData,
} from "@/entities/course"

export { COURSE_CATEGORIES, EMPTY_COURSE_FORM } from "@/entities/course"

export interface AdminCoursesData {
  total:   number
  courses: Course[]
}

export interface Plan {
  id:           string
  name:         string
  price:        number
  displayPrice: string
  period:       string
  popular:      boolean
  cta:          string
  href:         string
  features:     string[]
}

export interface FaqItem {
  id:       string
  question: string
  answer:   string
}

export interface TrialData {
  plans: Plan[]
  faq:   FaqItem[]
}