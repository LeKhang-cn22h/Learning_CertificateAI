"use client"
import { use }                    from "react"
import { useRouter }              from "next/navigation"
import RequireRole                from "@/src/features/auth/components/RequireRole"
import AdminFormWrapper           from "@/src/features/admin/shared/components/AdminFormWrapper"
import AdminLoadingTable          from "@/src/features/admin/shared/components/AdminLoadingTable"
import CourseForm                 from "@/src/features/admin/courses/components/CourseForm"
import { useAdminCourseForm }     from "@/src/features/admin/courses/hooks/useAdminCourseForm"

type Props = { params: Promise<{ id: string }> }

export default function EditCoursePage({ params }: Props) {
  const { id } = use(params)
  const router  = useRouter()
  const { form, handleChange, handleSubmit, loading, fetching, error, success } =
    useAdminCourseForm(id)

  return (
    <RequireRole role="admin" redirectTo="/home">
      <AdminFormWrapper title="Edit course" backHref="/admin/courses">
        {fetching ? (
          <AdminLoadingTable />
        ) : (
          <CourseForm
            form={form}
            loading={loading}
            error={error}
            success={success}
            isEdit={true}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={() => router.push("/admin/courses")}
          />
        )}
      </AdminFormWrapper>
    </RequireRole>
  )
}