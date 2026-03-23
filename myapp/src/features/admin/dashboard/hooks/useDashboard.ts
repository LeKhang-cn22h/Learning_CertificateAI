-"use client"
import { useEffect, useReducer }  from "react"
import { dashboardService }       from "@/src/features/admin/dashboard/services/dashboardService"
import type { DashboardData }     from "@/src/features/admin/dashboard/types"

type State  = { data: DashboardData | null; loading: boolean; error: string | null }
type Action =
  | { type: "SUCCESS"; data: DashboardData }
  | { type: "ERROR";   error: string }

function reducer(_: State, action: Action): State {
  if (action.type === "SUCCESS") return { data: action.data, loading: false, error: null }
  return                                { data: null,         loading: false, error: action.error }
}

export function useDashboard() {
  const [state, dispatch] = useReducer(reducer, { data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    dashboardService.getDashboard().then(({ data, error }) => {
      if (cancelled) return
      if (error || !data) dispatch({ type: "ERROR",   error: error ?? "Failed to load" })
      else                dispatch({ type: "SUCCESS", data })
    })
    return () => { cancelled = true }
  }, [])

  return state
}