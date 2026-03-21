import Link from "next/link";
import { TopicCourse } from "../data/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs font-bold text-amber-500">{rating.toFixed(1)}</span>
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-400">({(rating >= 1000 ? (rating/1000).toFixed(0)+"k" : rating)})</span>
    </div>
  );
}

export default function FeaturedCourses({ courses, topicSlug }: { courses: TopicCourse[]; topicSlug: string }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Featured Courses</h2>
          <p className="text-sm text-gray-500 mt-0.5">Hand-picked by our expert team</p>
        </div>
        <Link href={`/topics/${topicSlug}/courses`} className="text-sm text-blue-600 hover:underline font-medium">
          See all courses →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {courses.map((course, i) => (
          <Link
            key={course.id}
            href={`/topics/${topicSlug}/${course.id}`}
            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Thumbnail — tall for featured */}
            <div className="relative overflow-hidden" style={{ paddingBottom: "56%" }}>
              <img
                src={course.thumbnail}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {course.isTrending && (
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    🔥 Trending
                  </span>
                )}
                {course.isNew && !course.isTrending && (
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}
              </div>

              {/* Duration overlay */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                {course.duration}
              </div>

              {/* Featured label */}
              {i === 0 && (
                <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                   Editor Pick
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors mb-1">
                {course.title}
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                {course.instructor} · {course.instructorTitle}
              </p>
              <StarRating rating={course.rating} />
              <div className="flex items-center justify-between mt-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  course.level === "Beginner" ? "bg-green-100 text-green-700" :
                  course.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                  "bg-purple-100 text-purple-700"
                }`}>
                  {course.level}
                </span>
                <div className="flex flex-wrap gap-1">
                  {course.tags.slice(0,2).map(t => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}