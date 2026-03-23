import TopicShowcasePage from "@/features/topics/components/TopicShowcasePage";
import { aiTechData } from "@/features/topics/data/aiTechData";

export const metadata = {
  title: "AI & Technology | GotikHub",
  description: "Build cutting-edge AI and tech skills with 3,800+ expert-led courses.",
};

export default function AiTechPage() {
  return <TopicShowcasePage topic={aiTechData} />;
}