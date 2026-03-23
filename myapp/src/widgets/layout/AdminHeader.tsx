// src/features/admin/shared/layout/AdminHeader.tsx
"use client"
import { useAuth }     from "@/features/auth/hooks/useAuth"
import { usePathname } from "next/navigation"

// Map pathname sang title
function getPageTitle(pathname: string): string {
  if (pathname === "/admin")                      return "Dashboard"
  if (pathname.startsWith("/admin/courses/new"))  return "Add new course"
  if (pathname.includes("/edit"))                 return "Edit course"
  if (pathname.startsWith("/admin/courses"))      return "Manage courses"
  if (pathname.startsWith("/admin/users/new"))    return "Add new user"
  if (pathname.startsWith("/admin/users"))        return "Manage users"
  if (pathname.startsWith("/admin/reports"))      return "Reports"
  if (pathname.startsWith("/admin/certifications")) return "Certifications"
  return "Admin"
}

export default function AdminHeader() {
  const { user, logout } = useAuth()
  const pathname          = usePathname()
  const title             = getPageTitle(pathname)

  return (
    <header className="h-14 bg-white border-b border-gray-100 px-6 flex items-center justify-between flex-shrink-0">

      {/* Page title */}
      <h2 className="font-semibold text-gray-900 text-base">{title}</h2>

      {/* Right — user info + logout */}
      <div className="flex items-center gap-4">

        {/* Admin badge */}
        <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          Admin
        </span>

        {/* User name */}
        {user && (
          <span className="text-sm text-gray-600 font-medium">
            {user.name}
          </span>
        )}

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
          {user?.name.charAt(0).toUpperCase() ?? "A"}
        </div>

        {/* Logout */}
        <button
          onClick={() => logout()}
          className="text-sm text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>

      </div>
    </header>
  )
}