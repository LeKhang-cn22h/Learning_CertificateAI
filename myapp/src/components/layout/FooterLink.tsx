import Link from "next/link";
type Props={
    href:string;
    children:React.ReactNode;
};
export default function FooterLink({href,children}:Props){
    return(
        <Link href={href} className="px-2 before:content-['-'] before:mr-2 hover:text-gray-300 transition">
            {children}
        </Link>
    );
}