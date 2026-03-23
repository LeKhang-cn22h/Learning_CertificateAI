import Link from "next/link";
import type { Certification } from "@/features/certifications/types"

const typeStyles: Record<string, { bg: string; text: string; border: string }> = {
  "Professional Certificate": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "Certification Prep":       { bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-200" },
  "Continuing Education":     { bg: "bg-green-50",  text: "text-green-700",  border: "border-green-200" },
  "Academic Credit":          { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
};

const providerColors: Record<string, string> = {
  Microsoft:  "from-blue-600 to-blue-800",
  AWS:        "from-orange-500 to-orange-700",
  Google:     "from-green-500 to-teal-700",
  CompTIA:    "from-red-600 to-red-800",
  PMI:        "from-purple-600 to-purple-800",
  Salesforce: "from-sky-500 to-sky-700",
  Meta:       "from-indigo-500 to-blue-700",
  Cisco:      "from-teal-500 to-teal-700",
  Adobe:      "from-red-500 to-rose-700",
  HubSpot:    "from-orange-500 to-red-600",
};

export default function CertCard({ cert }: { cert: Certification }) {
  const typeStyle = typeStyles[cert.credentialType];
  const gradient = providerColors[cert.provider] ?? "from-gray-600 to-gray-800";

  return (
    <Link
      href={`/certifications/${cert.id}`}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Provider banner */}
      <div className={`bg-gradient-to-r ${gradient} px-5 py-4 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{cert.providerLogo}</span>
          <span className="text-white font-bold text-sm">{cert.provider}</span>
        </div>
        {cert.examCode && (
          <span className="bg-white/20 text-white text-xs font-mono px-2 py-0.5 rounded">
            {cert.examCode}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Type badge + badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${typeStyle.bg} ${typeStyle.text} ${typeStyle.border}`}>
            {cert.credentialType}
          </span>
          {cert.isFeatured && (
            <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">
              ⭐ Featured
            </span>
          )}
          {cert.isNew && !cert.isFeatured && (
            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
              New
            </span>
          )}
        </div>

        <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors leading-snug">
          {cert.title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {cert.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1">
          {cert.skills.slice(0, 3).map((s) => (
            <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {s}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="text-xs text-gray-400">+{cert.skills.length - 3}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-amber-600">{cert.rating.toFixed(1)}</span>
          <div className="flex">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} className={`w-3 h-3 ${s <= Math.round(cert.rating) ? "text-amber-500" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-400">({(cert.reviewCount / 1000).toFixed(1)}k)</span>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {cert.courseCount} courses
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {cert.duration}
          </span>
          <span className={`font-medium ${cert.level === "Beginner" ? "text-green-600" : cert.level === "Intermediate" ? "text-blue-600" : "text-purple-600"}`}>
            {cert.level}
          </span>
        </div>
      </div>
    </Link>
  );
}