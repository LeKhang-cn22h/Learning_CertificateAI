"use client";
import { useState, useMemo } from "react";
import { challenges, languages, practiceTypes } from "../data/praticeData";
import ChallengeCard from "./ChallengeCard";

export default function PracticeGrid() {
  const [activeLang, setActiveLang] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return challenges.filter((c) => {
      if (activeLang !== "all" && c.language !== activeLang) return false;
      if (activeType !== "all" && c.type !== activeType) return false;
      if (activeLevel !== "all" && c.level !== activeLevel) return false;
      if (search && !c.title.toLowerCase().includes(search.toLowerCase()) &&
          !c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))) return false;
      return true;
    });
  }, [activeLang, activeType, activeLevel, search]);

  return (
    <div>
      {/* Language tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-1 overflow-x-auto">
            {languages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => setActiveLang(lang.value)}
                className={`whitespace-nowrap flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium border-b-2 transition-colors ${
                  activeLang === lang.value
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {lang.emoji && <span>{lang.emoji}</span>}
                {lang.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1 min-w-48 max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search challenges..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type filter */}
          <select
            value={activeType}
            onChange={(e) => setActiveType(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {practiceTypes.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>

          {/* Level filter */}
          <select
            value={activeLevel}
            onChange={(e) => setActiveLevel(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <span className="ml-auto text-sm text-gray-500">
            <span className="font-semibold text-gray-900">{filtered.length}</span> results
          </span>
        </div>

        {/* Active filters pills */}
        {(activeLang !== "all" || activeType !== "all" || activeLevel !== "all" || search) && (
          <div className="flex flex-wrap gap-2 mb-5">
            {activeLang !== "all" && (
              <span className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                {languages.find(l => l.value === activeLang)?.emoji} {activeLang}
                <button onClick={() => setActiveLang("all")} className="ml-1 hover:text-blue-900">×</button>
              </span>
            )}
            {activeType !== "all" && (
              <span className="flex items-center gap-1 bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full border border-purple-200">
                {activeType}
                <button onClick={() => setActiveType("all")} className="ml-1 hover:text-purple-900">×</button>
              </span>
            )}
            {activeLevel !== "all" && (
              <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200">
                {activeLevel}
                <button onClick={() => setActiveLevel("all")} className="ml-1 hover:text-green-900">×</button>
              </span>
            )}
            {search && (
              <span className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                &rdquo;{search}&#34;
                <button onClick={() => setSearch("")} className="ml-1 hover:text-gray-900">×</button>
              </span>
            )}
            <button
              onClick={() => { setActiveLang("all"); setActiveType("all"); setActiveLevel("all"); setSearch(""); }}
              className="text-xs text-gray-500 hover:text-gray-700 underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Grid or empty */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-medium text-gray-600">No challenges found</p>
            <p className="text-sm mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((c) => (
              <ChallengeCard key={c.id} challenge={c} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}