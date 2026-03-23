"use client"
import Link from "next/link"

type Props = {
  title:    string
  backHref: string  
  children: React.ReactNode
}

export default function AdminFormWrapper({ title, backHref, children }: Props) {
  return (
    <div className="flex flex-col gap-6 text-black max-w-3xl">
      <div className="flex items-center gap-3">
        <Link
          href={backHref}
          className="text-gray-400 hover:text-gray-600 transition-colors text-sm"
        >
          ← Back
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>
      <div className="bg-white rounded-2xl p-6">
        {children}
      </div>
    </div>
  )
}