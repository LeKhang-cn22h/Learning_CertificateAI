// src/features/courses/hooks/useTrial.ts
"use client"
import { useEffect, useReducer } from "react"
import { courseService }         from "@/src/features/courses/services/courseService"
import type { TrialData }        from "@/src/features/courses/types"

type State  = { data: TrialData | null; loading: boolean; error: string | null }
type Action =
  | { type: "SUCCESS"; data: TrialData }
  | { type: "ERROR";   error: string }

function reducer(_: State, action: Action): State {
  if (action.type === "SUCCESS") return { data: action.data, loading: false, error: null }
  return                                { data: null,         loading: false, error: action.error }
}

export function useTrial() {
  const [state, dispatch] = useReducer(reducer, { data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    courseService.getTrial().then(({ data, error }) => {
      if (cancelled) return
      if (error || !data) dispatch({ type: "ERROR",   error: error ?? "Failed to load" })
      else                dispatch({ type: "SUCCESS", data })
    })
    return () => { cancelled = true }
  }, [])

  return state
}