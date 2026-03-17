"use client";
import { useState } from "react";
import SideBar from "./SideBar";
import {CiMenuBurger } from "@/src/components/icons";
 export default function LayoutClient({children}: {children:React.ReactNode}){
    const [open, setOpen] =useState(false);
    return(
        <div className=" flex flex-1">
            {open && <SideBar/>}
            <main className="flex-1 bg-gray-100 p-4">
                <button onClick={()=> setOpen(!open)} className="bg-black text-white px-3 py-1 rounded-md mb-2">
                    <CiMenuBurger/>
                </button>
                {children}
            </main>
        </div>
    );
 }