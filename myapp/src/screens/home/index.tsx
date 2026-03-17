import CourseList from "@/src/components/home/CourseList";
import Hero from "@/src/components/home/Hero";
import SkillList from "@/src/components/home/SkillList";
import { courses } from "@/src/data/courses";

export default function HomeScreen(){
    return(
        <div className="text-black flex flex-col gap-4">
            <Hero nameOwner="Le Khang" description="Millions of members are on GotikHub Learning"/>
            <CourseList topic="Top pick for Le Khang" Course={courses}/>
            <SkillList/>
            <CourseList topic="This week’s top courses" Course={courses}/>
            <CourseList topic="Popular on GotikHub Learning" Course={courses}/>
        </div>
    );
}