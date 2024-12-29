import { client } from "@/sanity/lib/client";
import ProjectList from "../components/ProjectList";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <div className="flex flex-col gap-8 md:gap-12 p-8 md:p-12 lg:p-20 mx-auto">
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
            <p className="font-bold text-6xl text-secondary w-40 max-w-[40vw] md:w-auto text-right">
              3
            </p>
            <p className="text-grayAlt h-fit my-auto opacity-75 w-40 max-w-[40vw] md:w-auto text-left">
              Years Total
            </p>
          </div>
          <div className="h-full w-px bg-gray md:h-10"></div>
          <div className="flex justify-center gap-4">
            <p className="font-bold text-6xl text-secondary w-40 max-w-[40vw] md:w-auto text-right">
              200+
            </p>
            <p className="text-grayAlt h-fit my-auto opacity-75 w-40 max-w-[40vw] md:w-auto text-left">
              Student Contributors
            </p>
          </div>
          <div className="h-full w-px bg-gray md:h-10"></div>
          <div className="flex justify-center gap-4">
            <p className="font-bold text-6xl text-secondary w-40 max-w-[40vw] md:w-auto text-right">
              27
            </p>
            <p className="text-grayAlt h-fit my-auto opacity-75 w-40 max-w-[40vw] md:w-auto text-left">
              Websites Created
            </p>
          </div>
          <div className="h-full w-px bg-gray md:h-10"></div>
        </div>
        <ProjectList title="2024 Projects" projects={projects} show={true} />
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
    image,
    tag,
  }`;

  const projects = await client.fetch(query);
  return projects;
}
