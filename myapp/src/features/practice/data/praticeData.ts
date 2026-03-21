export type PracticeType = "Code Challenge" | "GitHub Codespaces" | "Cyber Lab";

export type Challenge = {
  id: string;
  title: string;
  instructor: string;
  language: string;
  languageIcon: string;
  type: PracticeType;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  reviewCount: number;
  challengeCount: number;
  description: string;
  tags: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  thumbnail: string;
};

export const languages = [
  { label: "All", value: "all" },
  { label: "Python", value: "Python", emoji: "🐍" },
  { label: "JavaScript", value: "JavaScript", emoji: "🟨" },
  { label: "TypeScript", value: "TypeScript", emoji: "🔷" },
  { label: "Java", value: "Java", emoji: "☕" },
  { label: "SQL", value: "SQL", emoji: "🗄️" },
  { label: "Go", value: "Go", emoji: "🐹" },
  { label: "C#", value: "C#", emoji: "🟣" },
];

export const practiceTypes: { label: string; value: string }[] = [
  { label: "All Types", value: "all" },
  { label: "Code Challenge", value: "Code Challenge" },
  { label: "GitHub Codespaces", value: "GitHub Codespaces" },
  { label: "Cyber Lab", value: "Cyber Lab" },
];

export const challenges: Challenge[] = [
  // Python
  {
    id: "p1",
    title: "Python Code Challenges: String Manipulation",
    instructor: "Olivia Stone",
    language: "Python",
    languageIcon: "🐍",
    type: "Code Challenge",
    level: "Beginner",
    duration: "1h 20m",
    rating: 4.8,
    reviewCount: 14200,
    challengeCount: 12,
    description: "Practice string slicing, formatting, and built-in methods with real-time feedback.",
    tags: ["Strings", "Python"],
    isBestseller: true,
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&q=80",
  },
  {
    id: "p2",
    title: "Python Code Challenges: Data Structures",
    instructor: "James Liu",
    language: "Python",
    languageIcon: "🐍",
    type: "Code Challenge",
    level: "Intermediate",
    duration: "2h 10m",
    rating: 4.7,
    reviewCount: 9870,
    challengeCount: 18,
    description: "Master lists, dicts, sets, and tuples through hands-on interactive challenges.",
    tags: ["Data Structures", "Python"],
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
  },
  {
    id: "p3",
    title: "Python: Functional Programming Challenges",
    instructor: "Sarah Kim",
    language: "Python",
    languageIcon: "🐍",
    type: "Code Challenge",
    level: "Advanced",
    duration: "1h 50m",
    rating: 4.6,
    reviewCount: 5430,
    challengeCount: 10,
    description: "Apply lambdas, map, filter, and reduce to solve real functional programming problems.",
    tags: ["Functional", "Python"],
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80",
  },
  {
    id: "p4",
    title: "Python Data Science with GitHub Codespaces",
    instructor: "Dr. Priya Sharma",
    language: "Python",
    languageIcon: "🐍",
    type: "GitHub Codespaces",
    level: "Intermediate",
    duration: "4h 30m",
    rating: 4.9,
    reviewCount: 21000,
    challengeCount: 0,
    description: "Run Jupyter notebooks and Pandas code in a cloud-based GitHub Codespace environment.",
    tags: ["Data Science", "Pandas"],
    isBestseller: true,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },

  // JavaScript
  {
    id: "j1",
    title: "JavaScript Code Challenges: Arrays & Loops",
    instructor: "Alex Johnson",
    language: "JavaScript",
    languageIcon: "🟨",
    type: "Code Challenge",
    level: "Beginner",
    duration: "1h 15m",
    rating: 4.8,
    reviewCount: 18300,
    challengeCount: 15,
    description: "Tackle array manipulation, iteration patterns, and ES6+ syntax with instant feedback.",
    tags: ["Arrays", "ES6"],
    isBestseller: true,
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&q=80",
  },
  {
    id: "j2",
    title: "JavaScript: Async Programming Challenges",
    instructor: "Marcus Lee",
    language: "JavaScript",
    languageIcon: "🟨",
    type: "Code Challenge",
    level: "Intermediate",
    duration: "1h 40m",
    rating: 4.7,
    reviewCount: 11500,
    challengeCount: 12,
    description: "Practice Promises, async/await, and fetch API patterns through guided challenges.",
    tags: ["Async", "Promises"],
    thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80",
  },
  {
    id: "j3",
    title: "React 18 Practice with GitHub Codespaces",
    instructor: "Emma Liu",
    language: "JavaScript",
    languageIcon: "🟨",
    type: "GitHub Codespaces",
    level: "Intermediate",
    duration: "5h 00m",
    rating: 4.9,
    reviewCount: 28700,
    challengeCount: 0,
    description: "Build React components and hooks in a pre-configured Codespace — no local setup needed.",
    tags: ["React", "Hooks"],
    isBestseller: true,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
  },

  // TypeScript
  {
    id: "ts1",
    title: "TypeScript Code Challenges: Type System",
    instructor: "Nathan Fox",
    language: "TypeScript",
    languageIcon: "🔷",
    type: "Code Challenge",
    level: "Intermediate",
    duration: "1h 30m",
    rating: 4.7,
    reviewCount: 7200,
    challengeCount: 10,
    description: "Practice generics, union types, interfaces, and type guards with automated checks.",
    tags: ["Types", "Generics"],
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
  },
  {
    id: "ts2",
    title: "Next.js 14 Hands-On with GitHub Codespaces",
    instructor: "Sophie Martin",
    language: "TypeScript",
    languageIcon: "🔷",
    type: "GitHub Codespaces",
    level: "Advanced",
    duration: "6h 20m",
    rating: 4.8,
    reviewCount: 15400,
    challengeCount: 0,
    description: "Build a full Next.js app with App Router, Server Components, and TypeScript in Codespaces.",
    tags: ["Next.js", "App Router"],
    thumbnail: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400&q=80",
  },

  // SQL
  {
    id: "sql1",
    title: "SQL Code Challenges: Joins & Aggregations",
    instructor: "Jennifer Kim",
    language: "SQL",
    languageIcon: "🗄️",
    type: "Code Challenge",
    level: "Beginner",
    duration: "1h 45m",
    rating: 4.8,
    reviewCount: 22100,
    challengeCount: 20,
    description: "Write SELECT, JOIN, GROUP BY, and subquery statements with live DB feedback.",
    tags: ["Joins", "Aggregation"],
    isBestseller: true,
    thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=80",
  },
  {
    id: "sql2",
    title: "SQL Code Challenges: Window Functions",
    instructor: "David Torres",
    language: "SQL",
    languageIcon: "🗄️",
    type: "Code Challenge",
    level: "Advanced",
    duration: "1h 20m",
    rating: 4.6,
    reviewCount: 4800,
    challengeCount: 8,
    description: "Master RANK, ROW_NUMBER, LAG, LEAD, and PARTITION BY in realistic challenge scenarios.",
    tags: ["Window Functions", "Analytics"],
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80",
  },

  // Java
  {
    id: "ja1",
    title: "Java Code Challenges: OOP Fundamentals",
    instructor: "Carlos Mendez",
    language: "Java",
    languageIcon: "☕",
    type: "Code Challenge",
    level: "Beginner",
    duration: "2h 00m",
    rating: 4.6,
    reviewCount: 8900,
    challengeCount: 14,
    description: "Practice classes, inheritance, polymorphism and interfaces with automated test cases.",
    tags: ["OOP", "Classes"],
    thumbnail: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&q=80",
  },

  // Go
  {
    id: "go1",
    title: "Go Code Challenges: Concurrency Patterns",
    instructor: "Yuki Tanaka",
    language: "Go",
    languageIcon: "🐹",
    type: "Code Challenge",
    level: "Advanced",
    duration: "1h 35m",
    rating: 4.7,
    reviewCount: 3200,
    challengeCount: 8,
    description: "Solve goroutines, channels, and sync primitives challenges in a browser-based Go editor.",
    tags: ["Goroutines", "Channels"],
    isNew: true,
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80",
  },

  // Cybersecurity
  {
    id: "cyber1",
    title: "Ethical Hacking Lab: Web Application Attacks",
    instructor: "Anna Schmidt",
    language: "Python",
    languageIcon: "🐍",
    type: "Cyber Lab",
    level: "Advanced",
    duration: "3h 00m",
    rating: 4.9,
    reviewCount: 6700,
    challengeCount: 6,
    description: "Practice XSS, SQL injection, and CSRF in a safe, isolated Hack the Box powered lab.",
    tags: ["Security", "Hacking"],
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
  },
];

export const getChallengesByLanguage = (lang: string) =>
  lang === "all" ? challenges : challenges.filter((c) => c.language === lang);