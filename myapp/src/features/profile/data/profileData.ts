export const profileData = {
  name: "Le Tuan Khang",
  title: "Frontend Developer",
  company: "Gotik",
  location: "Ho Chi Minh City, Vietnam",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80",
  coverBg: "from-slate-800 to-slate-900",
  about:
    "Passionate frontend developer with 3+ years building modern web applications. Currently focused on React, Next.js, and TypeScript. Always learning and growing.",
  stats: {
    coursesCompleted: 24,
    hoursLearned: 312,
    certificates: 8,
    streak: 14,
  },
  skills: [
    { name: "React", level: 88 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "Node.js", level: 55 },
    { name: "UI/UX Design", level: 45 },
  ],
  certificates: [
    {
      id: "cert1",
      title: "React & Next.js: The Complete Guide",
      issuer: "GotikHub",
      date: "Mar 2025",
      category: "technology",
      icon: "⚡",
    },
    {
      id: "cert2",
      title: "Strategic Leadership",
      issuer: "GotikHub",
      date: "Jan 2025",
      category: "business",
      icon: "💼",
    },
    {
      id: "cert3",
      title: "UI/UX Design Fundamentals",
      issuer: "GotikHub",
      date: "Dec 2024",
      category: "creative",
      icon: "🎨",
    },
    {
      id: "cert4",
      title: "AWS Solutions Architect",
      issuer: "GotikHub",
      date: "Nov 2024",
      category: "technology",
      icon: "☁️",
    },
  ],
  inProgress: [
    {
      id: "ip1",
      title: "Machine Learning with Python",
      instructor: "Dr. Priya Sharma",
      progress: 65,
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
      category: "technology",
    },
    {
      id: "ip2",
      title: "Brand Identity Design",
      instructor: "Mia Rossi",
      progress: 30,
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
      category: "creative",
    },
    {
      id: "ip3",
      title: "Financial Modeling & Valuation",
      instructor: "Marcus Williams",
      progress: 12,
      thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
      category: "business",
    },
  ],
  activityHeatmap: generateHeatmap(),
};

function generateHeatmap() {
  const weeks = 26;
  const data: { date: string; count: number }[] = [];
  const now = new Date();
  for (let w = weeks - 1; w >= 0; w--) {
    for (let d = 0; d < 7; d++) {
      const date = new Date(now);
      date.setDate(now.getDate() - w * 7 - d);
      const rand = Math.random();
      data.push({
        date: date.toISOString().split("T")[0],
        count: rand < 0.35 ? 0 : rand < 0.6 ? 1 : rand < 0.8 ? 2 : rand < 0.93 ? 3 : 4,
      });
    }
  }
  return data;
}