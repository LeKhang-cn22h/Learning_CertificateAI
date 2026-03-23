import { apiClient }      from "@/shared/api/apiClient"
import type { ProfileData } from "@/features/profile/types"

export const profileService = {
  getProfile: () =>
    apiClient.get<ProfileData>("/profile"),
}