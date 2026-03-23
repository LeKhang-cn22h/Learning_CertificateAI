'use client'
import { useEffect, useState }  from 'react'
import type { ProfileData }     from '@/features/profile/types'
import { profileService } from '../services/profileService'

export function useProfile() {
  const [data, setData]       = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  useEffect(() => {
    profileService.getProfile().then(({ data, error }) => {
      setData(data); setError(error); setLoading(false)
    })
  }, [])
  return { data, loading, error }
}
