// src/services/careerService.ts
import { apiClient }                        from '@/src/lib/apiClient'
import type { CareerData, CareerSearchResult } from '@/src/features/career/types'

export const careerService = {
  getCareerData:  () => apiClient.get<CareerData>('/career'),
  searchCareers:  (query: string) =>
    apiClient.get<CareerSearchResult>(`/career/search?q=${encodeURIComponent(query)}`),
}
