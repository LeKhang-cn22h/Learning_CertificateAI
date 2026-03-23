// src/features/admin/dashboard/components/TopCoursesChart.tsx
"use client"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts"
import type { TopCourse } from "@/features/admin/dashboard/types"

export default function TopCoursesChart({ data }: { data: TopCourse[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4">
      <div>
        <h3 className="font-semibold text-gray-900">Top 5 courses</h3>
        <p className="text-xs text-gray-400 mt-0.5">By enrollment count</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
          <XAxis
            type="number"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => `${(v / 1000).toFixed(0)}k`}
          />
          <YAxis
            type="category"
            dataKey="title"
            width={140}
            tick={{ fontSize: 11, fill: "#374151" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => v.length > 20 ? v.slice(0, 20) + "…" : v}
          />
          <Tooltip
            contentStyle={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(v) =>{
                const num = Number(v)
                if (isNaN(num)) return ["",""]
                return [`${num.toLocaleString()} enrolled`,""]
            }}
          />
          <Bar
            dataKey="enrolled"
            fill="#8b5cf6"
            radius={[0, 6, 6, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}