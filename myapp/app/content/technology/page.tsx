import ContentCourseGrid from "@/features/content/components/ContentCourseGrid";
import ContentHero from "@/features/content/components/ContentHero";
import ContentSubNav from "@/features/content/components/ContentSubNav";
import { getCoursesByCategory, subCategories } from "@/features/content/data/contentData";
import { Suspense } from "react";


type Props = {
  searchParams: { sub?: string };
};

export const metadata = {
  title: "Technology Courses | CertificateAI",
  description: "Learn web dev, AI, cloud, cybersecurity and more with expert-led tech courses.",
};

export default function TechnologyPage({ searchParams }: Props) {
  const allCourses = getCoursesByCategory("technology");
  const sub = searchParams.sub;

  const filtered = sub
    ? allCourses.filter((c) =>
        c.tags.some((t) => t.toLowerCase().replace(/ /g, "-") === sub)
      )
    : allCourses;

  const displayCourses = filtered.length > 0 ? filtered : allCourses;

  return (
    <div className="min-h-screen bg-gray-50">
      <ContentHero category="technology" />

      <Suspense fallback={null}>
        <ContentSubNav items={subCategories.technology} />
      </Suspense>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {!sub && (
          <div className="pt-8 pb-2">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Trending in Technology
            </h2>
            <p className="text-sm text-gray-500">
              The most in-demand skills in the industry right now
            </p>
          </div>
        )}

        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-xl aspect-[4/5] animate-pulse" />
            ))}
          </div>
        }>
          <ContentCourseGrid courses={displayCourses} sub={sub} />
        </Suspense>
      </div>
    </div>
  );
}