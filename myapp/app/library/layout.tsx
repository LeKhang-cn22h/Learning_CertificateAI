import LibrarySideBar from "@/features/library/components/LibrarySideBar";
import InfoCard from "@/shared/ui/InfoCard";
import InfoSection from "@/shared/ui/InfoSection";

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-50 min-h-screen">

      {/* Top info section */}
      <InfoSection topic="My Content">
        <InfoCard
          icon="/cup.svg"
          title="Set your weekly goal"
          description="Track your weekly learning progress"
        />
        <InfoCard
          icon="/follow.svg"
          title="Skill"
          description="0 followed skills"
        />
      </InfoSection>

      {/* Sidebar + content */}
      <div className="flex gap-4 items-start">
        <LibrarySideBar />
        <div className="flex-1 min-h-[400px]">
          {children}
        </div>
      </div>

    </div>
  );
}