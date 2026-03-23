// src/features/admin/courses/services/adminCourseService.ts
import type { AdminCoursesData, AdminCourse,
              CourseFormData }                from "@/features/admin/courses/types"
import { apiClient } from "@/shared/api/apiClient";

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