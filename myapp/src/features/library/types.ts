// src/features/library/types.ts
import type { ID }     from '@/src/types/common'
import type { Course } from '@/src/features/content/types'

export interface LibraryItem {
  id:              ID
  course:          Course
  savedAt:         string
  progress?:       number
  lastAccessedAt?: string
}

export interface LibraryCollection {
  id:    ID
  name:  string
  items: LibraryItem[]
}

export interface LibraryData {
  saved:       LibraryItem[]
  inProgress:  LibraryItem[]
  history:     LibraryItem[]
  collections: LibraryCollection[]
}
