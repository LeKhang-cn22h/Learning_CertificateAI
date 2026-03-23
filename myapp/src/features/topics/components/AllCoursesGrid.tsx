import Link from "next/link";
import { TopicCourse } from "../data/types";

export default function AllCoursesGrid({ courses, topicSlug }: { courses: TopicCourse[]; topicSlug: string }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900">All Courses</h2>
          <p className="text-sm text-gray-500 mt-0.5">{courses.length} courses available</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/topics/${topicSlug}/${course.id}`}
            className="group flex gap-3 bg-white rounded-xl border border-gray-200 p-3 hover:shadow-md hover:border-gray-300 transition-all duration-200"
          >
            {/* Thumbnail */}
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {course.isTrending && (
                <div className="absolute bottom-0 left-0 right-0 bg-orange-500/90 text-white text-xs text-center py-0.5 font-medium">
                  🔥
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors leading-snug">
                {course.title}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">{course.instructor}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs font-bold text-amber-500">{course.rating}</span>
                <div className="flex">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className={`w-2.5 h-2.5 ${s <= Math.round(course.rating) ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-1.5">
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                  course.level === "Beginner" ? "bg-green-100 text-green-700" :
                  course.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                  "bg-purple-100 text-purple-700"
                }`}>
                  {course.level}
                </span>
                <span className="text-xs text-gray-400">{course.duration}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}