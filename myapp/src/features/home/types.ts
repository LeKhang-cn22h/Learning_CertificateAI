// src/features/home/types.ts
import type { ID } from '@/src/types/common'

export interface Skill {
  id:          ID
  name:        string
  icon:        string
  courseCount: number
  trending?:   boolean
}
