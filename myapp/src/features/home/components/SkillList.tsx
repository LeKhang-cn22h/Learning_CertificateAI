import SearchSkill from "./SearchSkill"
import SkillCard   from "./SkillCard"

const skillList = [
  { nameSkill: "Web Development" },
  { nameSkill: "Deep Learning" },
  { nameSkill: "UI Design" },
  { nameSkill: "Data Science" },
  { nameSkill: "Mobile Development" },
  { nameSkill: "Cloud Computing" },
]

export default function SkillList() {
  return (
    <div className="bg-white w-full rounded-2xl overflow-hidden border border-gray-100">

      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Find skills to advance your career
        </h2>
        <p className="text-sm text-gray-500">
          Explore the most in-demand skills in the industry
        </p>
      </div>

      {/* Search */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
        <SearchSkill />
      </div>

      {/* Grid */}
      <div className="p-6 grid grid-cols-2 gap-3">
        {skillList.map((skill, index) => (
          <SkillCard
            key={index}
            nameSkill={skill.nameSkill}
            numberOfSkill={index + 1}
          />
        ))}
      </div>

    </div>
  )
}