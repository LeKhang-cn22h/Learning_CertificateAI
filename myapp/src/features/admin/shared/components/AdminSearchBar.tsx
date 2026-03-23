// src/features/admin/shared/components/AdminSearchBar.tsx
type Props = {
  search:       string
  setSearch:    (v: string) => void
  category?:    string
  setCategory?: (v: string) => void
  categories?:  string[]
  placeholder?: string
}

export default function AdminSearchBar({
  search, setSearch,
  category, setCategory, categories,
  placeholder = "Search...",
}: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 flex gap-3 flex-wrap">
      <div className="relative flex-1 min-w-48">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      {categories && setCategory && (
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:border-blue-500"
        >
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      )}
    </div>
  )
}