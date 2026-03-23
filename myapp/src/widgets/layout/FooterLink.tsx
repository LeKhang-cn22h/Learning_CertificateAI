import Link from "next/link";
type Props={
    href:string;
    children:React.ReactNode;
};
export default function FooterLink({href,children}:Props){
    return(
        <Link href={href} className="px-2 before:content-[' '] before:mx-2 first:before:content-none hover:text-gray-300 transition">
            {children}
        </Link>
    );
}