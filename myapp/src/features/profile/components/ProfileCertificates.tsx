import { profileData } from "../data/profileData";

const categoryGradients: Record<string, string> = {
  technology: "from-indigo-500 to-violet-600",
  business: "from-blue-500 to-blue-700",
  creative: "from-rose-500 to-orange-500",
};

export default function ProfileCertificates() {
  const { certificates } = profileData;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">Certificates</h2>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full font-medium">
          {certificates.length} earned
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="relative rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
          >
            {/* Color bar */}
            <div className={`h-1.5 bg-gradient-to-r ${categoryGradients[cert.category]}`} />

            <div className="p-4 flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${categoryGradients[cert.category]} flex items-center justify-center text-lg flex-shrink-0`}>
                {cert.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-700 transition-colors leading-tight">
                  {cert.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">{cert.issuer} · {cert.date}</p>
              </div>
            </div>

            {/* Download icon */}
            <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}