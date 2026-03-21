import TopicShowcasePage from "@/src/features/topics/components/TopicShowcasePage";
import { aiTechData } from "@/src/features/topics/data/aiTechData";

export const metadata = {
  title: "AI & Technology | GotikHub",
  description: "Build cutting-edge AI and tech skills with 3,800+ expert-led courses.",
};

export default function AiTechPage() {
  return <TopicShowcasePage topic={aiTechData} />;
}