import Link from "next/link";
import {FaHome, CiMap} from "@/src/components/icons"
export default function SideBar(){
    return(
        <aside className="w-30 bg-white min-h-screen border border-gray-200 p-4">
            <nav className="flex flex-col gap-4 text-2xl text-black">
                <Link href="/" className="hover:text-blue-900 flex gap-2"><FaHome /> Home</Link>
                <Link href="/about" className="hover:text-blue-900 flex gap-2"><CiMap /> About</Link>
            </nav>
        </aside>
    );
}