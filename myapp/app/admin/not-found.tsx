// app/admin/not-found.tsx
import Link from "next/link"

export default function AdminNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-black">
      <div className="text-6xl font-bold text-gray-200">404</div>
      <h1 className="text-xl font-semibold text-gray-700">Page not found</h1>
      <p className="text-sm text-gray-400">
        This admin page doesn&apos;t exist yet.
      </p>
      <Link
        href="/admin"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
      >
        Back to dashboard
      </Link>
    </div>
  )
}