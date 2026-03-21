import type { FaqItem } from "@/src/features/courses/types"

export default function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-900 text-center">
        Frequently asked questions
      </h2>
      {items.map(({ id, question, answer }) => (
        <div key={id} className="bg-white rounded-xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-900 mb-2">{question}</p>
          <p className="text-sm text-gray-500">{answer}</p>
        </div>
      ))}
    </div>
  )
}