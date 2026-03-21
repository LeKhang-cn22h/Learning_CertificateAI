type Props = {
  categories:  string[]
  category:    string
  setCategory: (c: string) => void
  loading:     boolean
}

export default function ExploreSidebar({ categories, category, setCategory, loading }: Props) {
  return (
    <div className="w-52 flex-shrink-0 bg-white rounded-2xl p-5 sticky top-4">
      <h2 className="font-semibold text-sm text-gray-700 mb-3 uppercase tracking-wide">
        Category
      </h2>
      <div className="flex flex-col gap-1">
        {loading ? (
          <>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-8 bg-gray-100 rounded-lg animate-pulse" />
            ))}
          </>
        ) : (
          categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                category === cat
                  ? "bg-blue-600 text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))
        )}
      </div>
    </div>
  )
}