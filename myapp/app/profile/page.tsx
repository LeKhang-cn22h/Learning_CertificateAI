import ProfileHeader from "@/src/features/profile/components/ProfileHeader";
import ProfileAbout from "@/src/features/profile/components/ProfileAbout";
import ProfileInProgress from "@/src/features/profile/components/ProfileInProgress";
import ProfileCertificates from "@/src/features/profile/components/ProfileCertificates";
import ProfileActivity from "@/src/features/profile/components/ProfileActivity";

export const metadata = {
  title: "My Profile | GotikHub",
  description: "Your learning profile, certificates, and progress.",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with cover + avatar + stats */}
      <ProfileHeader />

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left column */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileAbout />
            <ProfileInProgress />
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileActivity />
            <ProfileCertificates />
          </div>

        </div>
      </div>
    </div>
  );
}