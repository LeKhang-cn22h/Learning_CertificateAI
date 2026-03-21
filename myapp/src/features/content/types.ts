// src/features/content/types.ts
import type { ID }                                   from '@/src/types/common'
import type { Level, ContentType, ContentCategory }  from '@/src/types/enums'

export type { ContentType, ContentCategory }

export interface Course {
  id:          ID
  title:       string
  provider:    string
  thumbnail:   string
  duration:    string
  level:       Level
  category:    string
  rating:      number
  enrolled:    number
  isFeatured?: boolean
}

export interface ContentItem {
  id:          ID
  title:       string
  type:        ContentType
  category:    ContentCategory
  thumbnail:   string
  duration:    string
  author:      string
  publishedAt: string
  tags:        string[]
}

export interface ContentData {
  items:      ContentItem[]
  total:      number
  categories: string[]
}
