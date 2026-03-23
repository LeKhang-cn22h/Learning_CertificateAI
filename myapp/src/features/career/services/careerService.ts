import { apiClient }     from "@/shared/api/apiClient"
import type { CareerData } from "@/features/career/types"

export const careerService = {
  getCareerData: () =>
    apiClient.get<CareerData>("/career"),

  searchCareers: (query: string) =>
    apiClient.get<CareerData>(`/career/search?q=${query}`),
}