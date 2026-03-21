"use client"
import {FaArrowCircleRight} from "@/src/components/icons";
import {useState} from 'react'
import Link from "next/link";
import {IoSparklesSharp } from "@/src/components/icons"
export default function CareerSearch(){
    const [value,setValue]=useState("");
    return(
        <div className="p-8 text-black flex flex-col gap-4 bg-white rounded-2xl w-4/5 mx-auto">
            <div >
                <h2 className="font-bold text-xl">
                    Choose a focus to unlock your personalized learning plan
                </h2>
                <p>
                    We will create a plan to help you get there.
                </p>
            </div>
            <form   className="flex gap-2 items-center" >
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="I want to..." className="h-8 border-2 border-gray-100 p-6 rounded-2xl w-1/2 hover:border-black"/>
                <button className="text-5xl">
                    <FaArrowCircleRight className={`${value?"text-black cursor-pointer":"text-gray-200 cursor-not-allowed"}`}/>
                </button>
            </form>
            <div className="flex gap-4">
                <div className="border p-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl group">
                    <Link href="/" className="flex items-center gap-2">
                    <IoSparklesSharp className="transition-transform group-hover:scale-125 text-blue-600"/>
                    <span>Select skills</span>
                    </Link>
                </div>
                <div className="border p-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                    <Link href="/" className="flex items-center gap-2 group">
                    <IoSparklesSharp className="transition-transform group-hover:scale-125 text-blue-600"/>
                    <span>Explore a different career</span>
                    </Link>
                </div>
            </div>
        </div>

    );
}