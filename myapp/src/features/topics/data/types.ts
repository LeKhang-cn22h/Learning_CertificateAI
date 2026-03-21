export type TopicCourse = {
  id: string;
  title: string;
  instructor: string;
  instructorTitle: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  reviewCount: number;
  thumbnail: string;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isTrending?: boolean;
};

export type LearningPath = {
  id: string;
  title: string;
  courseCount: number;
  duration: string;
  level: string;
  description: string;
  icon: string;
};

export type TopicInstructor = {
  id: string;
  name: string;
  title: string;
  avatar: string;
  courseCount: number;
  followers: string;
};

export type TopicShowcase = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  gradient: string;  // tailwind from-to classes
  accentColor: string;
  stats: { value: string; label: string }[];
  skills: string[];
  featuredCourses: TopicCourse[];
  allCourses: TopicCourse[];
  learningPaths: LearningPath[];
  instructors: TopicInstructor[];
  whyLearn: { icon: string; title: string; desc: string }[];
};