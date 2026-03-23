// app/courses/[id]/learn/page.tsx
"use client"
import { use }                   from "react"
import Link                      from "next/link"
import { useRouter }             from "next/navigation"
import LearnVideo                from "@/features/courses/components/learn/LearnVideo"
import LearnQuiz                 from "@/features/courses/components/learn/LearnQuiz"
import LearnSidebar              from "@/features/courses/components/learn/LearnSidebar"
import LessonCompletePopup       from "@/features/courses/components/learn/LessonCompletePopup"
import { useLearn } from "@/features/courses/hooks/useLearn"

type Props = {
  params: Promise<{ id: string }>
}

export default function LearnPage({ params }: Props) {
  const { id } = use(params)
  const router = useRouter()
  const {
    data, loading, error,
    currentLesson,
    currentLessonId,
    completedLessons,
    isLastLesson,
    showPopup,
    setCurrentLessonId,
    completeLesson,
    goNextLesson,
    setShowPopup,
  } = useLearn(id)

  function handleFinish() {
    setShowPopup(false)
    router.push(`/courses/${id}/certificate`)
  }

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-gray-500">Loading course...</p>
      </div>
    </div>
  )

  if (error || !data) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <p className="text-gray-600">Failed to load course</p>
      <Link href={`/courses/${id}`} className="text-blue-500 hover:underline text-sm">
        Back to course
      </Link>
    </div>
  )

  return (
    <div className="flex flex-col gap-4 text-black">

      {/* Popup */}
      {showPopup && currentLesson && (
        <LessonCompletePopup
          lessonTitle={currentLesson.title}
          isLastLesson={isLastLesson}
          onNext={goNextLesson}
          onFinish={handleFinish}
        />
      )}

      {/* Top bar */}
      <div className="bg-white rounded-2xl px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={`/courses/${id}`} className="text-gray-400 hover:text-gray-600 transition-colors">
            ← Back
          </Link>
          <span className="text-gray-300">|</span>
          <p className="font-semibold text-gray-900 text-sm">{data.title}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-500">
            {completedLessons.length}/{data.lessons.length} completed
          </div>
          {/* Progress bar mini */}
          <div className="w-24 h-1.5 bg-gray-200 rounded-full">
            <div
              className="h-1.5 bg-blue-500 rounded-full transition-all"
              style={{ width: `${(completedLessons.length / data.lessons.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex gap-5 items-start">

        {/* Left — video + quiz */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">
          {currentLesson ? (
            <>
              <LearnVideo
                videoUrl={currentLesson.videoUrl}
                title={currentLesson.title}
              />
              <LearnQuiz
                quiz={currentLesson.quiz}
                lessonId={currentLesson.id}
                onComplete={completeLesson}
              />
            </>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center text-gray-500">
              Select a lesson to start learning
            </div>
          )}
        </div>

        {/* Right — sidebar */}
        <LearnSidebar
          lessons={data.lessons}
          currentLesson={currentLessonId}
          completedLessons={completedLessons}
          onSelect={setCurrentLessonId}
        />

      </div>
    </div>
  )
}
