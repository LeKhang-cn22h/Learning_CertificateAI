import Image from "next/image";
type Props ={
    nameOwner:string,
    description:string
};
export default function Hero({nameOwner,description}:Props){
    return(
        <div className="relative bg-white w-full flex items-center p-8 overflow-hidden rounded-2xl">
            <div className="max-w-xl z-10 flex flex-col gap-6">
                <h2 className="text-3xl font-bold mb-3">
                    {nameOwner},grow your skills and advance your career with GotikHub Learning
                </h2>
                <div className="flex gap-4">
                <div className="flex">
                    <Image src="/imgHero.jpg" alt="icon1" width={30} height={30}/>
                    <Image src="/imgHero.jpg" alt="icon2" width={30} height={30}/>
                </div>
                <div>

                    <p>{description}</p>
                </div>
                </div>
                <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl">
                    Start my free trial
                </button>
                <button className="bg-white hover:bg-blue-400 text-blue-500 hover:text-white px-4 py-2 rounded-2xl border border-blue-500">
                    Explore courses
                </button>
            </div>
            </div>
            
            <div className="absolute right-[-120]">
                <Image src="/imgHero.jpg" alt="Learning" width={400} height={300} />
            </div>
            
        </div>
    );
}