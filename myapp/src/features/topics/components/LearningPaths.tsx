import { LearningPath } from "../data/types";

const levelStyle: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-purple-100 text-purple-700",
};

export default function LearningPaths({ paths, topicSlug }: { paths: LearningPath[]; topicSlug: string }) {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">Learning Paths</h2>
        <p className="text-sm text-gray-500 mt-0.5">Structured sequences to build complete skill sets</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paths.map((path) => (
          <div
            key={path.id}
            className="group bg-white rounded-2xl border border-gray-200 p-5 flex gap-4 hover:shadow-md hover:border-blue-200 transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
              {path.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-700 transition-colors line-clamp-1">
                {path.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {path.description}
              </p>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelStyle[path.level]}`}>
                  {path.level}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {path.courseCount} courses
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {path.duration}
                </span>
              </div>
            </div>

            {/* Arrow */}
            <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 flex-shrink-0 self-center transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}