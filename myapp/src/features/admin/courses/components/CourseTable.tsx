// src/features/admin/courses/components/CourseTable.tsx
import Image from "next/image"
import Link  from "next/link"
import type { AdminCourse } from "@/features/admin/courses/types"

type Props = {
  courses:  AdminCourse[]
  deleteId: string | null
  onDelete: (id: string) => void
}

export default function CourseTable({ courses, deleteId, onDelete }: Props) {
  if (courses.length === 0) return (
    <div className="text-center py-16 text-gray-400">
      <p>No courses found</p>
    </div>
  )

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-3 px-4 font-medium text-gray-500">Course</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Category</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Author</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Duration</th>
            <th className="text-right py-3 px-4 font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {courses.map(course => (
            <tr key={course.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-9 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image
                      src={course.img || "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"}
                      alt={course.title}
                      width={48} height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-gray-900 line-clamp-1">{course.title}</span>
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                  {course.category}
                </span>
              </td>
              <td className="py-3 px-4 text-gray-600">{course.author}</td>
              <td className="py-3 px-4 text-gray-600">{course.time}m</td>
              <td className="py-3 px-4">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={`/admin/courses/${course.id}/edit`}
                    className="px-3 py-1.5 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(course.id)}
                    disabled={deleteId === course.id}
                    className="px-3 py-1.5 text-xs font-medium bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {deleteId === course.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}