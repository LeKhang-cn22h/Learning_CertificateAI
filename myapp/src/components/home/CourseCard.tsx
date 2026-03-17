import Image from "next/image";
type Props={
  img:string,
  category:string,
  time:number,
  title:string,
  description:string,
  author:string,
};
export default function CourseCard({img,category,time,title,description,author}:Props){
    return(
      <div className="hover:scale-105 transition transform ">
        <div className="relative">
            <Image src={img} alt="image course" width={300} height={150}  className="rounded-2xl"/>
            <p className="absolute bottom-2 right-6 text-white bg-gray-400 rounded px-2 pb-2">{time}m</p>
        </div>
        <p>{title}</p>
        <p>{category}</p>
        <p>{description}</p>
        <p className="text-gray-500">By: {author}</p>
      </div>  
    );
}