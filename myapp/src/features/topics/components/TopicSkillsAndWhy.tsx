import { TopicShowcase } from "../data/types";

export default function TopicSkillsAndWhy({ topic }: { topic: TopicShowcase }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Skills covered */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">Skills You will Learn</h2>
        <div className="flex flex-wrap gap-2">
          {topic.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-50 border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Why learn */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">Why Learn {topic.title}?</h2>
        <div className="space-y-4">
          {topic.whyLearn.map((item) => (
            <div key={item.title} className="flex gap-3">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}