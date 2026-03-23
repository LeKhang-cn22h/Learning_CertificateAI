import Link from "next/link"

export default function AdminCertificationsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-black">
      <div className="text-5xl">🏅</div>
      <h1 className="text-xl font-semibold text-gray-700">Certifications</h1>
      <p className="text-sm text-gray-400">Coming soon</p>
      <Link href="/admin" className="text-blue-500 hover:underline text-sm">
        Back to dashboard
      </Link>
    </div>
  )
}