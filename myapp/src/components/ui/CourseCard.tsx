// src/components/ui/CourseCard.tsx
"use client"
import Image     from "next/image"
import Link      from "next/link"
import { useState, useRef } from "react"
import type { Course } from "@/src/features/courses/types"

type Props = Course

export default function CourseCard({ id, img, category, time, title, description, author, previewUrl }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleMouseEnter() {
    // Hover 0.8 giây mới play — tránh vô tình
    hoverTimer.current = setTimeout(() => setIsHovered(true), 800)
  }

  function handleMouseLeave() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setIsHovered(false)
  }

  return (
    <Link href={`/courses/${id}`}>
      <div
        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail / Video preview */}
        <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
          {/* Thumbnail */}
          <Image
            src={img}
            alt={title}
            fill
            className={`object-cover scale-1.5 transition-opacity duration-300 ${
              isHovered && previewUrl ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* YouTube iframe preview */}
          {isHovered && previewUrl && (
            <iframe
              src={previewUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; muted"
              title={`Preview: ${title}`}
            />
          )}

          {/* Duration badge */}
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-medium z-10">
            {time}m
          </span>

          {/* Preview indicator */}
          {!isHovered && previewUrl && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20">
              <div className="bg-white/90 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-800">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Preview
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {category}
          </span>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between pt-2 border-t border-gray-50">
            <span className="text-xs text-gray-400">By {author}</span>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
              Free
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}