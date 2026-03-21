"use client"
import { useEffect, useReducer, useState } from "react"
import { courseService }         from "@/src/features/courses/services/courseService"
import type { CoursesData }      from "@/src/features/courses/types"

type State = { data: CoursesData | null; loading: boolean; error: string | null }
type Action =
  | { type: "SUCCESS"; data: CoursesData }
  | { type: "ERROR";   error: string }

function reducer(_: State, action: Action): State {
  if (action.type === "SUCCESS") return { data: action.data, loading: false, error: null }
  return { data: null, loading: false, error: action.error }
}


export function useCourses() {
  const [state, dispatch] = useReducer(reducer, { data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    courseService.getCourses().then(({ data, error }) => {
      if (cancelled) return
      if (error || !data) dispatch({ type: "ERROR", error: error ?? "Failed to load" })
      else                dispatch({ type: "SUCCESS", data })
    })
    return () => { cancelled = true }
  }, [])

  return state
}