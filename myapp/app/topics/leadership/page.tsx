import TopicShowcasePage from "@/features/topics/components/TopicShowcasePage";
import { leadershipData } from "@/features/topics/data/leadershipData";

export const metadata = {
  title: "Leadership & Management | GotikHub",
  description: "Master leadership and management with 2,400+ expert-led courses.",
};

export default function LeadershipPage() {
  return <TopicShowcasePage topic={leadershipData} />;
}