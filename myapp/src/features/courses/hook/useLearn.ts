"use client"
import { useEffect, useReducer, useState, useCallback } from "react"
import { courseService }                                from "@/src/features/courses/services/courseService"
import type { CourseDetail }                            from "@/src/features/courses/types"

type State  = { data: CourseDetail | null; loading: boolean; error: string | null }
type Action =
  | { type: "SUCCESS"; data: CourseDetail }
  | { type: "ERROR";   error: string }

function reducer(_: State, action: Action): State {
  if (action.type === "SUCCESS") return { data: action.data, loading: false, error: null }
  return                                { data: null,         loading: false, error: action.error }
}

export function useLearn(courseId: string) {
  const [state, dispatch]               = useReducer(reducer, { data: null, loading: true, error: null })
  const [currentLessonId, setCurrentLessonId] = useState<string>("")
  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [showPopup,  setShowPopup]      = useState(false)
  const [isFinished, setIsFinished]     = useState(false)

  useEffect(() => {
    let cancelled = false
    courseService.getCourseById(courseId).then(({ data, error }) => {
      if (cancelled) return
      if (error || !data) dispatch({ type: "ERROR",   error: error ?? "Failed to load" })
      else {
        dispatch({ type: "SUCCESS", data })
        setCurrentLessonId(data.lessons[0]?.id ?? "")
      }
    })
    return () => { cancelled = true }
  }, [courseId])

  const lessons      = state.data?.lessons ?? []
  const currentIndex = lessons.findIndex(l => l.id === currentLessonId)
  const isLastLesson = currentIndex === lessons.length - 1
  const currentLesson = lessons.find(l => l.id === currentLessonId)

  const completeLesson = useCallback(() => {
    if (!currentLessonId || completedLessons.includes(currentLessonId)) return
    setCompletedLessons(prev => [...prev, currentLessonId])
    setShowPopup(true)

    if (currentIndex === lessons.length - 1) {
      setIsFinished(true)
    }
  }, [currentLessonId, completedLessons, currentIndex, lessons.length])

  const goNextLesson = useCallback(() => {
    setShowPopup(false)
    if (currentIndex < lessons.length - 1) {
      setCurrentLessonId(lessons[currentIndex + 1].id)
    }
  }, [currentIndex, lessons])

  return {
    ...state,
    currentLesson,
    currentLessonId,
    completedLessons,
    isLastLesson,
    showPopup,
    isFinished,
    setCurrentLessonId,
    completeLesson,
    goNextLesson,
    setShowPopup,
  }
}