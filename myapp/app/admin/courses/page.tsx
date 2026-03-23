// app/admin/courses/page.tsx
"use client"
import RequireRole          from "@/src/features/auth/components/RequireRole"
import AdminPageHeader      from "@/src/features/admin/shared/components/AdminPageHeader"
import AdminSearchBar       from "@/src/features/admin/shared/components/AdminSearchBar"
import AdminLoadingTable    from "@/src/features/admin/shared/components/AdminLoadingTable"
import CourseTable          from "@/src/features/admin/courses/components/CourseTable"
import { useAdminCourses }  from "@/src/features/admin/courses/hooks/useAdminCourses"

export default function AdminCoursesPage() {
  const {
    loading, error,
    filtered,
    search,    setSearch,
    category,  setCategory,
    categories,
    deleteId,
    deleteCourse,
  } = useAdminCourses()

  return (
    <RequireRole role="admin" redirectTo="/home">
      <div className="flex flex-col gap-6 text-black">

        <AdminPageHeader
          title="Manage courses"
          description={`${filtered.length} courses total`}
          addHref="/admin/courses/new"
          addLabel="Add course"
        />

        <AdminSearchBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
          placeholder="Search courses..."
        />

        <div className="bg-white rounded-2xl overflow-hidden">
          {loading || error ? (
            <AdminLoadingTable error={error} />
          ) : (
            <CourseTable
              courses={filtered}
              deleteId={deleteId}
              onDelete={deleteCourse}
            />
          )}
        </div>

      </div>
    </RequireRole>
  )
}