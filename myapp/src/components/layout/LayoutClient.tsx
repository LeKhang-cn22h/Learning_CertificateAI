"use client";
import { useState } from "react";
import { usePathname } from "next/navigation"
import SideBar from "./SideBar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
const AUTH_PATHS = ["/login", "/register"]
 export default function LayoutClient({children}: {children:React.ReactNode}){
    const [open, setOpen] =useState(false)
    const pathname=usePathname()
    const isAuthPage= AUTH_PATHS.some(p=>pathname.startsWith(p))

    function toggleMenu(){
        setOpen(!open);
    }
    //auth page not sidebar
    if (isAuthPage) return <>{children}</>
    return(
        <div className=" flex flex-col flex-1">
            <AppHeader toggleMenu={toggleMenu} menu={open}/>
            <div className="flex flex-1">
                <SideBar open={open}/>
                <main className="flex-1 bg-gray-100 p-4">
                    {children}
                </main>
            </div>
            <AppFooter/>
        </div>
    );
 }