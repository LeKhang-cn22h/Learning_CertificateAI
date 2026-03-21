import { TopicShowcase } from "../data/types";
import TopicHero from "./TopicHero";
import FeaturedCourses from "./FeaturedCourses";
import LearningPaths from "./LearningPaths";
import AllCoursesGrid from "../badge/AllCoursesGrid";
import TopInstructors from "./TopInstructors";
import TopicSkillsAndWhy from "./TopicSkillsAndWhy";

export default function TopicShowcasePage({ topic }: { topic: TopicShowcase }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <TopicHero topic={topic} />

      {/* Sticky breadcrumb / tab */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-1">
            {["Overview", "Courses", "Learning Paths", "Instructors"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-3.5 text-sm font-medium border-b-2 transition-colors ${
                  i === 0
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-14">
        {/* Featured courses */}
        <FeaturedCourses courses={topic.featuredCourses} topicSlug={topic.slug} />

        {/* Skills + Why learn */}
        <TopicSkillsAndWhy topic={topic} />

        {/* Learning paths */}
        <LearningPaths paths={topic.learningPaths} topicSlug={topic.slug} />

        {/* Top instructors */}
        <TopInstructors instructors={topic.instructors} />

        {/* All courses */}
        <AllCoursesGrid courses={topic.allCourses} topicSlug={topic.slug} />

        {/* CTA Banner */}
        <div className={`bg-gradient-to-r ${topic.gradient} rounded-2xl p-8 text-white text-center`}>
          <h2 className="text-2xl font-bold mb-2">Ready to master {topic.title}?</h2>
          <p className="text-white/75 text-sm mb-5">
            Join {topic.stats[1]?.value ?? "millions of"} learners already building these skills.
          </p>
          <button className="bg-white text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
            Start for Free
          </button>
        </div>
      </div>
    </div>
  );
}