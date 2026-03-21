// src/features/certifications/components/FeaturedPartners.tsx
import type { CertProviderItem } from "@/src/features/certifications/types"

type Props = {
  providers: CertProviderItem[]
}

const courseCount: Record<string, string> = {
  Microsoft:  "400+ courses",
  AWS:        "280+ courses",
  Google:     "150+ courses",
  CompTIA:    "200+ courses",
  PMI:        "120+ courses",
  Salesforce: "90+ courses",
  Meta:       "80+ courses",
  Cisco:      "110+ courses",
}

const hoverColor: Record<string, string> = {
  Microsoft:  "hover:border-blue-300",
  AWS:        "hover:border-orange-300",
  Google:     "hover:border-green-300",
  CompTIA:    "hover:border-red-300",
  PMI:        "hover:border-purple-300",
  Salesforce: "hover:border-sky-300",
  Meta:       "hover:border-indigo-300",
  Cisco:      "hover:border-teal-300",
}

export default function FeaturedPartners({ providers }: Props) {
  // Bỏ "All Providers" ra khỏi danh sách hiển thị
  const list = providers.filter(p => p.value !== "all")

  return (
    <div className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Featured Certificate Partners
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {list.map(p => (
            <div
              key={p.value}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border border-gray-100 cursor-pointer transition-all ${hoverColor[p.value] ?? ""} hover:shadow-sm`}
            >
              <span className="text-2xl">{p.logo}</span>
              <span className="text-xs font-semibold text-gray-800 text-center">{p.label}</span>
              <span className="text-xs text-gray-400 text-center leading-tight">
                {courseCount[p.value] ?? "courses"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}