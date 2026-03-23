// src/entities/course/index.ts

export interface Course {
  id:          string
  img:         string
  category:    string
  time:        number
  title:       string
  description: string
  author:      string
  previewUrl?: string
}

export interface QuizQuestion {
  id:       string
  question: string
  options:  string[]
  answer:   number
}

export interface Lesson {
  id:       string
  title:    string
  duration: string
  videoUrl: string
  quiz:     QuizQuestion[]
}

export interface CourseDetail extends Course {
  lessons: Lesson[]
  skills:  string[]
}

export interface CoursesData {
  courses: Course[]
}

export interface ExploreData {
  total:      number
  categories: string[]
  courses:    Course[]
}

export interface CourseFormData {
  title:       string
  description: string
  category:    string
  author:      string
  time:        number
  img:         string
  previewUrl:  string
}

export const COURSE_CATEGORIES = [
  "Web Development",
  "UI Design",
  "Data Science",
  "Mobile",
  "Backend",
]

export const EMPTY_COURSE_FORM: CourseFormData = {
  title:       "",
  description: "",
  category:    "Web Development",
  author:      "",
  time:        0,
  img:         "",
  previewUrl:  "",
}