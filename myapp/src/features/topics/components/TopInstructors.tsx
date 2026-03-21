import { TopicInstructor } from "../data/types";

export default function TopInstructors({ instructors }: { instructors: TopicInstructor[] }) {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">Top Instructors</h2>
        <p className="text-sm text-gray-500 mt-0.5">Learn from industry experts with real-world experience</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="group bg-white rounded-2xl border border-gray-200 p-5 flex flex-col items-center text-center hover:shadow-md hover:border-blue-200 transition-all duration-300 cursor-pointer"
          >
            {/* Avatar */}
            <div className="relative mb-3">
              <img
                src={ins.avatar}
                alt={ins.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 group-hover:border-blue-200 transition-colors"
              />
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow">
                ✓
              </div>
            </div>

            <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
              {ins.name}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{ins.title}</p>

            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {ins.courseCount} courses
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {ins.followers} learners
              </span>
            </div>

            <button className="mt-4 w-full text-xs font-semibold text-blue-600 border border-blue-200 rounded-lg py-2 hover:bg-blue-50 transition-colors">
              View Courses
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}