import { apiClient }        from '@/src/lib/apiClient'
import type { LibraryData } from '@/src/features/library/types'

export const libraryService = {
  getLibrary: () => apiClient.get<LibraryData>('/library'),
}
