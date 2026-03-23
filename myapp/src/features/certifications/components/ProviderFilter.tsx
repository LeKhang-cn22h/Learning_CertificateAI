// src/features/certifications/components/ProviderFilter.tsx
"use client"
import type { CertProviderItem } from "@/features/certifications/types"

type Props = {
  active:    string
  onChange:  (v: string) => void
  providers: CertProviderItem[]
}

const chipColors: Record<string, string> = {
  Microsoft:  "border-blue-200 bg-blue-50 hover:bg-blue-100",
  AWS:        "border-orange-200 bg-orange-50 hover:bg-orange-100",
  Google:     "border-green-200 bg-green-50 hover:bg-green-100",
  CompTIA:    "border-red-200 bg-red-50 hover:bg-red-100",
  PMI:        "border-purple-200 bg-purple-50 hover:bg-purple-100",
  Salesforce: "border-sky-200 bg-sky-50 hover:bg-sky-100",
  Meta:       "border-indigo-200 bg-indigo-50 hover:bg-indigo-100",
  Cisco:      "border-teal-200 bg-teal-50 hover:bg-teal-100",
}

export default function ProviderFilter({ active, onChange, providers }: Props) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-semibold text-gray-500 flex-shrink-0 mr-1">Provider:</span>
          {providers.map(p => (
            <button
              key={p.value}
              onClick={() => onChange(p.value)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border transition-all font-medium ${
                active === p.value
                  ? "bg-gray-900 text-white border-gray-900"
                  : p.value === "all"
                  ? "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700"
                  : `${chipColors[p.value] ?? "border-gray-200 bg-gray-50"} text-gray-700`
              }`}
            >
              {p.logo && <span className="text-base leading-none">{p.logo}</span>}
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}