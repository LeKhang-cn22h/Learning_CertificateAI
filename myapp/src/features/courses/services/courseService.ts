import { apiClient }                  from "@/src/lib/apiClient"
import type { CoursesData, CourseDetail, ExploreData, TrialData } from "@/src/features/courses/types"

export const courseService = {
  getCourses: () =>
    apiClient.get<CoursesData>("/courses"),

  getCourseById: (id: string) =>
    apiClient.get<CourseDetail>(`/courses/${id}`),

  exploreCourses:(category?: string, q?:string)=>{
    const params = new URLSearchParams()
    if (category && category !=="All") params.set("category", category)
    if (q) params.set("q",q)
    const query =params.toString()
    return apiClient.get<ExploreData>(`/courses/explore${query ? `?${query}`:""}`)
  },
  getTrial: () =>
  apiClient.get<TrialData>("/trial"),
}
