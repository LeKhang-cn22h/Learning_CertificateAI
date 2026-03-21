// app/home/page.tsx
import CourseList from "@/src/components/ui/CourseList"
import Hero       from "@/src/features/home/components/Hero"
import SkillList  from "@/src/features/home/components/SkillList"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 bg-gray-50 min-h-screen p-2">
      <Hero nameOwner="Le Khang" description="Millions of members are on GotikHub Learning" />
      <CourseList topic="Top pick for Le Khang" />
      <SkillList />
      <CourseList topic="This week's top courses" />
      <CourseList topic="Popular on GotikHub Learning" />
    </div>
  )
}