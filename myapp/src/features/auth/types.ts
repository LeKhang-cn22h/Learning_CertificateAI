// src/features/auth/types.ts
import type { User } from "@/entities/user"

export type AuthUser = User  

export interface AuthTokens {
  accessToken:  string
  refreshToken: string
}

export interface AuthResponse {
  accessToken:  string
  refreshToken: string
  user:         AuthUser
}

export interface LoginPayload {
  email:    string
  password: string
}

export interface RegisterPayload {
  name:     string
  email:    string
  password: string
}

export interface AuthError {
  error: string
}