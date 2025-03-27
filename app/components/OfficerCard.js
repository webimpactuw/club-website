import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function OfficerCard({ officer, title }) {
  return (
    <div className="relative">
      <Image
        src={officer.image ? urlForImage(officer.image) : "placeholder.svg"}
        height={768}
        width={648}
        alt={"Picture of " + officer.name}
        className="pointer-events-none object-cover w-[18rem] h-[24rem] h-full rounded-[2rem]"
      />
      <div className="absolute bottom-4 left-4 right-4 p-2 bg-[#FFF8] rounded-[1rem]">
        <p className="font-bold">{officer.name}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}
