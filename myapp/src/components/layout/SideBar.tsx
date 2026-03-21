import Link from "next/link";
import {FaHome, CiMap,IoLibrary,FaFireAlt,BiCertification,FaBrain,SiLeaderprice,SiGooglemarketingplatform} from "@/src/components/icons"
import { usePathname } from "next/navigation";
type Props={
    open:boolean;
}
export default function SideBar({open}:Props){
    const pathName=usePathname();
    const menus=[
        {label:"home", icon:<FaHome/>, href:"/"},
        {label:"career", icon:<CiMap/>, href:"/career"},
        {label:"library", icon:<IoLibrary/>, href:"/library"},
        {label:"practice", icon:<FaFireAlt />, href:"/practice"},
        {label:"certifications", icon:<BiCertification/>, href:"/certifications"},
        { label: "Leadership",icon:<SiLeaderprice/>, href: "/topics/leadership" },
        { label: "AI & Tech", icon:<FaBrain/> ,href: "/topics/ai-tech" },
        { label: "Marketing", icon:<SiGooglemarketingplatform/> ,href: "/topics/marketing" },


    ];
    return(
        <aside className={`bg-gray-900 text-white p-4 transition-all duration-300 ${open?"w-56":"w-20"}`}>
            <nav className="flex flex-col gap-4 text-2xl text-white">
                {menus.map((item)=>{
                    const Icon = item.icon;
                    return(
                        <Link key={item.href} href={item.href} className={`group relative flex items-center p-2 rounded 
                            ${open?"gap-2 justify-start":"justify-center"}
                            ${pathName===item.href?"bg-gray-700 border-l-4 border-blue-700":"hover:bg-gray-700"}
                        `}>
                            {Icon}
                            {open && <span>{item.label}</span>}
                           
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}