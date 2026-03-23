import RequireRole from "@/src/features/auth/components/RequireRole"

export default function AdminPage() {
  return (
    <RequireRole role="admin" redirectTo="/home">
      <div className="flex flex-col gap-6 text-black">

        {/* Header */}
        <div className="bg-white rounded-2xl p-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back, Admin
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Total users",   value: "1,240", color: "bg-blue-50   text-blue-600"   },
            { label: "Total courses", value: "48",    color: "bg-green-50  text-green-600"  },
            { label: "Active today",  value: "312",   color: "bg-amber-50  text-amber-600"  },
            { label: "New this week", value: "87",    color: "bg-purple-50 text-purple-600" },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 flex flex-col gap-2">
              <span className="text-sm text-gray-500">{label}</span>
              <span className={`text-3xl font-bold ${color.split(" ")[1]}`}>{value}</span>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-4">
          <h2 className="font-semibold text-gray-900">Quick actions</h2>
          <div className="flex gap-3">
            {[
              { label: "Manage users",   href: "/admin/users"   },
              { label: "Manage courses", href: "/admin/courses" },
              { label: "View reports",   href: "/admin/reports" },
            ].map(({ label, href }) => (
                <a 
                key={label}
                href={href}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </RequireRole>
  )
}
