// Mockoon → NEXT_PUBLIC_API_URL=http://localhost:3001/api
import { tokenStorage } from "@/src/lib/token"
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api"

export interface ApiResponse<T> {
  data:   T | null
  error:  string | null
  status: number
}

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token=tokenStorage.getAccess()
  const authHeader:Record<string,string>=token
  ?{Authorization:`Bearer ${token}`}
  :{}
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...authHeader,
        ...options.headers,
      },
      cache: "no-store",
      ...options,
    })
    if(res.status===401){
      tokenStorage.clear()
      if(typeof window !== "undefined"){
        window.location.href ="/login"
      }
      return {data:null, error:"Unauthorized", status:401}
    }

    if (!res.ok) {
      const body = await res.json().catch(()=>({}))
      return {
        data:   null,
        error:  (body as {error?:string}).error??`HTTP ${res.status}`,
        status: res.status,
      }
    }

    const data: T = await res.json()
    return { data, error: null, status: res.status }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error(`[apiClient] ${path}`, message)
    return { data: null, error: message, status: 0 }
  }
}

export const apiClient = {
  get: <T>(path: string, init?: RequestInit) =>
    request<T>(path, { method: "GET", ...init }),

  post: <T>(path: string, body: unknown, init?: RequestInit) =>
    request<T>(path, { method: "POST", body: JSON.stringify(body), ...init }),

  put: <T>(path: string, body: unknown, init?: RequestInit) =>
    request<T>(path, { method: "PUT", body: JSON.stringify(body), ...init }),

  delete: <T>(path: string, init?: RequestInit) =>
    request<T>(path, { method: "DELETE", ...init }),
}