"use client"
import { useEffect } from "react"

type Props = {
  lessonTitle: string
  isLastLesson: boolean
  onNext:      () => void
  onFinish:    () => void
}

export default function LessonCompletePopup({ lessonTitle, isLastLesson, onNext, onFinish }: Props) {

  // Tự chuyển sau 3 giây nếu không phải bài cuối
  useEffect(() => {
    if (isLastLesson) return
    const timer = setTimeout(() => onNext(), 3000)
    return () => clearTimeout(timer)
  }, [isLastLesson, onNext])

  return (
    <div
      style={{
        minHeight: "220px",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="fixed inset-0 z-50"
    >
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 flex flex-col items-center gap-4 text-center">

        {/* Icon */}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${
          isLastLesson ? "bg-yellow-100" : "bg-green-100"
        }`}>
          {isLastLesson ? "🏆" : "✅"}
        </div>

        {/* Title */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {isLastLesson ? "Course completed!" : "Lesson completed!"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {isLastLesson
              ? "You've finished all lessons. Claim your certificate!"
              : `"${lessonTitle}" done. Next lesson in 3s...`
            }
          </p>
        </div>

        {/* Progress dots — chỉ hiện khi không phải bài cuối */}
        {!isLastLesson && (
          <div className="flex gap-1.5">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-green-400 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3 w-full">
          {isLastLesson ? (
            <button
              onClick={onFinish}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2.5 rounded-lg font-medium transition-colors"
            >
              Get certificate 🎓
            </button>
          ) : (
            <>
              <button
                onClick={onNext}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Next lesson →
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  )
}