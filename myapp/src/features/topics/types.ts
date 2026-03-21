import type { ID }        from '@/src/types/common'
import type { TopicSlug } from '@/src/types/enums'
import type { Course }    from '@/src/features/content/types'

export type { TopicSlug }

export interface TopicInstructor {
  id:       ID
  name:     string
  avatar:   string
  title:    string
  rating:   number
  students: number
}

export interface LearningPath {
  id:            ID
  title:         string
  description:   string
  steps:         string[]
  estimatedTime: string
  level:         string
}

export interface TopicData {
  slug:            TopicSlug
  title:           string
  description:     string
  featuredCourses: Course[]
  learningPaths:   LearningPath[]
  topInstructors:  TopicInstructor[]
  allCourses:      Course[]
  skills:          string[]
}
