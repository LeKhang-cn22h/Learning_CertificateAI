"use client"
import { useEffect, useReducer, useState, useCallback } from "react"
import { adminCourseService }                           from "@/src/features/admin/courses/services/adminCourseService"
import type { AdminCoursesData }                        from "@/src/features/admin/courses/types"

type State  = { data: AdminCoursesData | null; loading: boolean; error: string | null }
type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: AdminCoursesData }
  | { type: "ERROR";   error: string }

function reducer(_: State, action: Action): State {
  if (action.type === "LOADING") return { data: null,        loading: true,  error: null }
  if (action.type === "SUCCESS") return { data: action.data, loading: false, error: null }
  return                                { data: null,        loading: false, error: action.error }
}

export function useAdminCourses() {
  const [state, dispatch]       = useReducer(reducer, { data: null, loading: true, error: null })
  const [search,    setSearch]   = useState("")
  const [category,  setCategory] = useState("All")
  const [deleteId,  setDeleteId] = useState<string | null>(null)

  const load = useCallback(() => {
    dispatch({ type: "LOADING" })
    adminCourseService.getCourses().then(({ data, error }) => {
      if (error || !data) dispatch({ type: "ERROR",   error: error ?? "Failed to load" })
      else                dispatch({ type: "SUCCESS", data })
    })
  }, [])

  useEffect(() => { load() }, [load])

  const filtered = state.data?.courses.filter(c => {
    const matchSearch   = search === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.author.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === "All" || c.category === category
    return matchSearch && matchCategory
  }) ?? []

  const categories = [
    "All",
    ...Array.from(new Set(state.data?.courses.map(c => c.category) ?? [])),
  ]

  async function deleteCourse(id: string) {
    setDeleteId(id)
    const { error } = await adminCourseService.deleteCourse(id)
    setDeleteId(null)
    if (!error) load()
  }

  return {
    ...state,
    filtered,
    search,    setSearch,
    category,  setCategory,
    categories,
    deleteId,
    deleteCourse,
    reload: load,
  }
}