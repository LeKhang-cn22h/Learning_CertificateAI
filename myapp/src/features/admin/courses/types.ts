import type { Course } from "@/entities/course"

export interface AdminCourse extends Course {
  previewUrl?: string
}

export interface AdminCoursesData {
  total:   number
  courses: AdminCourse[]
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

export const EMPTY_COURSE_FORM: CourseFormData = {
  title:       "",
  description: "",
  category:    "Web Development",
  author:      "",
  time:        0,
  img:         "",
  previewUrl:  "",
}

export const COURSE_CATEGORIES = [
  "Web Development",
  "UI Design",
  "Data Science",
  "Mobile",
  "Backend",
]