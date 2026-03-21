import Image from "next/image";

type Props = {
  topic: string;
  description: string;
  btn: string;
};

export default function EmptyState({ topic, description, btn }: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white rounded-2xl p-8 md:p-12">
      
      {/* Image */}
      <div className="mb-6">
        <Image
          src="/nothing.svg"
          alt="Empty state"
          width={220}
          height={220}
          className="mx-auto"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
        {topic}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-500 max-w-md mb-6">
        {description}
      </p>

      {/* Button */}
      <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-md">
        {btn}
      </button>
    </div>
  );
}