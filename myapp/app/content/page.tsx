import Link from "next/link";

export const metadata = {
  title: "Browse Content | CertificateAI",
  description: "Explore thousands of courses across Business, Technology, and Creative.",
};

const categories = [
  {
    href: "/content/business",
    label: "Business",
    emoji: "💼",
    description: "Leadership, Marketing, Finance, Management, Communication",
    gradient: "from-blue-600 to-blue-800",
    count: "1,200+ courses",
  },
  {
    href: "/content/technology",
    label: "Technology",
    emoji: "⚡",
    description: "Web Dev, AI & ML, Cloud, Cybersecurity, DevOps",
    gradient: "from-indigo-600 to-violet-800",
    count: "2,400+ courses",
  },
  {
    href: "/content/creative",
    label: "Creative",
    emoji: "🎨",
    description: "UI/UX Design, Video Editing, Photography, Motion Graphics",
    gradient: "from-rose-500 to-orange-600",
    count: "900+ courses",
  },
];

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Content</h1>
          <p className="text-gray-500">
            Discover expert-led courses across three major skill categories.
          </p>
        </div>
      </div>

      {/* Category cards */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group relative bg-gradient-to-br ${cat.gradient} rounded-2xl p-8 text-white overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Background decoration */}
              <div className="absolute -right-6 -top-6 text-8xl opacity-20 group-hover:opacity-30 transition-opacity select-none">
                {cat.emoji}
              </div>

              <div className="relative">
                <span className="text-4xl mb-4 block">{cat.emoji}</span>
                <h2 className="text-2xl font-bold mb-2">{cat.label}</h2>
                <p className="text-white/75 text-sm mb-4 leading-relaxed">
                  {cat.description}
                </p>
                <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {cat.count}
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 bg-white/20 rounded-full p-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "4,500+", label: "Total Courses" },
            { value: "500+", label: "Expert Instructors" },
            { value: "13M+", label: "Active Learners" },
            { value: "4.7★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-5 text-center border border-gray-100">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}