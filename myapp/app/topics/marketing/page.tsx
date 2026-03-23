import TopicShowcasePage from "@/features/topics/components/TopicShowcasePage";
import { marketingData } from "@/features/topics/data/marketingData";

export const metadata = {
  title: "Marketing | GotikHub",
  description: "Master digital marketing, SEO, content, and growth with 1,600+ expert-led courses.",
};

export default function MarketingPage() {
  return <TopicShowcasePage topic={marketingData} />;
}