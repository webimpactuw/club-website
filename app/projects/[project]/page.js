import { tagColors } from "@/app/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

export default async function Project({ params }) {
  const project = await getProject(params.project);

  return (
    <>
      <div className="max-w-[96rem] mx-auto relative flex flex-col gap-6 md:gap-12 p-6 md:pt-12 md:px-20">
        <a
          href="/projects"
          className="flex items-center h-8 md:h-10 w-min md:w-auto cursor-pointer md:hover:underline md:absolute md:left-8 transition-opacity md:hover:opacity-50"
        >
          <Image
            src="/chevron-left.svg"
            width={12}
            height={12}
            alt={"chevron left"}
            className="w-12 h-full"
          />
          <p className="text-xl md:hidden">Back</p>
        </a>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 md:w-3/5">
            <p className="text-4xl font-bold">{project[0].title}</p>
            <div className="flex gap-2">
              <p
                className={`w-fit px-2 h-8 text-sm leading-8 ${tagColors[project[0].tag?.toLowerCase()] || "bg-gray"}`}
              >
                {project[0].tag?.toUpperCase() || ""}
              </p>
              <p className="w-fit px-2 h-8 text-sm leading-8 bg-gray">
                {project[0].year}
              </p>
            </div>
            <p>{project[0].description}</p>
            <a
              className="w-fit text-secondary font-semibold hover:font-bold transition-all"
              href={project[0].link}
              target="_blank"
            >
              View the website here
            </a>
          </div>
          <div className="flex flex-col gap-3 pt-14 md:w-2/5">
            <p>
              <b>Lead:</b> {project[0].lead}
            </p>
            <p>
              <b>Coding:</b> {project[0].coding_members}
            </p>
            <p>
              <b>Design:</b> {project[0].design_members}
            </p>
          </div>
        </div>
        <Image
          src={urlForImage(project[0].image)}
          width={1920}
          height={1080}
          alt={project[0].title}
          className="size-full object-contain rounded-2xl border border-primary"
        />
      </div>
    </>
  );
}

export const revalidate = 60;

async function getProject(slug) {
  const query = `*[_type == 'project' && slug.current == $slug] {
    title, 
    slug, 
    link, 
    image, 
    tag, 
    year, 
    description, 
    lead, 
    coding_members,
    design_members
  }`;

  const projects = await client.fetch(query, { slug });
  return projects;
}

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src={urlForImage(value).fit("max").auto("format").url()}
      width={width}
      height={height}
      loading="lazy"
      className="md:max-w-prose rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}
