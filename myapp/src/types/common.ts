// src/types/common.ts
// Primitives — không import từ file nào trong project
// Mọi type khác có thể import từ đây, không bao giờ ngược lại

export type ID = string;

export interface Timestamps {
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  page:       number;
  limit:      number;
  total:      number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: Pagination;
}

// ApiResponse — wrapper chuẩn từ apiClient
export interface ApiResponse<T> {
  data:   T | null;
  error:  string | null;
  status: number;
}