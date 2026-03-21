// src/services/contentService.ts
import { apiClient }                          from "@/src/lib/apiClient"
import type { ContentData, ContentCategory }  from "@/src/features/content/types"
import type { SearchParams }                  from "@/src/types/utils"

function buildQuery(params?: SearchParams): string {
  if (!params) return ""
  const q = new URLSearchParams()
  if (params.q)     q.set("q",     params.q)
  if (params.sort)  q.set("sort",  params.sort)
  if (params.page)  q.set("page",  String(params.page))
  if (params.limit) q.set("limit", String(params.limit))
  const str = q.toString()
  return str ? `?${str}` : ""
}

export const contentService = {
  getAllContent: (params?: SearchParams) =>
    apiClient.get<ContentData>(`/content${buildQuery(params)}`),

  getContentByCategory: (category: ContentCategory, params?: SearchParams) =>
    apiClient.get<ContentData>(`/content/${category}${buildQuery(params)}`),
}