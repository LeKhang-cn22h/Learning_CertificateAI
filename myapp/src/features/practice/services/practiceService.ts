// src/features/practice/services/practiceService.ts
import { apiClient }          from "@/shared/api/apiClient"
import type { PracticeData }  from "@/features/practice/types"

export const practiceService = {
  getPracticeData: () =>
    apiClient.get<PracticeData>("/practice"),
}