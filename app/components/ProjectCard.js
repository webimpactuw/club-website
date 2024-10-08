import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col w-full h-96 md:hover:opacity-75 transition-opacity"
    >
      <Image
        src={urlForImage(project.image)}
        width={1920}
        height={1080}
        alt={project.title}
        className="w-full h-80 object-cover rounded-2xl border border-primary"
      />
      <div className="flex flex-col pt-4 md:gap-0 md:flex-row">
        <div className="flex md:flex-col justify-between md:justify-center md:w-1/3">
          <h2 className="line-clamp-1 text-lg font-semibold">
            {project.title}
          </h2>
          <p className="w-fit px-2 h-8 text-sm bg-lightpurple leading-8">MINORITY OWNED</p>
        </div>
        <div className="flex h-full justify-start md:justify-end md:w-2/3">
          <p className="my-auto line-clamp-2 text-md text-primary-600">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
