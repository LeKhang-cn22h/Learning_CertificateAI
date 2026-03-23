"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/features/auth/hooks/useAuth"
import type {ReactNode} from "react"

type Props={
    role: "admin" | "user"
    children:ReactNode
    fallback?:ReactNode
    redirectTo?:string
}

export default function RequireRole({role,children, fallback, redirectTo}:Props){
    const {user, initialized}= useAuth()
    const router=useRouter()
    useEffect(()=>{
        if(!initialized) return 
        if(!user){
            router.push("/login")
            return 
        }
        if(user.role !==role && !fallback){
            router.push(redirectTo ?? "/home")
        }
    }, [initialized,user,role,fallback,redirectTo,router])
    // đang check auth
    if(!initialized) return(
        <div className="flex items-center justify-center min-h-[200px]">
            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"/>
        </div>
    )
    //chưa login
    if(!user) return null
    //sai role
    if(user.role !==role) return fallback ? <>{fallback}</>:null

    //đúng role
    return<>{children}</>

}