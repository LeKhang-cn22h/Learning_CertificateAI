import { apiClient } from "@/src/lib/apiClient";
import type { AuthResponse,LoginPayload,RegisterPayload, AuthUser } from "@/src/features/auth/types";
 export const authService={
    login:(payload:LoginPayload)=>
        apiClient.post<AuthResponse>("/auth/login",payload),
    register: (payload:RegisterPayload)=>
        apiClient.post<AuthResponse>("/auth/register",payload),
    me:()=>
        apiClient.get<AuthUser>("auth/me"),
    logout: ()=>
        apiClient.post<{mess:string}>("/auth/logout",{}),
 }