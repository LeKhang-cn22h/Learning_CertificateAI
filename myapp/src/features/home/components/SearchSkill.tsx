"use client"
import { useState } from "react"

export default function SearchSkill() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(query)
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-md">
      <div className="relative flex-1">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search skills..."
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Search
      </button>
    </form>
  )
}