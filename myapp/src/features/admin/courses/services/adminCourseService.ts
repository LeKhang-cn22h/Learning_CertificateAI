// src/features/admin/courses/services/adminCourseService.ts
import { apiClient }                          from "@/src/lib/apiClient"
import type { AdminCoursesData, AdminCourse,
              CourseFormData }                from "@/src/features/admin/courses/types"

export const adminCourseService = {
  getCourses: () =>
    apiClient.get<AdminCoursesData>("/admin/courses"),

  getCourseById: (id: string) =>
    apiClient.get<AdminCourse>(`/admin/courses/${id}`),

  createCourse: (data: CourseFormData) =>
    apiClient.post<{ id: string; message: string }>("/admin/courses", data),

  updateCourse: (id: string, data: CourseFormData) =>
    apiClient.put<{ id: string; message: string }>(`/admin/courses/${id}`, data),

  deleteCourse: (id: string) =>
    apiClient.delete<{ message: string }>(`/admin/courses/${id}`),
}