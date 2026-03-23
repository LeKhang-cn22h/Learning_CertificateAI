"use client"
import { useEffect, useReducer, useState } from "react"
import type { ContentData, ContentCategory } from "@/features/content/types"
import { SearchParams } from "@/shared/types"
import { contentService } from "../services/contentService"

type State = {
  data:    ContentData | null
  loading: boolean
  error:   string | null
}

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: ContentData }
  | { type: "ERROR";   error: string }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOADING": return { data: state.data, loading: true,  error: null }
    case "SUCCESS": return { data: action.data, loading: false, error: null }
    case "ERROR":   return { data: null,        loading: false, error: action.error }
  }
}

export function useContent(category?: ContentCategory, initialParams?: SearchParams) {
  const [state, dispatch] = useReducer(reducer, { data: null, loading: true, error: null })
  const [params, setParams] = useState<SearchParams | undefined>(initialParams)

  useEffect(() => {
    let cancelled = false

    const call = category
      ? contentService.getContentByCategory(category)
      : contentService.getAllContent()

    call.then(({ data, error }) => {
      if (cancelled) return
      if (error || !data) dispatch({ type: "ERROR", error: error ?? "Unknown error" })
      else                dispatch({ type: "SUCCESS", data })
    })

    return () => { cancelled = true }
  }, [category, params])

  const updateParams = (p: SearchParams) =>
    setParams(prev => ({ ...prev, ...p }))

  return { ...state, updateParams }
}