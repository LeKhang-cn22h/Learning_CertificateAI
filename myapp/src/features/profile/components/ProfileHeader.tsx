"use client";
import { profileData } from "../data/profileData";

export default function ProfileHeader() {
  const { name, title, company, location, avatar, stats } = profileData;

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Cover */}
      <div className="h-36 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 relative">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Avatar row */}
        <div className="flex items-end justify-between -mt-14 mb-4">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
          </div>
          <div className="flex gap-2 pb-2">
            <button className="px-4 py-2 text-sm font-semibold border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-100 transition-colors">
              Edit Profile
            </button>
            <button className="px-4 py-2 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
              Share
            </button>
          </div>
        </div>

        {/* Name & info */}
        <div className="pb-5">
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          <p className="text-gray-600 mt-0.5">{title} · {company}</p>
          <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-4 border-t border-gray-100 py-4 gap-4">
          {[
            { value: stats.coursesCompleted, label: "Completed", icon: "🎓" },
            { value: `${stats.hoursLearned}h`, label: "Learned", icon: "⏱️" },
            { value: stats.certificates, label: "Certificates", icon: "📜" },
            { value: `${stats.streak}d`, label: "Streak", icon: "🔥" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl">{s.icon}</div>
              <div className="text-xl font-bold text-gray-900 mt-1">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}