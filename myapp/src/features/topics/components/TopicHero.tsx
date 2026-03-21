import { TopicShowcase } from "../data/types";

export default function TopicHero({ topic }: { topic: TopicShowcase }) {
  return (
    <div className={`bg-gradient-to-br ${topic.gradient} text-white relative overflow-hidden`}>
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{topic.emoji}</span>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
                  Trending Topic
                </p>
                <h1 className="text-4xl font-bold leading-tight">{topic.title}</h1>
              </div>
            </div>
            <p className="text-xl text-white/80 font-medium mb-3">{topic.subtitle}</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl">{topic.description}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <button className="bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors">
                Start Learning
              </button>
              <button className="bg-white/15 backdrop-blur border border-white/25 text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/25 transition-colors">
                View Learning Paths
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 lg:flex-col lg:items-end">
            {topic.stats.map((s) => (
              <div key={s.label} className="text-center lg:text-right">
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-white/60 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}