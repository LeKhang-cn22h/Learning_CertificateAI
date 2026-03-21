'use client'
import { useEffect, useState, useCallback }        from 'react'
import { careerService }                           from '@/src/services/careerService'
import type { CareerData, CareerSearchResult }     from '@/src/features/career/types'

export function useCareer() {
  const [data, setData]       = useState<CareerData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  useEffect(() => {
    careerService.getCareerData().then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [])
  return { data, loading, error }
}

export function useCareerSearch() {
  const [results, setResults] = useState<CareerSearchResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)
  const search = useCallback((query: string) => {
    if (!query.trim()) return
    setLoading(true)
    careerService.searchCareers(query).then(({ data, error }) => {
      setResults(data); setError(error); setLoading(false)
    })
  }, [])
  return { results, loading, error, search }
}
