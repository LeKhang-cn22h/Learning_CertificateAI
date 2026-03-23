// src/features/career/hooks/useCareer.ts
"use client"
import { useEffect, useReducer, useCallback } from "react"
import type { CareerData, CareerSearchResult } from "@/features/career/types"
import { careerService }                       from "@/features/career/services/careerService"

// --- useCareer ---
type CareerState  = { data: CareerData | null; loading: boolean; error: string | null }
type CareerAction =
  | { type: "SUCCESS"; data: CareerData }
  | { type: "ERROR";   error: string }

function careerReducer(_: CareerState, action: CareerAction): CareerState {
  if (action.type === "SUCCESS") return { data: action.data, loading: false, error: null }
  return                                { data: null,         loading: false, error: action.error }
}

export function useCareer() {
  const [state, dispatch] = useReducer(careerReducer, { data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    careerService.getCareerData().then(({ data, error }) => {
      if (cancelled) return
      if (error || !data) dispatch({ type: "ERROR",   error: error ?? "Failed to load" })
      else                dispatch({ type: "SUCCESS", data })
    })
    return () => { cancelled = true }
  }, [])

  return state
}

// --- useCareerSearch ---
type SearchState  = { results: CareerData | null; loading: boolean; error: string | null }
type SearchAction =
  | { type: "LOADING" }
  | { type: "SUCCESS"; results: CareerData }
  | { type: "ERROR";   error: string }

function searchReducer(_: SearchState, action: SearchAction): SearchState {
  if (action.type === "LOADING") return { results: null,         loading: true,  error: null }
  if (action.type === "SUCCESS") return { results: action.results, loading: false, error: null }
  return                                { results: null,         loading: false, error: action.error }
}

export function useCareerSearch() {
  const [state, dispatch] = useReducer(searchReducer, { results: null, loading: false, error: null })

  const search = useCallback((query: string) => {
    if (!query.trim()) return
    dispatch({ type: "LOADING" })
    careerService.searchCareers(query).then(({ data, error }) => {
      if (error || !data) dispatch({ type: "ERROR",   error: error ?? "Failed to load" })
      else                dispatch({ type: "SUCCESS", results: data })
    })
  }, [])

  return { ...state, search }
}