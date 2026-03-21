import Image from "next/image"
import Link  from "next/link"
import { courseService } from "@/src/features/courses/services/courseService"

type Props = {
  params: Promise<{ id: string }>
}

export default async function CourseDetailPage({ params }: Props) {
  const { id }          = await params
  const { data, error } = await courseService.getCourseById(id)

  if (error || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <p className="text-xl text-gray-600">Course not found</p>
        <Link href="/home" className="text-blue-500 hover:underline">
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 text-black">

      <div className="bg-gray-900 text-white rounded-2xl p-8 flex gap-8 items-start">
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-sm text-gray-400">
            <Link href="/home" className="hover:underline">Home</Link>
            {" › "}
            <span>{data.category}</span>
          </p>
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-gray-300">{data.description}</p>
          <div className="flex gap-4 text-sm text-gray-400 flex-wrap items-center">
            <span>By {data.author}</span>
            <span>•</span>
            <span>{data.time} min</span>
            <span>•</span>
            <span className="bg-gray-700 px-2 py-0.5 rounded">{data.category}</span>
          </div>
          <div className="flex gap-3 mt-2">
            <Link
                href={`/courses/${data.id}/learn`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
              >
                Start learning
              </Link>
              <Link
                href={`/courses/${data.id}/learn`}
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2.5 rounded-lg font-medium transition-colors"
              >
                Preview course
              </Link>
          </div>
        </div>
        <div className="hidden md:block flex-shrink-0">
          <Image src={data.img} alt={data.title} width={280} height={180} className="rounded-xl object-cover" />
        </div>
      </div>

      <div className="flex gap-6 items-start">
        <div className="flex flex-col gap-6 flex-1">

          <div className="bg-white rounded-2xl p-6 flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Skills you will gain</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map(skill => (
                <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex flex-col gap-2">
            <h2 className="text-xl font-semibold mb-2">Course content</h2>
            {data.lessons.map((lesson, i) => (
              <div key={lesson.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-800">{lesson.title}</span>
                </div>
                <span className="text-sm text-gray-500">{lesson.duration}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 flex flex-col gap-3">
            <h2 className="text-xl font-semibold">About the instructor</h2>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                {data.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{data.author}</p>
                <p className="text-sm text-gray-500">{data.category} Instructor</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Expert instructor with years of experience in {data.category}.
              Passionate about teaching and helping students achieve their goals.
            </p>
          </div>

        </div>

        <div className="w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 sticky top-4">
            <p className="text-2xl font-bold">Free</p>
            <p className="text-sm text-gray-500">with trial</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors">
              Start free trial
            </button>
            <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-2.5 rounded-lg font-medium transition-colors">
              View course
            </button>
            <div className="border-t pt-4 flex flex-col gap-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Duration</span>
                <span className="font-medium">{data.time} min</span>
              </div>
              <div className="flex justify-between">
                <span>Category</span>
                <span className="font-medium">{data.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Instructor</span>
                <span className="font-medium">{data.author}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}