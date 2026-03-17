import {FaArrowRight} from "@/src/components/icons";
type props={
    nameSkill:string;
    numberOfSkill:number;
};
export default function SkillCard({nameSkill,numberOfSkill}:props){
    return(
        <div className="">
            <button className="border border-gray-300 rounded-2xl p-2 w-80 text-left justify-between flex items-center">
            <span>{numberOfSkill}. {nameSkill}</span>    
            <span className="flex items-center gap-1 text-blue-800">Explore <FaArrowRight/></span>
            </button>
        </div>
    );
}