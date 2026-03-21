import { Suspense } from "react";
import ContentHero from "@/src/features/content/components/ContentHero";
import ContentSubNav from "@/src/features/content/components/ContentSubNav";
import ContentCourseGrid from "@/src/features/content/components/ContentCourseGrid";
import { getCoursesByCategory, subCategories } from "@/src/features/content/data/contentData";

type Props = {
  searchParams: { sub?: string };
};

export const metadata = {
  title: "Business Courses | CertificateAI",
  description: "Master leadership, marketing, finance and more with expert-led business courses.",
};

export default function BusinessPage({ searchParams }: Props) {
  const allCourses = getCoursesByCategory("business");
  const sub = searchParams.sub;

  const filtered = sub
    ? allCourses.filter((c) =>
        c.tags.some((t) => t.toLowerCase().replace(/ /g, "-") === sub)
      )
    : allCourses;

  // Fallback: if no match for sub, show all
  const displayCourses = filtered.length > 0 ? filtered : allCourses;

  return (
    <div className="min-h-screen bg-gray-50">
      <ContentHero category="business" />

      <Suspense fallback={null}>
        <ContentSubNav items={subCategories.business} />
      </Suspense>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Featured section */}
        {!sub && (
          <div className="pt-8 pb-2">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Recommended for you
            </h2>
            <p className="text-sm text-gray-500">
              Based on your profile and learning history
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