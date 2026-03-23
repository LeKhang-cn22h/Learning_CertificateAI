import Image from "next/image";
type Props ={
    icon:string;
    title:string;
    description:string;
}
export default function InfoCard({icon,title,description}:Props){
    return(
        <div className="rounded-2xl shadow p-4 hover:shadow-lg transition">
            <div>
                <Image src={icon} alt="icon" width={50} height={50}/>
            </div>
            <div>
                <h3 className="font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}