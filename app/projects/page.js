import ProjectCard from "../components/ProjectCard";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <div className="flex flex-col gap-8 md:gap-12 p-8 md:p-12 lg:p-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 md:w-2/3 lg:w-1/2">
          <p className="text-4xl font-bold">Explore Our Work</p>
          <p className="text-lg">
            We build websites for a variety of local clients, prioritizing
            underserved and minority communities with a lack of resources
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:h-16 w-full items-center justify-between">
          <div className="h-full w-px bg-gray md:h-10"></div>
          <div className="flex justify-center gap-4">
            <p className="font-bold text-6xl text-secondary">3</p>
            <p className="text-grayAlt h-fit my-auto opacity-75">Years Total</p>
          </div>
          <div className="h-full w-px bg-gray md:h-10"></div>
          <div className="flex justify-center gap-4">
            <p className="font-bold text-6xl text-secondary">200+</p>
            <p className="text-grayAlt h-fit my-auto opacity-75">
              Student Contributors
            </p>
          </div>
          <div className="h-full w-px bg-gray md:h-10"></div>
          <div className="flex justify-center gap-4">
            <p className="font-bold text-6xl text-secondary">27</p>
            <p className="text-grayAlt h-fit my-auto opacity-75">
              Websites Created
            </p>
          </div>
          <div className="h-full w-px bg-gray md:h-10"></div>
        </div>

        <div className="flex flex-row items-center h-12">
          <p className="text-4xl font-bold">2024 Projects</p>
          <Image
            src="/chevron-down.svg"
            width={12}
            height={12}
            alt={"chevron down"}
            className="w-12 h-12"
          />
          <hr className="flex-1 h-px my-auto ml-2 bg-darkGray opacity-25" />
        </div>

        <div className="h-auto mb-4 px-0 md:px-12 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.sort((a, b) => a.title.localeCompare(b.title)).map((project) => (
            <ProjectCard key={project.slug} project={project}>
              <p>{project.image}</p>
            </ProjectCard>
          ))}
        </div>
      </div>
    </>
  );
}

export const revalidate = 60;

async function getProjects() {
  const query = `*[_type == 'project'] | order(date desc) {
    title,
    description,
    'slug':slug.current,
    image
  }`;

  const projects = await client.fetch(query);
  return projects;
}
