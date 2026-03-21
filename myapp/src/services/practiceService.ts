// src/services/practiceService.ts
import { apiClient }           from "@/src/lib/apiClient"
import type { PracticeData }   from "@/src/features/practice/types"
import type { SearchParams }   from "@/src/types/utils"

function buildQuery(params?: SearchParams): string {
  if (!params) return ""
  const q = new URLSearchParams()
  if (params.category) q.set("category", params.category)
  if (params.q)        q.set("q",        params.q)
  if (params.page)     q.set("page",     String(params.page))
  if (params.limit)    q.set("limit",    String(params.limit))
  const str = q.toString()
  return str ? `?${str}` : ""
}

export const practiceService = {
  getPracticeData: (params?: SearchParams) =>
    apiClient.get<PracticeData>(`/practice${buildQuery(params)}`),
}