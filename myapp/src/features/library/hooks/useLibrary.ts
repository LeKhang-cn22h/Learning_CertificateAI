'use client'
import { useEffect, useState }  from 'react'
import { libraryService }       from '@/src/services/libraryService'
import type { LibraryData }     from '@/src/features/library/types'

export function useLibrary() {
  const [data, setData]       = useState<LibraryData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  useEffect(() => {
    libraryService.getLibrary().then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [])
  return {
    data, loading, error,
    savedCount:      data?.saved.length      ?? 0,
    inProgressCount: data?.inProgress.length ?? 0,
    historyCount:    data?.history.length    ?? 0,
  }
}
