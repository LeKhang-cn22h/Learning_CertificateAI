// src/features/admin/dashboard/components/CategoryChart.tsx
"use client"
import {
  PieChart, Pie, Cell, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts"
import type { CategoryPoint } from "@/features/admin/dashboard/types"

export default function CategoryChart({ data }: { data: CategoryPoint[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4">
      <div>
        <h3 className="font-semibold text-gray-900">Course categories</h3>
        <p className="text-xs text-gray-400 mt-0.5">Distribution by category</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(value) => {
                const v=Number(value)
                if(isNaN(v)) return ["",""]
                return [`${v.toLocaleString()} enrolled`,""]
            }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <span style={{ fontSize: "12px", color: "#6b7280" }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}