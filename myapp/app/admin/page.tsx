// app/admin/page.tsx
"use client"
import RequireRole         from "@/features/auth/components/RequireRole"
import { useDashboard }    from "@/features/admin/dashboard/hooks/useDashboard"
import StatsRow            from "@/features/admin/dashboard/components/StatsRow"
import NewUsersChart       from "@/features/admin/dashboard/components/NewUsersChart"
import DailyLearningChart  from "@/features/admin/dashboard/components/DailyLearningChart"
import CategoryChart       from "@/features/admin/dashboard/components/CategoryChart"
import TopCoursesChart     from "@/features/admin/dashboard/components/TopCoursesChart"

export default function AdminPage() {
  const { data, loading, error } = useDashboard()

  return (
    <RequireRole role="admin" redirectTo="/home">
      <div className="flex flex-col gap-6 text-black">

        {loading && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {data && (
          <>
            {/* Stats row */}
            <StatsRow stats={data.stats} />

            {/* Charts row 1 — Line + Bar */}
            <div className="grid grid-cols-2 gap-6">
              <NewUsersChart      data={data.newUsers} />
              <DailyLearningChart data={data.dailyLearning} />
            </div>

            {/* Charts row 2 — Donut + Horizontal bar */}
            <div className="grid grid-cols-2 gap-6">
              <CategoryChart   data={data.categoryDistribution} />
              <TopCoursesChart data={data.topCourses} />
            </div>
          </>
        )}

      </div>
    </RequireRole>
  )
}