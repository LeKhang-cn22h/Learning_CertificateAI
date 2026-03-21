// src/services/profileService.ts
import { apiClient }         from '@/src/lib/apiClient'
import type { ProfileData }  from '@/src/features/profile/types'

export const profileService = {
  getProfile: () => apiClient.get<ProfileData>('/profile'),
}
