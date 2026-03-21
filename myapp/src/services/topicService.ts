// src/services/topicService.ts
import { apiClient }                 from "@/src/lib/apiClient"
import type { TopicData, TopicSlug } from "@/src/features/topics/types"

export const topicService = {
  getTopicBySlug: (slug: TopicSlug) =>
    apiClient.get<TopicData>(`/topics/${slug}`),
}