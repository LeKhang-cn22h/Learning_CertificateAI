"use client";
import { useState, useMemo } from "react";
import { Course } from "../data/contentData";
import ContentCourseCard from "./ContentCourseCard";
import ContentFilterBar from "./ContentFilterBar";

type Props = {
  courses: Course[];
  sub?: string;
};

export default function ContentCourseGrid({ courses, sub }: Props) {
  const [filters, setFilters] = useState({ level: "all", sort: "popular" });

  const filtered = useMemo(() => {
    let result = [...courses];

    // Filter by level
    if (filters.level !== "all") {
      result = result.filter((c) => c.level === filters.level);
    }

    // Sort
    switch (filters.sort) {
      case "newest":
        result = result.filter((c) => c.isNew).concat(result.filter((c) => !c.isNew));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "duration-asc":
        result.sort((a, b) => {
          const toMin = (d: string) => {
            const [h, m] = d.split("h").map((x) => parseInt(x) || 0);
            return h * 60 + m;
          };
          return toMin(a.duration) - toMin(b.duration);
        });
        break;
      case "duration-desc":
        result.sort((a, b) => {
          const toMin = (d: string) => {
            const [h, m] = d.split("h").map((x) => parseInt(x) || 0);
            return h * 60 + m;
          };
          return toMin(b.duration) - toMin(a.duration);
        });
        break;
    }

    return result;
  }, [courses, filters]);

  return (
    <div>
      <ContentFilterBar
        totalCount={filtered.length}
        onFilterChange={setFilters}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm">No courses found for this filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-6">
          {filtered.map((course) => (
            <ContentCourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}