export interface StatCard {
  label:  string
  value:  string
  change: string
  up:     boolean
}

export interface NewUserPoint {
  month: string
  users: number
}

export interface DailyLearningPoint {
  day:      string
  sessions: number
}

export interface CategoryPoint {
  name:  string
  value: number
  color: string
}

export interface TopCourse {
  title:    string
  enrolled: number
  category: string
}

export interface DashboardData {
  stats:                StatCard[]
  newUsers:             NewUserPoint[]
  dailyLearning:        DailyLearningPoint[]
  categoryDistribution: CategoryPoint[]
  topCourses:           TopCourse[]
}