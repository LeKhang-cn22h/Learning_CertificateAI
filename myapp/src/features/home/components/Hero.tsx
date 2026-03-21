import Link from "next/link"

type Props = {
  nameOwner:   string
  description: string
}

export default function Hero({ nameOwner, description }: Props) {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-blue-500 w-full rounded-2xl overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 px-10 py-14 max-w-2xl">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full w-fit">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          New courses added weekly
        </span>

        {/* Headline */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Hi {nameOwner}, ready to<br />
            <span className="text-yellow-300">level up your skills?</span>
          </h1>
          <p className="text-blue-100 text-base">{description}</p>
        </div>

        {/* Stats row */}
        <div className="flex gap-6">
          {[
            { value: "10K+", label: "Courses" },
            { value: "50K+", label: "Learners" },
            { value: "500+", label: "Instructors" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-white font-bold text-xl">{value}</span>
              <span className="text-blue-200 text-xs">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/trial"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Start free trial
          </Link>
          <Link
            href="/explore"
            className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-medium px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Explore courses →
          </Link>
        </div>

      </div>

      {/* Decorative circles */}
      <div className="absolute right-[-60px] top-[-60px] w-64 h-64 bg-white/5 rounded-full" />
      <div className="absolute right-[60px] bottom-[-80px] w-48 h-48 bg-white/5 rounded-full" />

    </div>
  )
}