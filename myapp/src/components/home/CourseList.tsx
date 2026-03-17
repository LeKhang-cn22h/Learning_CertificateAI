"use client";

import CourseCard from "./CourseCard";
import {useState} from "react";
type Course={
  img:string,
  category:string,
  time:number,
  title:string,
  description:string,
  author:string
}
type Props={
    topic:string,
    Course:Course[]
}
export default function CourseList({ topic,Course}:Props){
    const [startIndex, setStartindex]=useState(0);
    const limit=4;
    const nextItems=()=>{
        if(startIndex+limit<Course.length){
            setStartindex(startIndex+limit);
        }
    };
    const previtems=()=>{
        if(startIndex-limit>=0){
            setStartindex(startIndex-limit);
        }
    };
    const visibleCourses=Course.slice(startIndex,startIndex+limit);

    return (
        <div className="w-full bg-white px-4 py-4 rounded-2xl flex flex-col gap-2">
            <div className="flex justify-between">
                {topic}
            <div className="flex  gap-2">
                <button onClick={previtems} disabled={startIndex ===0} className="bg-black text-white rounded-full w-7 h-7 hover:bg-gray-700 transition disabled:opacity-40 disabled:cursor-not-allowed hover:cursor-pointer" >{"<"}</button>
                <button onClick={nextItems} disabled={startIndex+limit>= Course.length} className="bg-black text-white rounded-full w-7 h-7 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-700 hover:cursor-pointer ">{">"}</button>

            </div>
            </div>
            <div className="flex gap-6 transition-transform duration-300 ease-in-out transform" >
                {visibleCourses.map((course,index)=>(
                    <CourseCard key={index}
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
