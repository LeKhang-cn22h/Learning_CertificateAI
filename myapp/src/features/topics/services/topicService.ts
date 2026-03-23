import { apiClient }    from "@/shared/api/apiClient"
import type { TopicData } from "@/entities/topic"

export const topicService = {
  getTopicBySlug: (slug: string) =>
    apiClient.get<TopicData>(`/topics/${slug}`),
}