import type { StatCard } from "@/src/features/admin/dashboard/types"

export default function StatsRow({ stats }: { stats: StatCard[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map(({ label, value, change, up }) => (
        <div key={label} className="bg-white rounded-2xl p-5 flex flex-col gap-3">
          <span className="text-sm text-gray-500">{label}</span>
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          <span className={`text-xs font-medium flex items-center gap-1 ${
            up ? "text-green-600" : "text-red-500"
          }`}>
            {up ? "↑" : "↓"} {change} vs last month
          </span>
        </div>
      ))}
    </div>
  )
}