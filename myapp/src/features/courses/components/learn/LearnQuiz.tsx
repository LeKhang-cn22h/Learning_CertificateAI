"use client"
import { useState } from "react"
import type { QuizQuestion } from "@/src/features/courses/types"

type Props = {
  quiz:        QuizQuestion[]
  lessonId:    string
  onComplete:  () => void
}

export default function LearnQuiz({ quiz, lessonId, onComplete }: Props) {
  const [answers,   setAnswers]   = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score,     setScore]     = useState(0)

  // Reset khi đổi bài
  if (Object.keys(answers).length > 0 && !submitted) {
    const firstKey = Object.keys(answers)[0]
    if (!firstKey.startsWith(lessonId)) {
      setAnswers({})
      setSubmitted(false)
    }
  }

  function handleSelect(questionId: string, optionIndex: number) {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [`${lessonId}-${questionId}`]: optionIndex }))
  }

  function handleSubmit() {
    let correct = 0
    quiz.forEach(q => {
      const key = `${lessonId}-${q.id}`
      if (answers[key] === q.answer) correct++
    })
    setScore(correct)
    setSubmitted(true)
  }

  function handleRetry() {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  const allAnswered = quiz.every(q => answers[`${lessonId}-${q.id}`] !== undefined)
  const passed      = score >= Math.ceil(quiz.length * 0.6) // đúng 60% là qua

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Chapter quiz</h3>
        <span className="text-xs text-gray-400">{quiz.length} questions</span>
      </div>

      {/* Questions */}
      {quiz.map((q, qi) => {
        const key         = `${lessonId}-${q.id}`
        const selected    = answers[key]
        const isCorrect   = submitted && selected === q.answer
        const isWrong     = submitted && selected !== undefined && selected !== q.answer

        return (
          <div key={q.id} className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-800">
              {qi + 1}. {q.question}
            </p>
            <div className="flex flex-col gap-1.5">
              {q.options.map((opt, oi) => {
                const isSelected = selected === oi
                const isAnswer   = submitted && oi === q.answer

                return (
                  <button
                    key={oi}
                    onClick={() => handleSelect(q.id, oi)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm border transition-colors ${
                      isAnswer
                        ? "bg-green-50 border-green-400 text-green-700"
                        : isSelected && isWrong
                        ? "bg-red-50 border-red-400 text-red-700"
                        : isSelected
                        ? "bg-blue-50 border-blue-400 text-blue-700"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-300"
                    }`}
                  >
                    <span className="font-medium mr-2">
                      {["A", "B", "C", "D"][oi]}.
                    </span>
                    {opt}
                    {isAnswer    && " ✓"}
                    {isSelected && isWrong && " ✗"}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}

      {/* Result */}
      {submitted && (
        <div className={`rounded-xl p-4 text-center ${passed ? "bg-green-50" : "bg-red-50"}`}>
          <p className={`text-lg font-bold ${passed ? "text-green-600" : "text-red-600"}`}>
            {passed ? "Great job!" : "Keep trying!"}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {score}/{quiz.length} correct ({Math.round((score / quiz.length) * 100)}%)
          </p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            Submit answers
          </button>
        ) : (
          <>
            <button
              onClick={handleRetry}
              className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Retry quiz
            </button>
            {passed && (
              <button
                onClick={onComplete}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Complete lesson ✓
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}