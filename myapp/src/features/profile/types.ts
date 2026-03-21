import type { ID }           from '@/src/types/common'
import type { ActivityType } from '@/src/types/enums'
import type { Course }       from '@/src/features/content/types'

export interface UserProfile {
  id:                   ID
  name:                 string
  email:                string
  avatar:               string
  bio:                  string
  joinedDate:           string
  location:             string
  completedCourses:     number
  earnedCertifications: number
  learningStreak:       number
}

export interface ProfileActivity {
  id:     ID
  type:   ActivityType
  title:  string
  date:   string
  points: number
}

export interface ProfileCertificate {
  id:         ID
  title:      string
  provider:   string
  issuedDate: string
  badgeUrl:   string
}

export interface ProfileData {
  user:         UserProfile
  activities:   ProfileActivity[]
  certificates: ProfileCertificate[]
  inProgress:   Course[]
}
