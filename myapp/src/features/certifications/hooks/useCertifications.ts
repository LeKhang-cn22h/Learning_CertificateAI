// src/features/certifications/hooks/useCertifications.ts
"use client"
import { useEffect, useReducer } from "react"
import type { CertificationsData } from "@/features/certifications/types"
import { certService } from "../services/certService";

type State  = { data: CertificationsData | null; loading: boolean; error: string | null }
type Action =
  | { type: "SUCCESS"; data: CertificationsData }
  | { type: "ERROR";   error: string }

function reducer(_: State, action: Action): State {
  if (action.type === "SUCCESS") return { data: action.data, loading: false, error: null }
  return                                { data: null,         loading: false, error: action.error }
}

export function useCertifications() {
  const [state, dispatch] = useReducer(reducer, { data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    certService.getCertifications().then(({ data, error }) => {
      if (cancelled) return
      if (error || !data) dispatch({ type: "ERROR",   error: error ?? "Failed to load" })
      else                dispatch({ type: "SUCCESS", data })
    })
    return () => { cancelled = true }
  }, [])

  return state
}