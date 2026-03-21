import Link      from "next/link"
import type { Plan } from "@/src/features/courses/types"

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`relative bg-white rounded-2xl p-6 flex flex-col gap-5 border-2 transition-all ${
      plan.popular
        ? "border-blue-500 shadow-xl shadow-blue-100"
        : "border-gray-100"
    }`}>

      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
            Most popular
          </span>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-lg text-gray-900">{plan.name}</h2>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">{plan.displayPrice}</span>
          <span className="text-sm text-gray-500">/{plan.period}</span>
        </div>
      </div>

      <Link
        href={plan.href}
        className={`w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${
          plan.popular
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
        }`}
      >
        {plan.cta}
      </Link>

      <div className="border-t border-gray-100" />

      <ul className="flex flex-col gap-3">
        {plan.features.map(feature => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              className="flex-shrink-0 mt-0.5 text-green-500"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}