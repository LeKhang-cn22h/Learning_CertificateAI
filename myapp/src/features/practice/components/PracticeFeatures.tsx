const features = [
  {
    icon: "⚡",
    title: "Code Challenges",
    partner: "Powered by CoderPad",
    partnerColor: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    description:
      "Receive a prompt, write your solution in the browser-based editor, and get instant automated feedback — including hints when you're stuck.",
    bullets: [
      "In-browser code editor, no setup needed",
      "Automated test cases with real-time feedback",
      "Available in Python, JS, Java, SQL, Go & C#",
    ],
  },
  {
    icon: "🐙",
    title: "GitHub Codespaces",
    partner: "Cloud development environment",
    partnerColor: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    description:
      "Start coding on any machine in seconds. Courses with Codespaces support come pre-configured with all extensions and dependencies ready.",
    bullets: [
      "Full VS Code experience in the browser",
      "Pre-configured per course — zero config",
      "Access GitHub repositories instantly",
    ],
  },
  {
    icon: "🔐",
    title: "Cybersecurity Labs",
    partner: "Powered by Hack the Box",
    partnerColor: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
    description:
      "Practice offensive and defensive security techniques in safe, isolated environments. No risk to real systems.",
    bullets: [
      "Isolated sandbox environments",
      "Real-world attack & defense scenarios",
      "Beginner to advanced CTF-style labs",
    ],
  },
];

export default function PracticeFeatures() {
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
          Three ways to practice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.bg} ${f.border} border rounded-2xl p-6 flex flex-col gap-4`}
            >
              <div className="text-3xl">{f.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">{f.title}</h3>
                <p className={`text-xs font-medium mt-0.5 ${f.partnerColor}`}>{f.partner}</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
              <ul className="space-y-1.5 mt-auto">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}