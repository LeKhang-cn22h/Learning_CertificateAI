import { profileData } from "../data/profileData";

export default function ProfileAbout() {
  const { about, skills } = profileData;

  return (
    <div className="space-y-6">
      {/* About */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="text-base font-bold text-gray-900 mb-3">About</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{about}</p>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="text-base font-bold text-gray-900 mb-4">Top Skills</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-xs text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}