"use client"
import { use }   from "react"
import Link      from "next/link"

type Props = {
  params: Promise<{ id: string }>
}

export default function CertificatePage({ params }: Props) {
  const { id } = use(params)
  const today  = new Date().toLocaleDateString("en-US", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6 text-black">

      {/* Certificate card */}
      <div
        id="certificate"
        className="bg-white rounded-3xl p-12 max-w-2xl w-full text-center flex flex-col items-center gap-6"
        style={{ border: "6px solid #1d4ed8", boxShadow: "0 0 0 3px #93c5fd" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            G
          </div>
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
            GotikHub Learning
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-blue-200" />

        {/* Certificate text */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-sm">This certifies that</p>
          <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
            Le Khang
          </p>
          <p className="text-gray-500 text-sm">has successfully completed</p>
        </div>

        {/* Course name */}
        <div className="bg-blue-50 rounded-xl px-8 py-4">
          <p className="text-xl font-bold text-blue-700">Learn React Basics</p>
          <p className="text-sm text-blue-500 mt-1">with distinction</p>
        </div>

        {/* Stars */}
        <div className="flex gap-1 text-yellow-400 text-2xl">
          {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
        </div>

        {/* Footer */}
        <div className="flex justify-between w-full pt-4 border-t border-gray-100">
          <div className="text-left">
            <p className="text-xs text-gray-400">Date issued</p>
            <p className="text-sm font-medium text-gray-700">{today}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">Certificate ID</p>
            <p className="text-sm font-medium text-gray-700">CERT-{id.toUpperCase()}-2025</p>
          </div>
        </div>

      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Print certificate
        </button>
        <Link
          href="/explore"
          className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 rounded-lg font-medium transition-colors"
        >
          Explore more courses
        </Link>
        <Link
          href="/home"
          className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 rounded-lg font-medium transition-colors"
        >
          Back to home
        </Link>
      </div>

    </div>
  )
}