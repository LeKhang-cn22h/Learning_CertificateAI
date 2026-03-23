// src/features/profile/types.ts
import type { ActivityType } from "@/shared/types/enums"
import type { Course }       from "@/entities/course"

export interface UserProfile {
  id:                   string
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
  id:     string
  type:   ActivityType
  title:  string
  date:   string
  points: number
}

export interface ProfileCertificate {
  id:         string
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