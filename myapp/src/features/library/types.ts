// features/library/types.ts
import type { Course } from '@/features/content/types'

export interface LibraryItem {
  id:              string
  course:          Course
  savedAt:         string
  progress?:       number
  lastAccessedAt?: string
}

export interface LibraryCollection {
  id:    string
  name:  string
  items: LibraryItem[]
}

export interface LibraryData {
  saved:       LibraryItem[]
  inProgress:  LibraryItem[]
  history:     LibraryItem[]
  collections: LibraryCollection[]
}
