import Link from "next/link";
import { Challenge } from "../data/praticeData";

const typeStyles: Record<string, { bg: string; text: string; icon: string }> = {
  "Code Challenge": { bg: "bg-emerald-100", text: "text-emerald-700", icon: "⚡" },
  "GitHub Codespaces": { bg: "bg-violet-100", text: "text-violet-700", icon: "🐙" },
  "Cyber Lab": { bg: "bg-red-100", text: "text-red-700", icon: "🔐" },
};

const levelColors: Record<string, string> = {
  Beginner: "text-green-600",
  Intermediate: "text-blue-600",
  Advanced: "text-purple-600",
};

export default function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const typeStyle = typeStyles[challenge.type];

  return (
    <Link
      href={`/practice/${challenge.id}`}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        <img
          src={challenge.thumbnail}
          alt={challenge.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
        />

        {/* Type badge */}
        <div className={`absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${typeStyle.bg} ${typeStyle.text}`}>
          <span>{typeStyle.icon}</span>
          {challenge.type}
        </div>

        {/* New / Bestseller */}
        {challenge.isBestseller && (
          <span className="absolute top-2 right-2 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded">
            Bestseller
          </span>
        )}
        {challenge.isNew && !challenge.isBestseller && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
            New
          </span>
        )}

        {/* Language badge overlay */}
        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <span>{challenge.languageIcon}</span>
          {challenge.language}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors leading-snug">
          {challenge.title}
        </h3>
        <p className="text-xs text-gray-500">{challenge.instructor}</p>
        <p className="text-xs text-gray-400 line-clamp-2">{challenge.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-amber-600">{challenge.rating}</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className={`w-3 h-3 ${s <= Math.round(challenge.rating) ? "text-amber-500" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-400">({(challenge.reviewCount / 1000).toFixed(1)}k)</span>
        </div>

        {/* Footer meta */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <span className={`text-xs font-medium ${levelColors[challenge.level]}`}>
            {challenge.level}
          </span>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            {challenge.challengeCount > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {challenge.challengeCount} challenges
              </span>
            )}
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {challenge.duration}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}