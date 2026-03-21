import { Lesson } from "@/src/features/courses/types"

type Props = {
  lessons:        Lesson[]
  currentLesson:  string
  completedLessons: string[]
  onSelect:       (id: string) => void
}

export default function LearnSidebar({ lessons, currentLesson, completedLessons, onSelect }: Props) {
  return (
    <div className="w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden">
      <div className="bg-gray-900 text-white px-4 py-3">
        <p className="font-semibold text-sm">Course content</p>
        <p className="text-xs text-gray-400 mt-0.5">
          {completedLessons.length}/{lessons.length} completed
        </p>
        {/* Progress bar */}
        <div className="mt-2 h-1 bg-gray-700 rounded-full">
          <div
            className="h-1 bg-blue-500 rounded-full transition-all"
            style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col divide-y divide-gray-100">
        {lessons.map((lesson, i) => {
          const isActive    = lesson.id === currentLesson
          const isCompleted = completedLessons.includes(lesson.id)

          return (
            <button
              key={lesson.id}
              onClick={() => onSelect(lesson.id)}
              className={`flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50 ${
                isActive ? "bg-blue-50 border-l-4 border-blue-600" : "border-l-4 border-transparent"
              }`}
            >
              {/* Icon trạng thái */}
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium ${
                isCompleted
                  ? "bg-green-500 text-white"
                  : isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}>
                {isCompleted ? "✓" : i + 1}
              </div>

              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${isActive ? "text-blue-600" : "text-gray-800"}`}>
                  {lesson.title}
                </p>
                <p className="text-xs text-gray-400">{lesson.duration}</p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}