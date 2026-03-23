// Shared enums — chỉ khai báo những gì dùng ở ít nhất 2 domain khác nhau
// Enum của riêng 1 domain → đặt trong features/*/types.ts

export type Level      = "Beginner" | "Intermediate" | "Advanced";
export type Difficulty = "Easy" | "Medium" | "Hard";
export type SortOrder  = "popular" | "newest" | "rating";

export type ContentType     = "video" | "article" | "podcast" | "ebook";
export type ContentCategory = "technology" | "business" | "creative";

export type TopicSlug = "ai-tech" | "leadership" | "marketing";

export type ActivityType =
  | "course_completed"
  | "cert_earned"
  | "challenge_done";