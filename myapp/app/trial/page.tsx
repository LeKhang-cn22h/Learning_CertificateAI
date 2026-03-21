// app/trial/page.tsx
"use client"
import { useTrial } from "@/src/features/courses/hook/useTrial"
import FaqSection from "@/src/features/trial/components/FaqSection"
import PlanCard from "@/src/features/trial/components/PlanCard"
import Link          from "next/link"

export default function TrialPage() {
  const { data, loading, error } = useTrial()

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  if (error || !data) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <p className="text-red-500 text-sm">{error ?? "Failed to load"}</p>
    </div>
  )

  return (
    <div className="flex flex-col items-center gap-10 py-6 text-black">

      {/* Header */}
      <div className="text-center flex flex-col gap-3 max-w-xl">
        <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
          Pricing
        </span>
        <h1 className="text-4xl font-bold text-gray-900">
          Invest in your learning
        </h1>
        <p className="text-gray-500">
          Start free, upgrade when you are ready. Cancel anytime.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
        {data.plans.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* FAQ */}
      <FaqSection items={data.faq} />

      {/* Bottom CTA */}
      <div className="bg-blue-600 rounded-2xl p-8 w-full max-w-5xl flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold text-white">
          Still not sure? Try it free for 30 days
        </h2>
        <p className="text-blue-200 text-sm">
          No credit card required. Cancel anytime.
        </p>
        <Link
          href="/register?plan=pro"
          className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Start free trial
        </Link>
      </div>

    </div>
  )
}