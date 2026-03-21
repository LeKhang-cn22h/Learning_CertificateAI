
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

export interface Course {
  id:          string
  img:         string
  category:    string
  time:        number
  title:       string
  description: string
  author:      string
   previewUrl?:  string
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

export interface CourseFormData {
  title:       string
  description: string
  category:    string
  author:      string
  time:        number
  img:         string
  previewUrl:  string
}

export interface AdminCoursesData {
  total:   number
  courses: Course[]
}