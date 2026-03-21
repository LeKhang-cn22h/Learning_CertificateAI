export default function PracticeHero() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Text */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
                Hands-On Learning
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Coding Practice
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Advance your tech skills through hands-on learning. Practice with Code Challenges
              powered by CoderPad, courses with GitHub Codespaces, and Cybersecurity Labs.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "⚡", label: "Code Challenges", sub: "Powered by CoderPad" },
                { icon: "🐙", label: "GitHub Codespaces", sub: "Cloud IDE" },
                { icon: "🔐", label: "Cyber Labs", sub: "Hack the Box" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 rounded-xl px-3 py-2"
                >
                  <span className="text-lg">{f.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-white">{f.label}</div>
                    <div className="text-xs text-gray-400">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { value: "200+", label: "Challenges" },
              { value: "8", label: "Languages" },
              { value: "1M+", label: "Learners" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}