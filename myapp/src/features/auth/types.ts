export interface AuthUser{
    id:string
    name:string 
    email:string
    avatar:string 
    role: "user" | "admin"
}
 export interface AuthResponse{
    accessToken:string
    refreshToken:string
    user:AuthUser
 }
  export interface LoginPayload{
    email:string
    password:string
  }

  export interface RegisterPayload{
    name:string
    email:string
    password:string
  }

  export interface AuthError{
    error:string
  }
  