// Barrel export — KHÔNG define type mới ở đây
// Dùng khi 1 component cần type từ nhiều domain khác nhau
// Nếu chỉ cần type của 1 domain → import thẳng từ features/*/types.ts

// Primitives
export type { ID, Timestamps, Pagination, PaginatedResponse, ApiResponse } from "./common";

// Enums
export type {
  Level, Difficulty, SortOrder,
  ContentType, ContentCategory,
  TopicSlug, ActivityType,
} from "./enums";

// Utils
export type { SearchParams } from "./utils";

// Domain types — re-export để dùng chéo domain
export type { Course, ContentItem, ContentData }         from "@/src/features/content/types";
export type { Certification, CertProvider, CertificationsData } from "@/src/features/certifications/types";
export type { CareerPath, CareerData, CareerSearchResult }       from "@/src/features/career/types";
export type { Challenge, PracticeData }                          from "@/src/features/practice/types";
export type { UserProfile, ProfileActivity, ProfileCertificate, ProfileData } from "@/src/features/profile/types";
export type { TopicData, TopicInstructor, LearningPath }         from "@/src/features/topics/types";
export type { LibraryItem, LibraryCollection, LibraryData }      from "@/src/features/library/types";
export type { Skill }                                            from "@/src/features/home/types";