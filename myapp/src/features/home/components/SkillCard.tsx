type Props = {
  nameSkill:     string
  numberOfSkill: number
}

export default function SkillCard({ nameSkill, numberOfSkill }: Props) {
  return (
    <button className="group flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all text-left">
      <div className="flex items-center gap-3">
        <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
          {numberOfSkill}
        </span>
        <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
          {nameSkill}
        </span>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
  )
}