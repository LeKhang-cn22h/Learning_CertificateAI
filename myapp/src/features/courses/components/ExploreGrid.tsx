import Image from "next/image"
import Link  from "next/link"
import type { Course } from "@/src/features/courses/types"

type Props = {
  courses:      Course[]
  loading:      boolean
  error:        string | null
  clearFilters: () => void
}

export default function ExploreGrid({ courses, loading, error, clearFilters }: Props) {

  // Loading skeleton
  if (loading) return (
    <div className="grid grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
          <div className="bg-gray-200 h-40 w-full" />
          <div className="p-3 flex flex-col gap-2">
            <div className="bg-gray-200 h-3 rounded w-1/3" />
            <div className="bg-gray-200 h-4 rounded w-3/4" />
            <div className="bg-gray-200 h-3 rounded w-full" />
            <div className="bg-gray-200 h-3 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )

  // Error
  if (error) return (
    <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
      {error}
    </div>
  )

  // Empty
  if (courses.length === 0) return (
    <div className="flex flex-col items-center justify-center py-20 gap-3">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
        stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <p className="text-gray-500">No courses found</p>
      <button
        onClick={clearFilters}
        className="text-blue-500 hover:underline text-sm"
      >
        Clear filters
      </button>
    </div>
  )

  // Grid
  return (
    <div className="grid grid-cols-3 gap-4">
      {courses.map(course => (
        <Link key={course.id} href={`/courses/${course.id}`}>
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-md hover:scale-105 transition-all cursor-pointer">
            <div className="relative">
              <Image
                src={course.img}
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-0.5 rounded">
                {course.time}m
              </span>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <span className="text-xs text-blue-600 font-medium">
                {course.category}
              </span>
              <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                {course.title}
              </p>
              <p className="text-xs text-gray-500 line-clamp-2">
                {course.description}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                By {course.author}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}