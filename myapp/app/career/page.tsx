// page route:/career
import CareerSearch from "@/features/career/components/careerSearch";
import InfoCard from "@/shared/ui/InfoCard";
import InfoSection from "@/shared/ui/InfoSection";

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