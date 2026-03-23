import Link from "next/link"

type Props = {
  title:       string
  description?: string
  addHref?:    string
  addLabel?:   string
}

export default function AdminPageHeader({ title, description, addHref, addLabel }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
      {addHref && (
        <Link
          href={addHref}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          {addLabel ?? "Add new"}
        </Link>
      )}
    </div>
  )
}