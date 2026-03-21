type Props = {
  count:        number
  category:     string
  query:        string
  clearFilters: () => void
}

export default function ExploreHeader({ count, category, query, clearFilters }: Props) {
  const hasFilter = category !== "All" || query !== ""

  return (
    <div className="flex justify-between items-center mb-4">
      <p className="text-sm text-gray-500">
        <span className="font-medium text-gray-900">{count}</span>
        {" "}course{count !== 1 ? "s" : ""} found
        {category !== "All" && (
          <span className="ml-1">
            in <span className="text-blue-600">{`"${category}"`}</span>
          </span>
        )}
      </p>
      {hasFilter && (
        <button
          onClick={clearFilters}
          className="text-sm text-gray-400 hover:text-red-500 transition-colors"
        >
          Clear filters ✕
        </button>
      )}
    </div>
  )
}