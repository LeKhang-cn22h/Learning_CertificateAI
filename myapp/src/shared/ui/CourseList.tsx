"use client";

import { useCourses } from "@/features/courses/hooks/useCourses";
import {useState} from "react";
import CourseCard from "./CourseCard";
type Props={
    topic:string
}

export default function CourseList({ topic}:Props){
    const{data, loading,error} =useCourses()
    const [startIndex, setStartindex]=useState(0);
    const limit=4;
    if (loading) return(
        <div className="w-full bg-white p-4 rounded-2xl">
            <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
        </div>
    )
    if(error) return (
        <div className="w-full bg-white p-4 rounded-2xl">
            <p className="text-red-500 text-sm">{error}</p>
        </div>
    )
    const courses = data?.courses??[]
    const visibleCourses = courses.slice(startIndex, startIndex + limit)
    return (
        <div className="w-full bg-white px-4 py-4 rounded-2xl flex flex-col gap-2">
            <div className="flex justify-between items-center text-black text-bold text-2xl">
                {topic}
            <div className="flex  gap-2">
                <button onClick={()=> setStartindex(i=>i-limit)} disabled={startIndex ===0} className="bg-black text-white rounded-full w-7 h-7 hover:bg-gray-700 transition disabled:opacity-40 disabled:cursor-not-allowed hover:cursor-pointer" >{"<"}</button>
                <button onClick={()=>setStartindex(i=>i+limit)} disabled={startIndex+limit>= courses.length} className="bg-black text-white rounded-full w-7 h-7 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-700 hover:cursor-pointer ">{">"}</button>

            </div>
            </div>
            <div className="flex gap-6 transition-transform duration-300 ease-in-out transform mx-auto" >
                {visibleCourses.map(course=>(
                    <CourseCard key={course.id}
                        id={course.id}
                        img={course.img}
                        category={course.category}
                        time={course.time}
                        title={course.title}
                        description={course.description}
                        author={course.author}
                    />
                ))}
            </div>
            
        </div>
    )
}
