import { apiClient }               from "@/shared/api/apiClient"
import type { CertificationsData } from "@/entities/certification"
import type { SearchParams }       from "@/shared/types/utils"

function buildQuery(params?: SearchParams): string {
  if (!params) return ""
  const q = new URLSearchParams()
  if (params.q)        q.set("q",        params.q)
  if (params.category) q.set("category", params.category)
  if (params.level)    q.set("level",    params.level)
  if (params.sort)     q.set("sort",     params.sort)
  if (params.page)     q.set("page",     String(params.page))
  if (params.limit)    q.set("limit",    String(params.limit))
  const str = q.toString()
  return str ? `?${str}` : ""
}

export const certService = {
  getCertifications: (params?: SearchParams) =>
    apiClient.get<CertificationsData>(`/certifications${buildQuery(params)}`),
}