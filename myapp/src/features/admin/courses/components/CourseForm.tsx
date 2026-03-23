// src/features/admin/courses/components/CourseForm.tsx
import type { CourseFormData } from "@/src/features/admin/courses/types"
import { COURSE_CATEGORIES }   from "@/src/features/admin/courses/types"

type Props = {
  form:      CourseFormData
  loading:   boolean
  error:     string | null
  success:   boolean
  isEdit:    boolean
  onChange:  (field: keyof CourseFormData, value: string | number) => void
  onSubmit:  (e: React.FormEvent<HTMLFormElement>) => void
  onCancel:  () => void
}

export default function CourseForm({
  form, loading, error, success, isEdit,
  onChange, onSubmit, onCancel,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg px-4 py-3">
          {isEdit ? "Course updated!" : "Course created!"} Redirecting...
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-5">

        <div className="flex flex-col gap-1.5 col-span-2">
          <label className="text-sm font-medium text-gray-700">Title *</label>
          <input type="text" value={form.title}
            onChange={e => onChange("title", e.target.value)}
            placeholder="Course title"
            className="border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5 col-span-2">
          <label className="text-sm font-medium text-gray-700">Description *</label>
          <textarea value={form.description}
            onChange={e => onChange("description", e.target.value)}
            placeholder="Course description" rows={3}
            className="border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Author *</label>
          <input type="text" value={form.author}
            onChange={e => onChange("author", e.target.value)}
            placeholder="Instructor name"
            className="border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <select value={form.category}
            onChange={e => onChange("category", e.target.value)}
            className="border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 bg-white"
          >
            {COURSE_CATEGORIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Duration (minutes) *</label>
          <input type="number" value={form.time || ""}
            onChange={e => onChange("time", Number(e.target.value))}
            placeholder="120" min={1}
            className="border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Image URL</label>
          <input type="text" value={form.img}
            onChange={e => onChange("img", e.target.value)}
            placeholder="https://..."
            className="border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5 col-span-2">
          <label className="text-sm font-medium text-gray-700">Preview video URL</label>
          <input type="text" value={form.previewUrl}
            onChange={e => onChange("previewUrl", e.target.value)}
            placeholder="https://www.youtube.com/embed/..."
            className="border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

      </div>

      <div className="flex gap-3 pt-2 border-t border-gray-100">
        <button type="submit" disabled={loading || success}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          {loading ? "Saving..." : isEdit ? "Update course" : "Create course"}
        </button>
        <button type="button" onClick={onCancel}
          className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          Cancel
        </button>
      </div>

    </form>
  )
}