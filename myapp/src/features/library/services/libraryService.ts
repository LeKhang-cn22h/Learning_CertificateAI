import { apiClient }      from "@/shared/api/apiClient"
import type { LibraryData } from "@/features/library/types"

export const libraryService = {
  getLibrary: () =>
    apiClient.get<LibraryData>("/library"),
}