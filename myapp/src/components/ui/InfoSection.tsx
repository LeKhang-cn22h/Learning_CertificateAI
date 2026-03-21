
type Props = {
    topic:string;
    children:React.ReactNode;
};
export default function InfoSection({topic,children}:Props){
    return(
        <section className="bg-white text-black p-8 rounded-2xl shadow-2xs flex flex-col gap-6">
            <h2 className="font-bold text-2xl">{topic}</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
        </section>
    );
}