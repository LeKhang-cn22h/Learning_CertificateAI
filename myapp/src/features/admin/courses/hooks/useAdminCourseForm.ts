// features/admin/courses/hooks/useAdminCourseForm.ts
"use client"
import { useEffect, useReducer, useState } from "react"
import { useRouter }                       from "next/navigation"
import { adminCourseService }              from "@/features/admin/courses/services/adminCourseService"
import type { CourseFormData }             from "@/features/admin/courses/types"
import { EMPTY_COURSE_FORM }               from "@/features/admin/courses/types"

type FetchState = {
  fetching: boolean
  error:    string | null
  success:  boolean
}

type FetchAction =
  | { type: "SUCCESS"; form: CourseFormData }
  | { type: "ERROR";   error: string }

function fetchReducer(_: FetchState, action: FetchAction): FetchState {
  if (action.type === "SUCCESS") return { fetching: false, error: null,        success: false }
  return                                { fetching: false, error: action.error, success: false }
}

export function useAdminCourseForm(id?: string) {
  const router              = useRouter()
  const isEdit              = !!id
  const [form, setForm]     = useState<CourseFormData>(EMPTY_COURSE_FORM)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [fetchState, dispatch] = useReducer(fetchReducer, {
    fetching: isEdit,
    error:    null,
    success:  false,
  })

  useEffect(() => {
    if (!id) return
    let cancelled = false

    adminCourseService.getCourseById(id).then(({ data, error }) => {
      if (cancelled) return
      if (error || !data) {
        dispatch({ type: "ERROR", error: error ?? "Failed to load" })
      } else {
        setForm({
          title:       data.title,
          description: data.description,
          category:    data.category,
          author:      data.author,
          time:        data.time,
          img:         data.img,
          previewUrl:  data.previewUrl ?? "",
        })
        dispatch({ type: "SUCCESS", form: EMPTY_COURSE_FORM })
      }
    })

    return () => { cancelled = true }
  }, [id])

  function handleChange(field: keyof CourseFormData, value: string | number) {
    setForm(prev => ({ ...prev, [field]: value }))
    setSubmitError(null)
  }

  function validate(): string | null {
    if (!form.title.trim())       return "Title is required"
    if (!form.description.trim()) return "Description is required"
    if (!form.author.trim())      return "Author is required"
    if (form.time <= 0)           return "Duration must be greater than 0"
    return null
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const err = validate()
    if (err) { setSubmitError(err); return }

    setLoading(true)
    const { error } = isEdit
      ? await adminCourseService.updateCourse(id!, form)
      : await adminCourseService.createCourse(form)

    setLoading(false)
    if (error) { setSubmitError(error); return }

    setSuccess(true)
    setTimeout(() => router.push("/admin/courses"), 1000)
  }

  return {
    form,
    handleChange,
    handleSubmit,
    loading,
    fetching: fetchState.fetching,
    error:    fetchState.error ?? submitError,
    success,
    isEdit,
  }
}