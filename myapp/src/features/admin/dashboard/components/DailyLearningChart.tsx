    "use client"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
  Cell,
} from "recharts"
import type { DailyLearningPoint } from "@/features/admin/dashboard/types"

export default function DailyLearningChart({ data }: { data: DailyLearningPoint[] }) {
  const max = Math.max(...data.map(d => d.sessions))

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4">
      <div>
        <h3 className="font-semibold text-gray-900">Daily learning sessions</h3>
        <p className="text-xs text-gray-400 mt-0.5">This week</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            cursor={{ fill: "#f9fafb" }}
          />
          <Bar dataKey="sessions" radius={[6, 6, 0, 0]}
          fill="#bfdbfe"
          isAnimationActive={false}
          >
            {data.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.sessions === max ? "#3b82f6" : "#bfdbfe"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}