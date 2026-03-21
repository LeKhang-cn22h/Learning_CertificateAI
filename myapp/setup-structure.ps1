# ============================================================
# setup-structure.ps1
# Chạy 1 lần từ root project: .\setup-structure.ps1
# Tạo tất cả folder + file còn thiếu, KHÔNG ghi đè file có sẵn
# ============================================================

$src = "src"
$app = "app"

# ── Helper: tạo file chỉ khi chưa tồn tại ───────────────────
function New-FileIfMissing($path, $content) {
  if (-not (Test-Path $path)) {
    $dir = Split-Path $path
    if ($dir) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    Set-Content -Path $path -Value $content -Encoding UTF8
    Write-Host "  CREATE  $path" -ForegroundColor Green
  } else {
    Write-Host "  SKIP    $path (already exists)" -ForegroundColor DarkGray
  }
}

# ── 1. src/types — copy từ outputs nếu thiếu ────────────────
Write-Host "`n[1/6] src/types" -ForegroundColor Cyan

New-FileIfMissing "$src/types/common.ts" @"
// src/types/common.ts
export type ID = string

export interface Timestamps {
  createdAt: string
  updatedAt: string
}

export interface Pagination {
  page:       number
  limit:      number
  total:      number
  totalPages: number
}

export interface PaginatedResponse<T> {
  items:      T[]
  pagination: Pagination
}

export interface ApiResponse<T> {
  data:   T | null
  error:  string | null
  status: number
}
"@

New-FileIfMissing "$src/types/enums.ts" @"
// src/types/enums.ts
export type Level           = 'Beginner' | 'Intermediate' | 'Advanced'
export type Difficulty      = 'Easy' | 'Medium' | 'Hard'
export type SortOrder       = 'popular' | 'newest' | 'rating'
export type ContentType     = 'video' | 'article' | 'podcast' | 'ebook'
export type ContentCategory = 'technology' | 'business' | 'creative'
export type TopicSlug       = 'ai-tech' | 'leadership' | 'marketing'
export type ActivityType    = 'course_completed' | 'cert_earned' | 'challenge_done'
"@

New-FileIfMissing "$src/types/utils.ts" @"
// src/types/utils.ts
import type { SortOrder } from './enums'

export interface SearchParams {
  q?:        string
  category?: string
  level?:    string
  page?:     number
  limit?:    number
  sort?:     SortOrder
}
"@

New-FileIfMissing "$src/types/index.ts" @"
// src/types/index.ts — barrel re-export, KHÔNG define type mới ở đây
export type { ID, Timestamps, Pagination, PaginatedResponse, ApiResponse } from './common'
export type { Level, Difficulty, SortOrder, ContentType, ContentCategory, TopicSlug, ActivityType } from './enums'
export type { SearchParams } from './utils'

export type { Course, ContentItem, ContentData }                            from '@/features/content/types'
export type { Certification, CertProvider, CertificationsData }            from '@/features/certifications/types'
export type { CareerPath, CareerData, CareerSearchResult }                  from '@/features/career/types'
export type { Challenge, PracticeData }                                     from '@/features/practice/types'
export type { UserProfile, ProfileActivity, ProfileCertificate, ProfileData } from '@/features/profile/types'
export type { TopicData, TopicInstructor, LearningPath }                   from '@/features/topics/types'
export type { LibraryItem, LibraryCollection, LibraryData }                from '@/features/library/types'
export type { Skill }                                                       from '@/features/home/types'
"@

# ── 2. src/lib/apiClient.ts ──────────────────────────────────
Write-Host "`n[2/6] src/lib" -ForegroundColor Cyan

New-FileIfMissing "$src/lib/apiClient.ts" @"
// src/lib/apiClient.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api'

export interface ApiResponse<T> {
  data:   T | null
  error:  string | null
  status: number
}

async function request<T>(path: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`\${BASE_URL}\${path}`, {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', ...options.headers },
      cache: 'no-store',
      ...options,
    })
    if (!res.ok) return { data: null, error: `HTTP \${res.status}: \${res.statusText}`, status: res.status }
    const data: T = await res.json()
    return { data, error: null, status: res.status }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error(`[apiClient] \${path} ->`, message)
    return { data: null, error: message, status: 0 }
  }
}

export const apiClient = {
  get:    <T>(path: string, init?: RequestInit) => request<T>(path, { method: 'GET', ...init }),
  post:   <T>(path: string, body: unknown, init?: RequestInit) => request<T>(path, { method: 'POST',   body: JSON.stringify(body), ...init }),
  put:    <T>(path: string, body: unknown, init?: RequestInit) => request<T>(path, { method: 'PUT',    body: JSON.stringify(body), ...init }),
  delete: <T>(path: string, init?: RequestInit) => request<T>(path, { method: 'DELETE', ...init }),
}
"@

# ── 3. features/*/types.ts ───────────────────────────────────
Write-Host "`n[3/6] features/*/types.ts" -ForegroundColor Cyan

New-FileIfMissing "$src/features/content/types.ts" @"
// src/features/content/types.ts
import type { ID }                                   from '@/types/common'
import type { Level, ContentType, ContentCategory }  from '@/types/enums'

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
"@

New-FileIfMissing "$src/features/certifications/types.ts" @"
// src/features/certifications/types.ts
import type { ID }    from '@/types/common'
import type { Level } from '@/types/enums'

export interface Certification {
  id:           ID
  title:        string
  provider:     string
  providerLogo: string
  description:  string
  duration:     string
  difficulty:   Level
  price:        number | 'Free'
  tags:         string[]
  isFeatured?:  boolean
}

export interface CertProvider {
  id:        ID
  name:      string
  logo:      string
  certCount: number
}

export interface CertificationsData {
  certifications: Certification[]
  providers:      CertProvider[]
  total:          number
}
"@

New-FileIfMissing "$src/features/career/types.ts" @"
// src/features/career/types.ts
import type { ID }     from '@/types/common'
import type { Course } from '@/features/content/types'

export interface CareerPath {
  id:             ID
  title:          string
  description:    string
  requiredSkills: string[]
  courses:        Course[]
  averageSalary:  string
  jobCount:       number
}

export interface CareerData {
  paths:        CareerPath[]
  trendingJobs: string[]
}

export interface CareerSearchResult {
  query:   string
  results: CareerPath[]
  total:   number
}
"@

New-FileIfMissing "$src/features/practice/types.ts" @"
// src/features/practice/types.ts
import type { ID }         from '@/types/common'
import type { Difficulty } from '@/types/enums'

export interface Challenge {
  id:          ID
  title:       string
  description: string
  difficulty:  Difficulty
  category:    string
  timeLimit:   number
  points:      number
  completedBy: number
  tags:        string[]
}

export interface PracticeData {
  challenges: Challenge[]
  categories: string[]
  total:      number
}
"@

New-FileIfMissing "$src/features/profile/types.ts" @"
// src/features/profile/types.ts
import type { ID }           from '@/types/common'
import type { ActivityType } from '@/types/enums'
import type { Course }       from '@/features/content/types'

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
"@

New-FileIfMissing "$src/features/topics/types.ts" @"
// src/features/topics/types.ts
import type { ID }        from '@/types/common'
import type { TopicSlug } from '@/types/enums'
import type { Course }    from '@/features/content/types'

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
"@

New-FileIfMissing "$src/features/library/types.ts" @"
// src/features/library/types.ts
import type { ID }     from '@/types/common'
import type { Course } from '@/features/content/types'

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
"@

New-FileIfMissing "$src/features/home/types.ts" @"
// src/features/home/types.ts
import type { ID } from '@/types/common'

export interface Skill {
  id:          ID
  name:        string
  icon:        string
  courseCount: number
  trending?:   boolean
}
"@

New-FileIfMissing "$src/features/about/types.ts" @"
// src/features/about/types.ts
export interface AboutData {
  mission:    string
  vision:     string
  teamCount:  number
  foundedYear: number
}
"@

# ── 4. src/services/*.ts ─────────────────────────────────────
Write-Host "`n[4/6] src/services" -ForegroundColor Cyan

New-FileIfMissing "$src/services/certService.ts" @"
// src/services/certService.ts
import { apiClient }                    from '@/lib/apiClient'
import type { CertificationsData }      from '@/features/certifications/types'
import type { SearchParams }            from '@/types/utils'

function buildQuery(params?: SearchParams): string {
  if (!params) return ''
  const q = new URLSearchParams()
  if (params.q)        q.set('q',        params.q)
  if (params.category) q.set('category', params.category)
  if (params.level)    q.set('level',    params.level)
  if (params.sort)     q.set('sort',     params.sort)
  if (params.page)     q.set('page',     String(params.page))
  if (params.limit)    q.set('limit',    String(params.limit))
  const str = q.toString()
  return str ? `?\${str}` : ''
}

export const certService = {
  getCertifications: (params?: SearchParams) =>
    apiClient.get<CertificationsData>(`/certifications\${buildQuery(params)}`),
}
"@

New-FileIfMissing "$src/services/careerService.ts" @"
// src/services/careerService.ts
import { apiClient }                        from '@/lib/apiClient'
import type { CareerData, CareerSearchResult } from '@/features/career/types'

export const careerService = {
  getCareerData:  () => apiClient.get<CareerData>('/career'),
  searchCareers:  (query: string) =>
    apiClient.get<CareerSearchResult>(`/career/search?q=\${encodeURIComponent(query)}`),
}
"@

New-FileIfMissing "$src/services/practiceService.ts" @"
// src/services/practiceService.ts
import { apiClient }             from '@/lib/apiClient'
import type { PracticeData }     from '@/features/practice/types'
import type { SearchParams }     from '@/types/utils'

function buildQuery(params?: SearchParams): string {
  if (!params) return ''
  const q = new URLSearchParams()
  if (params.category) q.set('category', params.category)
  if (params.q)        q.set('q',        params.q)
  if (params.page)     q.set('page',     String(params.page))
  if (params.limit)    q.set('limit',    String(params.limit))
  const str = q.toString()
  return str ? `?\${str}` : ''
}

export const practiceService = {
  getPracticeData: (params?: SearchParams) =>
    apiClient.get<PracticeData>(`/practice\${buildQuery(params)}`),
}
"@

New-FileIfMissing "$src/services/profileService.ts" @"
// src/services/profileService.ts
import { apiClient }         from '@/lib/apiClient'
import type { ProfileData }  from '@/features/profile/types'

export const profileService = {
  getProfile: () => apiClient.get<ProfileData>('/profile'),
}
"@

New-FileIfMissing "$src/services/contentService.ts" @"
// src/services/contentService.ts
import { apiClient }                           from '@/lib/apiClient'
import type { ContentData, ContentCategory }   from '@/features/content/types'
import type { SearchParams }                   from '@/types/utils'

function buildQuery(params?: SearchParams): string {
  if (!params) return ''
  const q = new URLSearchParams()
  if (params.q)     q.set('q',     params.q)
  if (params.sort)  q.set('sort',  params.sort)
  if (params.page)  q.set('page',  String(params.page))
  if (params.limit) q.set('limit', String(params.limit))
  const str = q.toString()
  return str ? `?\${str}` : ''
}

export const contentService = {
  getAllContent:        (params?: SearchParams) =>
    apiClient.get<ContentData>(`/content\${buildQuery(params)}`),
  getContentByCategory: (category: ContentCategory, params?: SearchParams) =>
    apiClient.get<ContentData>(`/content/\${category}\${buildQuery(params)}`),
}
"@

New-FileIfMissing "$src/services/topicService.ts" @"
// src/services/topicService.ts
import { apiClient }              from '@/lib/apiClient'
import type { TopicData, TopicSlug } from '@/features/topics/types'

export const topicService = {
  getTopicBySlug: (slug: TopicSlug) => apiClient.get<TopicData>(`/topics/\${slug}`),
}
"@

New-FileIfMissing "$src/services/libraryService.ts" @"
// src/services/libraryService.ts
import { apiClient }        from '@/lib/apiClient'
import type { LibraryData } from '@/features/library/types'

export const libraryService = {
  getLibrary: () => apiClient.get<LibraryData>('/library'),
}
"@

New-FileIfMissing "$src/services/index.ts" @"
// src/services/index.ts — barrel export
export { certService }     from './certService'
export { careerService }   from './careerService'
export { practiceService } from './practiceService'
export { profileService }  from './profileService'
export { contentService }  from './contentService'
export { topicService }    from './topicService'
export { libraryService }  from './libraryService'
"@

# ── 5. features/*/hooks/*.ts ────────────────────────────────
Write-Host "`n[5/6] features/*/hooks" -ForegroundColor Cyan

New-FileIfMissing "$src/features/certifications/hooks/useCertifications.ts" @"
'use client'
import { useEffect, useState, useCallback }    from 'react'
import { certService }                         from '@/services/certService'
import type { CertificationsData }             from '@/features/certifications/types'
import type { SearchParams }                   from '@/types/utils'

export function useCertifications(initialParams?: SearchParams) {
  const [data, setData]       = useState<CertificationsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  const [params, setParams]   = useState(initialParams)

  const load = useCallback(() => {
    setLoading(true)
    certService.getCertifications(params).then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [params])

  useEffect(() => { load() }, [load])

  return { data, loading, error, refetch: (p: SearchParams) => setParams(p) }
}
"@

New-FileIfMissing "$src/features/career/hooks/useCareer.ts" @"
'use client'
import { useEffect, useState, useCallback }        from 'react'
import { careerService }                           from '@/services/careerService'
import type { CareerData, CareerSearchResult }     from '@/features/career/types'

export function useCareer() {
  const [data, setData]       = useState<CareerData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  useEffect(() => {
    careerService.getCareerData().then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [])
  return { data, loading, error }
}

export function useCareerSearch() {
  const [results, setResults] = useState<CareerSearchResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)
  const search = useCallback((query: string) => {
    if (!query.trim()) return
    setLoading(true)
    careerService.searchCareers(query).then(({ data, error }) => {
      setResults(data); setError(error); setLoading(false)
    })
  }, [])
  return { results, loading, error, search }
}
"@

New-FileIfMissing "$src/features/practice/hooks/usePractice.ts" @"
'use client'
import { useEffect, useState, useCallback }  from 'react'
import { practiceService }                   from '@/services/practiceService'
import type { PracticeData }                 from '@/features/practice/types'
import type { SearchParams }                 from '@/types/utils'

export function usePractice(initialParams?: SearchParams) {
  const [data, setData]       = useState<PracticeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  const [params, setParams]   = useState(initialParams)

  const load = useCallback(() => {
    setLoading(true)
    practiceService.getPracticeData(params).then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [params])

  useEffect(() => { load() }, [load])

  return { data, loading, error, filterByCategory: (c: string) => setParams(p => ({ ...p, category: c })) }
}
"@

New-FileIfMissing "$src/features/profile/hooks/useProfile.ts" @"
'use client'
import { useEffect, useState }  from 'react'
import { profileService }       from '@/services/profileService'
import type { ProfileData }     from '@/features/profile/types'

export function useProfile() {
  const [data, setData]       = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  useEffect(() => {
    profileService.getProfile().then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [])
  return { data, loading, error }
}
"@

New-FileIfMissing "$src/features/content/hooks/useContent.ts" @"
'use client'
import { useEffect, useState, useCallback }    from 'react'
import { contentService }                      from '@/services/contentService'
import type { ContentData, ContentCategory }   from '@/features/content/types'
import type { SearchParams }                   from '@/types/utils'

export function useContent(category?: ContentCategory, initialParams?: SearchParams) {
  const [data, setData]       = useState<ContentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  const [params, setParams]   = useState(initialParams)

  const load = useCallback(() => {
    setLoading(true)
    const call = category
      ? contentService.getContentByCategory(category, params)
      : contentService.getAllContent(params)
    call.then(({ data, error }) => { setData(data); setError(error); setLoading(false) })
  }, [category, params])

  useEffect(() => { load() }, [load])

  return { data, loading, error, updateParams: (p: SearchParams) => setParams(prev => ({ ...prev, ...p })) }
}
"@

New-FileIfMissing "$src/features/topics/hooks/useTopic.ts" @"
'use client'
import { useEffect, useState }            from 'react'
import { topicService }                   from '@/services/topicService'
import type { TopicData, TopicSlug }      from '@/features/topics/types'

export function useTopic(slug: TopicSlug) {
  const [data, setData]       = useState<TopicData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  useEffect(() => {
    topicService.getTopicBySlug(slug).then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [slug])
  return { data, loading, error }
}
"@

New-FileIfMissing "$src/features/library/hooks/useLibrary.ts" @"
'use client'
import { useEffect, useState }  from 'react'
import { libraryService }       from '@/services/libraryService'
import type { LibraryData }     from '@/features/library/types'

export function useLibrary() {
  const [data, setData]       = useState<LibraryData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  useEffect(() => {
    libraryService.getLibrary().then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [])
  return {
    data, loading, error,
    savedCount:      data?.saved.length      ?? 0,
    inProgressCount: data?.inProgress.length ?? 0,
    historyCount:    data?.history.length    ?? 0,
  }
}
"@

# ── 6. .env.local ────────────────────────────────────────────
Write-Host "`n[6/6] .env.local" -ForegroundColor Cyan

New-FileIfMissing ".env.local" @"
# Mockoon dev server
NEXT_PUBLIC_API_URL=http://localhost:3001/api
"@

# ── Xóa file cũ không còn dùng ──────────────────────────────
Write-Host "`nCleaning up..." -ForegroundColor Cyan
$toDelete = @(
  "$src/types/api.ts",
  "$src/services/homeService.ts",
  "$src/features/home/hooks/useHome.ts"
)
foreach ($f in $toDelete) {
  if (Test-Path $f) {
    Remove-Item $f
    Write-Host "  DELETE  $f" -ForegroundColor Red
  }
}

# ── Summary ──────────────────────────────────────────────────
Write-Host "`n============================================" -ForegroundColor Yellow
Write-Host " Done! Cấu trúc đã sẵn sàng." -ForegroundColor Yellow
Write-Host " Next: npm run dev + start Mockoon :3001" -ForegroundColor Yellow
Write-Host "============================================`n" -ForegroundColor Yellow
