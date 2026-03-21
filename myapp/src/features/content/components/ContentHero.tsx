type HeroConfig = {
  title: string;
  subtitle: string;
  gradient: string;
  emoji: string;
  stats: { value: string; label: string }[];
};

const heroConfigs: Record<string, HeroConfig> = {
  business: {
    title: "Business Skills",
    subtitle: "Lead teams, drive growth, and master the fundamentals of modern business.",
    gradient: "from-blue-700 to-blue-900",
    emoji: "💼",
    stats: [
      { value: "1,200+", label: "Courses" },
      { value: "4M+", label: "Learners" },
      { value: "95%", label: "Completion rate" },
    ],
  },
  technology: {
    title: "Technology Skills",
    subtitle: "Build cutting-edge solutions with the most in-demand tech skills.",
    gradient: "from-indigo-700 to-violet-900",
    emoji: "⚡",
    stats: [
      { value: "2,400+", label: "Courses" },
      { value: "6M+", label: "Learners" },
      { value: "Top 10", label: "Skills covered" },
    ],
  },
  creative: {
    title: "Creative Skills",
    subtitle: "Unlock your creative potential with design, video, photography and more.",
    gradient: "from-rose-600 to-orange-700",
    emoji: "🎨",
    stats: [
      { value: "900+", label: "Courses" },
      { value: "3M+", label: "Learners" },
      { value: "50+", label: "Software covered" },
    ],
  },
};

export default function ContentHero({ category }: { category: string }) {
  const config = heroConfigs[category] ?? heroConfigs.business;

  return (
    <div className={`bg-gradient-to-r ${config.gradient} text-white`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{config.emoji}</span>
              <h1 className="text-3xl font-bold">{config.title}</h1>
            </div>
            <p className="text-white/80 text-base max-w-xl">{config.subtitle}</p>
          </div>
          <div className="hidden md:flex gap-8">
            {config.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-white/70 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}