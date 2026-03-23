// app/admin/courses/page.tsx
"use client"
import RequireRole          from "@/features/auth/components/RequireRole"
import AdminPageHeader      from "@/features/admin/shared/components/AdminPageHeader"
import AdminSearchBar       from "@/features/admin/shared/components/AdminSearchBar"
import AdminLoadingTable    from "@/features/admin/shared/components/AdminLoadingTable"
import CourseTable          from "@/features/admin/courses/components/CourseTable"
import Pagination           from "@/shared/ui/Pagination"
import { useAdminCourses }  from "@/features/admin/courses/hooks/useAdminCourses"
import { usePagination }    from "@/shared/hooks/usePagination"
import type { AdminCourse } from "@/features/admin/courses/types"

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

  const {
    pagedItems,
    currentPage,
    totalPages,
    totalItems,
    pageSize,
    goTo,
    reset,
  } = usePagination<AdminCourse>(filtered, 6)

  return (
    <RequireRole role="admin" redirectTo="/home">
      <div className="flex flex-col gap-6 text-black">

        <AdminPageHeader
          title="Manage courses"
          description={`${totalItems} courses total`}
          addHref="/admin/courses/new"
          addLabel="Add course"
        />

        <AdminSearchBar
          search={search}
          setSearch={v => { setSearch(v); reset() }}
          category={category}
          setCategory={v => { setCategory(v); reset() }}
          categories={categories}
          placeholder="Search courses..."
        />

        <div className="bg-white rounded-2xl overflow-hidden">
          {loading || error ? (
            <AdminLoadingTable error={error} />
          ) : (
            <>
              <CourseTable
                courses={pagedItems}
                deleteId={deleteId}
                onDelete={deleteCourse}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                pageSize={pageSize}
                onGoTo={goTo}
              />
            </>
          )}
        </div>

      </div>
    </RequireRole>
  )
}