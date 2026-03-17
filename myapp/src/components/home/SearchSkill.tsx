"use client";
import { useState } from "react";
import { FaSearch } from "@/src/components/icons";

export default function SearchSkill(){
    const [query, setQuery] = useState("");
    const handleSearch=(e:React.SyntheticEvent)=>{
        e.preventDefault();
        console.log( query);
    };
    return (
        <form onSubmit={handleSearch} className="flex" >
            <input className="border-2 rounded-l-xl w-sm border-gray-400" type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search..." />
            <button className="border-2 rounded-r-2xl border-orange-300 hover:cursor-pointer bg-orange-300">
                <FaSearch/>
            </button>
        </form>
    );

}