"use client"
import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useCallback,
    type ReactNode,
} from "react"
import { useRouter } from "next/navigation"
import { authService } from "@/src/features/auth/services/authService"
import {tokenStorage} from "@/src/lib/token"

import type{
    AuthUser,
    LoginPayload,
    RegisterPayload
} from "@/src/features/auth/types"

type AuthState={
    user:AuthUser | null
    loading:boolean
    error:string | null
    initialized:boolean
}

type AuthAction=
| {type:"LOADING"}
| {type:"INIT_DONE"; user:AuthUser | null}
| {type:"SUCCESS"; user:AuthUser}
| {type:"ERROR";  error:string}
| {type:"LOGOUT"}

function reducer(state:AuthState, action:AuthAction): AuthState{
    switch(action.type){
        case "LOADING":
            return {...state, loading:true, error:null}
        case "INIT_DONE":
            return {user:action.user, loading:false, error:null, initialized:true}
        case "SUCCESS":
            return {user:action.user, loading:false, error:null, initialized:true}
        case "ERROR":
            return {...state, loading:false, error:action.error, initialized:true}
        case "LOGOUT":
            return {user:null, loading:false, error:null, initialized:true}
    }
}
type AuthContextType= AuthState &{
    login: (payload:LoginPayload) => Promise<void>
    register: (payload:RegisterPayload) => Promise<void>
    logout: ()=> Promise<void>
}
const AuthContext=createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    user: null, loading: true, error: null, initialized: false,
  })
  const router = useRouter()

  // Khi app khởi động: kiểm tra token cũ còn hợp lệ không
  useEffect(() => {
    if (!tokenStorage.hasToken()) {
      dispatch({ type: "INIT_DONE", user: null })
      return
    }
    authService.me().then(({ data, error }) => {
      if (error || !data) {
        tokenStorage.clear()
        dispatch({ type: "INIT_DONE", user: null })
      } else {
        dispatch({ type: "INIT_DONE", user: data })
      }
    })
  }, [])

  const login = useCallback(async (payload: LoginPayload) => {
    dispatch({ type: "LOADING" })
    const { data, error } = await authService.login(payload)
    if (error || !data) {
      dispatch({ type: "ERROR", error: error ?? "Login failed" })
      return
    }
    tokenStorage.set(data.accessToken, data.refreshToken)
    document.cookie = `certai_access_token=${data.accessToken}; path=/; SameSite=Lax`
    document.cookie = `certai_role=${data.user.role}; path=/; SameSite=Lax`
    dispatch({ type: "SUCCESS", user: data.user })
    router.push(data.user.role==="admin"?"/admin":"/home")
  }, [router])

  const register = useCallback(async (payload: RegisterPayload) => {
    dispatch({ type: "LOADING" })
    const { data, error } = await authService.register(payload)
    if (error || !data) {
      dispatch({ type: "ERROR", error: error ?? "Registration failed" })
      return
    }
    tokenStorage.set(data.accessToken, data.refreshToken)
    document.cookie = `certai_access_token=${data.accessToken}; path=/; SameSite=Lax`
    document.cookie = `certai_role=${data.user.role}; path=/; SameSite=Lax`
    dispatch({ type: "SUCCESS", user: data.user })
    router.push(data.user.role==="admin"?"/admin":"/home")
  }, [router])

  const logout = useCallback(async () => {
    await authService.logout()
    tokenStorage.clear()
    document.cookie = "certai_access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "certai_role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    dispatch({ type: "LOGOUT" })
    router.push("/login")
  }, [router])

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>")
  return {
    ...ctx,
    isAdmin: ctx.user?.role ==="admin",
    isUser: ctx.user?.role ==="user",
  }
}