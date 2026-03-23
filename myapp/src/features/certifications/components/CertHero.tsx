// src/features/certifications/components/CertHero.tsx
"use client"
import type { CredentialTypeItem } from "@/features/certifications/types"

type Props = {
  activeType:      string
  onTypeChange:    (type: string) => void
  credentialTypes: CredentialTypeItem[]
}

export default function CertHero({ activeType, onTypeChange, credentialTypes }: Props) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/3 w-80 h-80 bg-blue-700 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-amber-500 opacity-10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-0 relative">
        <div className="max-w-2xl mb-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Credentials & Certifications
          </p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Prep, earn, and showcase <br />
            <span className="text-amber-400">industry credentials</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Over 2,000 courses to prepare you for 120+ off-platform exams.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { value: "12M+", label: "members with credentials" },
              { value: "120+", label: "exams covered" },
              { value: "2,000+", label: "prep courses" },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-xl font-bold text-amber-400">{s.value}</span>
                <span className="text-gray-400 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs từ Mockoon data */}
        <div className="flex gap-3 overflow-x-auto pb-0">
          <button
            onClick={() => onTypeChange("all")}
            className={`flex-shrink-0 px-5 py-3 rounded-t-xl text-sm font-medium transition-colors border-b-2 ${
              activeType === "all"
                ? "bg-white text-gray-900 border-white"
                : "bg-white/10 text-gray-300 border-transparent hover:bg-white/20"
            }`}
          >
            All Types
          </button>
          {credentialTypes.map(t => (
            <button
              key={t.value}
              onClick={() => onTypeChange(t.value)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-t-xl text-sm font-medium transition-colors border-b-2 ${
                activeType === t.value
                  ? "bg-white text-gray-900 border-white"
                  : "bg-white/10 text-gray-300 border-transparent hover:bg-white/20"
              }`}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}