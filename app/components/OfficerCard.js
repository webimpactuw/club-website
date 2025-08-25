import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { FaLinkedin } from "react-icons/fa";

export default function OfficerCard({ officer, title}) {
  return (
    <div className="relative">
      <Image
        src={officer.image ? urlForImage(officer.image) : "placeholder.svg"}
        height={768}
        width={648}
        alt={"Picture of " + officer.name}
        className="pointer-events-none object-cover w-[18rem] h-[24rem] rounded-[2rem]"
      />
      <div className="absolute bottom-4 left-4 right-4 p-2 bg-[#FFFA] rounded-[1rem]">
        <div className="flex flex-row justify-between items-center">
          <p className="font-bold">{officer.name}</p>
          <a
            href={officer.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin size={20} /> 
          </a>
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}
