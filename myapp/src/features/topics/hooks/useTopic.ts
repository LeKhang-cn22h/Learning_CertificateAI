'use client'
import { useEffect, useState }            from 'react'
import type { TopicData, TopicSlug }      from '@/features/topics/types'
import { topicService } from '../services/topicService'

export function useTopic(slug: TopicSlug) {
  const [data, setData]       = useState<TopicData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  useEffect(() => {
    topicService.getTopicBySlug(slug).then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [slug])
  return { data, loading, error }
}
