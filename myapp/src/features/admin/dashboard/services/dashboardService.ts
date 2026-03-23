import { apiClient }        from "@/src/lib/apiClient"
import type { DashboardData } from "@/src/features/admin/dashboard/types"

export const dashboardService = {
  getDashboard: () =>
    apiClient.get<DashboardData>("/admin/dashboard"),
}