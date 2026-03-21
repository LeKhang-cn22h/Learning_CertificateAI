"use client";
import { useState } from "react";

type Props = {
  totalCount: number;
  onFilterChange?: (filters: { level: string; sort: string }) => void;
};

export default function ContentFilterBar({ totalCount, onFilterChange }: Props) {
  const [level, setLevel] = useState("all");
  const [sort, setSort] = useState("popular");

  const handleLevelChange = (val: string) => {
    setLevel(val);
    onFilterChange?.({ level: val, sort });
  };

  const handleSortChange = (val: string) => {
    setSort(val);
    onFilterChange?.({ level, sort: val });
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100">
      <p className="text-sm text-gray-600">
        <span className="font-semibold text-gray-900">{totalCount}</span> results
      </p>

      <div className="flex items-center gap-3">
        {/* Level filter */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-500 hidden sm:block">Level:</label>
          <select
            value={level}
            onChange={(e) => handleLevelChange(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-500 hidden sm:block">Sort:</label>
          <select
            value={sort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="rating">Highest Rated</option>
            <option value="duration-asc">Shortest First</option>
            <option value="duration-desc">Longest First</option>
          </select>
        </div>
      </div>
    </div>
  );
}