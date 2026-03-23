// app/admin/courses/new/page.tsx
"use client"
import { useRouter }              from "next/navigation"
import RequireRole                from "@/features/auth/components/RequireRole"
import AdminFormWrapper           from "@/features/admin/shared/components/AdminFormWrapper"
import CourseForm                 from "@/features/admin/courses/components/CourseForm"
import { useAdminCourseForm }     from "@/features/admin/courses/hooks/useAdminCourseForm"

export default function NewCoursePage() {
  const router = useRouter()
  const { form, handleChange, handleSubmit, loading, error, success } =
    useAdminCourseForm()

  return (
    <RequireRole role="admin" redirectTo="/home">
      <AdminFormWrapper title="Add new course" backHref="/admin/courses">
        <CourseForm
          form={form}
          loading={loading}
          error={error}
          success={success}
          isEdit={false}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={() => router.push("/admin/courses")}
        />
      </AdminFormWrapper>
    </RequireRole>
  )
}