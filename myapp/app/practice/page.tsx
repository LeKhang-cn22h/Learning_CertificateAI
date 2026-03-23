import PracticeHero from "@/features/practice/components/PracticeHero";
import PracticeFeatures from "@/features/practice/components/PracticeFeatures";
import PracticeGrid from "@/features/practice/components/PracticeGrid";

export const metadata = {
  title: "Coding Practice | GotikHub",
  description:
    "Advance your tech skills with Code Challenges, GitHub Codespaces, and Cybersecurity Labs.",
};

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PracticeHero />
      <PracticeFeatures />
      <PracticeGrid />
    </div>
  );
}