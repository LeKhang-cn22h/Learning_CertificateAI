import Link from "next/link";
import { profileData } from "../data/profileData";

const categoryColors: Record<string, string> = {
  technology: "bg-indigo-100 text-indigo-700",
  business: "bg-blue-100 text-blue-700",
  creative: "bg-rose-100 text-rose-700",
};

export default function ProfileInProgress() {
  const { inProgress } = profileData;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">In Progress</h2>
        <Link href="/library/inProgress" className="text-xs text-blue-600 hover:underline font-medium">
          View all
        </Link>
      </div>

      <div className="space-y-4">
        {inProgress.map((course) => (
          <Link
            key={course.id}
            href={`/content/${course.category}/${course.id}`}
            className="flex gap-3 group"
          >
            {/* Thumbnail */}
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-700 transition-colors">
                {course.title}
              </p>
              <p className="text-xs text-gray-500 mb-2">{course.instructor}</p>

              {/* Progress bar */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{course.progress}%</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}