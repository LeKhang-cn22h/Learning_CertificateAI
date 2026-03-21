"use client"
import {useState, useEffect, useReducer} from "react"
import { courseService } from "@/src/features/courses/services/courseService"
import type {ExploreData} from "@/src/features/courses/types"

type State = {data:ExploreData | null; loading: boolean, error:string|null}
type Action=
|{type:"SUCCESS"; data:ExploreData}
|{type:"ERROR"; error:string}

function reducer(_:State, action:Action):State{
    if(action.type==="SUCCESS") return {data:action.data, loading:false, error:null}
    return {data:null, loading:false, error:action.error};
    }    
export function useExplore(){
    const [state, dispatch]=useReducer (reducer, {data:null, loading:true, error:null})
    const [category,setCategory]=useState("All")
    const [query,setQuery]=useState("")
    const [search, setSearch]=useState("")
    useEffect(()=>{
        let cancelled=false
        courseService.exploreCourses(category,search).then(({
            data,error
        })=>{
            if(cancelled) return
            if(error|| !data) dispatch({type:"ERROR", error:error ?? "Failed to load"})
            else dispatch({type:"SUCCESS", data})
            })
            return ()=>{cancelled=true}
        },[category,search])
        const filtered=state.data?.courses?.filter(c=>{
            const matchCat= category==="All" || c.category === category
            const matchQuery=query ==="" ||
            c.title.toLowerCase().includes(query.toLowerCase()) ||
            c.description.toLowerCase().includes(query.toLowerCase())
            return matchCat && matchQuery
         }) ?? []
         const handleSearch=()=>setSearch(query)
         const clearFilters=()=>{
            setCategory("All")
            setQuery("")
            setSearch("")
         }
         console.log("data:", state.data)
        console.log("courses:", state.data?.courses)
        console.log("filtered:", filtered)
         return {
            ...state,
            filtered,
            category,setCategory,
            query,setQuery,
            handleSearch,
            clearFilters,
            categories:state.data?.categories??[],

         }
    }