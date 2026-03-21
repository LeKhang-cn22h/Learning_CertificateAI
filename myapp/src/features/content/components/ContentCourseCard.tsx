"use client";
import Image from "next/image";
import Link from "next/link";
import { Course } from "../data/contentData";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm font-semibold text-amber-600">{rating.toFixed(1)}</span>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(rating) ? "text-amber-500" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-500">({rating >= 1000 ? `${(rating / 1000).toFixed(1)}k` : rating})</span>
    </div>
  );
}

const levelColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-purple-100 text-purple-700",
};

export default function ContentCourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/content/${course.category}/${course.id}`}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
     <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
        {course.isBestseller && (
          <span className="absolute top-2 left-2 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded">
            Bestseller
          </span>
        )}
        {course.isNew && !course.isBestseller && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
            New
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-gray-500">{course.instructor}</p>

        <StarRating rating={course.rating} />

        <div className="flex items-center justify-between mt-auto pt-2">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColors[course.level]}`}
          >
            {course.level}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration}
          </span>
        </div>
      </div>
    </Link>
  );
}