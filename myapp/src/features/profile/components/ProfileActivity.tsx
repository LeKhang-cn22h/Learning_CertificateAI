"use client";
import { profileData } from "../data/profileData";

const intensityClass = ["bg-gray-100", "bg-blue-200", "bg-blue-400", "bg-blue-500", "bg-blue-700"];

export default function ProfileActivity() {
  const { activityHeatmap } = profileData;

  // Group into weeks of 7 days
  const weeks: typeof activityHeatmap[] = [];
  for (let i = 0; i < activityHeatmap.length; i += 7) {
    weeks.push(activityHeatmap.slice(i, i + 7));
  }

  const totalDays = activityHeatmap.filter((d) => d.count > 0).length;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">Learning Activity</h2>
        <span className="text-xs text-gray-500">{totalDays} active days</span>
      </div>

      {/* Heatmap grid */}
      <div className="overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day, di) => (
                <div
                  key={di}
                  title={`${day.date}: ${day.count} session${day.count !== 1 ? "s" : ""}`}
                  className={`w-3.5 h-3.5 rounded-sm ${intensityClass[day.count]} transition-opacity hover:opacity-70 cursor-default`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 mt-3 justify-end">
        <span className="text-xs text-gray-400">Less</span>
        {intensityClass.map((cls, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
        ))}
        <span className="text-xs text-gray-400">More</span>
      </div>
    </div>
  );
}