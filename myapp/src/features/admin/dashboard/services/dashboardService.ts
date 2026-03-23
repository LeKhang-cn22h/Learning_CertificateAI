import type { DashboardData } from "@/features/admin/dashboard/types"
import { apiClient } from "@/shared/api/apiClient"

export const dashboardService = {
  getDashboard: () =>
    apiClient.get<DashboardData>("/admin/dashboard"),
}