import SearchSkill from "./SearchSkill";
import SkillCard from "./SkillCard"

export default function SkillList(){
    
    return(
        <div className="bg-white w-full rounded-2xl">
            <div className="bg-green-200 w-full p-2 rounded-t-2xl flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Identify the skills you need to advance your career</h2>
                <div className="flex gap-1">
                    <p>Search for the most popular skills for a </p>
                    <SearchSkill/>
                </div>
            </div>
        <div className="p-2 grid grid-cols-3 gap-4 justify-items-center">
            {skilList.map((skill,index)=>(
                <SkillCard key={index}
                    nameSkill={skill.nameSkill}
                    numberOfSkill={index+1}
                />
            ))}
        </div>
        </div>
    )
}
const skilList=[
    {
        nameSkill:"Web Development"
    },
    {
        nameSkill:"Deep Learning"
    },
    {
        nameSkill:"UI Design"
    },
    {
        nameSkill:"Web Development"
    },
    {
        nameSkill:"Deep Learning"
    },
    {
        nameSkill:"UI Design"
    },

];