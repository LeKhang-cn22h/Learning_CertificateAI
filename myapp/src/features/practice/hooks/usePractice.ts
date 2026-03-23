"use client"
import { useEffect, useReducer, useState } from "react"
import type { PracticeData }               from "@/features/practice/types"
import { SearchParams } from "@/shared/types";
import { practiceService } from "../services/practiceService";

type State = { data: PracticeData | null; loading: boolean; error: string | null }
type Action =
  | { type: "SUCCESS"; data: PracticeData }
  | { type: "ERROR";   error: string }

function reducer(_: State, action: Action): State {
  if (action.type === "SUCCESS") return { data: action.data, loading: false, error: null }
  return { data: null, loading: false, error: action.error }
}

export function usePractice(initialParams?: SearchParams) {
  const [state, dispatch] = useReducer(reducer, { data: null, loading: true, error: null })
  const [params, setParams] = useState<SearchParams | undefined>(initialParams)

  useEffect(() => {
    let cancelled = false
    practiceService.getPracticeData().then(({ data, error }) => {
      if (cancelled) return
      if (error || !data) dispatch({ type: "ERROR", error: error ?? "Unknown error" })
      else                dispatch({ type: "SUCCESS", data })
    })
    return () => { cancelled = true }
  }, [params])

  const filterByCategory = (category: string) =>
    setParams(prev => ({ ...prev, category }))

  return { ...state, filterByCategory }
}