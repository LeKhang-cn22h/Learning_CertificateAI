// src/features/certifications/components/CertificationsPage.tsx
"use client"
import { useState, useMemo }       from "react"
import { useCertifications }       from "@/features/certifications/hooks/useCertifications"
import CertHero                    from "./CertHero"
import ProviderFilter              from "./ProviderFilter"
import FeaturedPartners            from "./FeaturedPartners"
import CertCard                    from "./CertCard"

export default function CertificationsPage() {
  const { data, loading, error } = useCertifications()
  const [activeType,     setActiveType]     = useState("all")
  const [activeProvider, setActiveProvider] = useState("all")
  const [activeLevel,    setActiveLevel]    = useState("all")
  const [search,         setSearch]         = useState("")

  const filtered = useMemo(() => {
    if (!data?.certifications) return []
    return data.certifications.filter(c => {
      if (activeType     !== "all" && c.credentialType !== activeType)     return false
      if (activeProvider !== "all" && c.provider       !== activeProvider) return false
      if (activeLevel    !== "all" && c.level          !== activeLevel)    return false
      if (search &&
        !c.title.toLowerCase().includes(search.toLowerCase()) &&
        !c.provider.toLowerCase().includes(search.toLowerCase()) &&
        !c.skills.some(s => s.toLowerCase().includes(search.toLowerCase()))
      ) return false
      return true
    })
  }, [data, activeType, activeProvider, activeLevel, search])

  const featured = filtered.filter(c => c.isFeatured)
  const rest     = filtered.filter(c => !c.isFeatured)

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  if (error || !data) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-red-500">{error ?? "Failed to load"}</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">

      <CertHero
        activeType={activeType}
        onTypeChange={setActiveType}
        credentialTypes={data.credentialTypes}
      />

      <FeaturedPartners providers={data.providers} />

      <ProviderFilter
        active={activeProvider}
        onChange={setActiveProvider}
        providers={data.providers}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Secondary filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="relative flex-1 min-w-52 max-w-sm">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search certifications, providers, skills..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <select
            value={activeLevel}
            onChange={e => setActiveLevel(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <span className="ml-auto text-sm text-gray-500">
            <span className="font-semibold text-gray-900">{filtered.length}</span> certifications
          </span>
        </div>

        {/* Active filter pills */}
        {(activeType !== "all" || activeProvider !== "all" || activeLevel !== "all" || search) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeType !== "all" && (
              <span className="flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full border border-amber-200">
                {activeType}
                <button onClick={() => setActiveType("all")} className="ml-1 text-base leading-none">×</button>
              </span>
            )}
            {activeProvider !== "all" && (
              <span className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                {activeProvider}
                <button onClick={() => setActiveProvider("all")} className="ml-1 text-base leading-none">×</button>
              </span>
            )}
            {activeLevel !== "all" && (
              <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200">
                {activeLevel}
                <button onClick={() => setActiveLevel("all")} className="ml-1 text-base leading-none">×</button>
              </span>
            )}
            {search && (
              <span className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                &quot;{search}&quot;
                <button onClick={() => setSearch("")} className="ml-1 text-base leading-none">×</button>
              </span>
            )}
            <button
              onClick={() => { setActiveType("all"); setActiveProvider("all"); setActiveLevel("all"); setSearch("") }}
              className="text-xs text-gray-500 hover:text-gray-700 underline"
            >
              Clear all
            </button>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-28">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-semibold text-gray-700">No certifications found</p>
            <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          <>
            {featured.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">⭐</span>
                  <h2 className="text-lg font-bold text-gray-900">Featured Certifications</h2>
                  <span className="text-sm text-gray-400">({featured.length})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {featured.map(c => <CertCard key={c.id} cert={c} />)}
                </div>
              </section>
            )}
            {rest.length > 0 && (
              <section>
                {featured.length > 0 && (
                  <h2 className="text-lg font-bold text-gray-900 mb-4">All Certifications</h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {rest.map(c => <CertCard key={c.id} cert={c} />)}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}