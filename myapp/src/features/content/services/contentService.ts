// src/features/content/services/contentService.ts
import { apiClient }         from "@/shared/api/apiClient"
import type { ContentData }  from "@/features/content/types"

export const contentService = {
  getAllContent: () =>
    apiClient.get<ContentData>("/content"),

  getContentByCategory: (category: string) =>
    apiClient.get<ContentData>(`/content/${category}`),
}