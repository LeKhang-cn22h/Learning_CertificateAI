// Utility types cho search, filter, query params
import type { SortOrder } from "./enums";

export interface SearchParams {
  q?:        string;
  category?: string;
  level?:    string;
  page?:     number;
  limit?:    number;
  sort?:     SortOrder;
}