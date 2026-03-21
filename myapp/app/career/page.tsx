// page route:/career
import InfoCard from "@/src/components/ui/InfoCard";
import InfoSection from "@/src/components/ui/InfoSection";
import CareerSearch from "@/src/features/career/components/careerSearch";

export default function CareerPage(){
    return(
        <div className="flex flex-col gap-4">
            <InfoSection topic="My Career plan">
                <InfoCard icon="/avt.jpg" title="Frontend Developer" description="Learn React and build UI"/>
                <InfoCard icon="/goal.svg" title="goal" description="Connect with the right content"/>
            </InfoSection>
            <CareerSearch/>
        </div>
    );
}