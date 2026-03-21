"use client"

import ExploreGrid from "@/src/features/courses/components/ExploreGrid"
import ExploreHeader from "@/src/features/courses/components/ExploreHeader"
import ExploreSearch from "@/src/features/courses/components/ExploreSearch"
import ExploreSidebar from "@/src/features/courses/components/ExploreSidebar"
import { useExplore } from "@/src/features/courses/hook/useExplore"

export default function ExplorePage() {
  const {
    loading, error,
    filtered,
    category,    setCategory,
    query,       setQuery,
    handleSearch,
    clearFilters,
    categories,
  } = useExplore()

  return (
    <div className="flex flex-col gap-6 text-black">

      <ExploreSearch
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      <div className="flex gap-6 items-start">
        <ExploreSidebar
          categories={categories}
          category={category}
          setCategory={setCategory}
          loading={loading}
        />

        <div className="flex-1">
          {!loading && !error && (
            <ExploreHeader
              count={filtered.length}
              category={category}
              query={query}
              clearFilters={clearFilters}
            />
          )}

          <ExploreGrid
            courses={filtered}
            loading={loading}
            error={error}
            clearFilters={clearFilters}
          />
        </div>
      </div>

    </div>
  )
}