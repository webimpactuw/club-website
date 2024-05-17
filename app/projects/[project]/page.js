import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

export default async function Project({ params }) {
  const project = await getProject(params.project);
  console.log(project[0])

  return (
    <>
      <div className="flex flex-col max-w-screen-2xl gap-6 md:gap-12 p-6 md:p-20 mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 md:w-3/5">
            <p className="text-4xl font-bold">{project[0].title}</p>
            <p className="line-clamp-4">{project[0].description}</p>
          </div>
          <div className="flex flex-col gap-3 justify-end align-end md:w-2/5">
            <p><b>Lead:</b> {project[0].lead}</p>
            <p><b>Coding:</b> {project[0].coding_members}</p>
            <p><b>Design:</b> {project[0].design_members}</p>
          </div>
        </div>
        <Image
          src={urlForImage(project[0].image)}
          width={1920}
          height={1080}
          alt={project[0].title}
          className="h-[50vw] w-128 object-cover rounded-2xl border border-primary-400"
        />
      </div>
    </>
  );
}

async function getProject(slug) {
  const query = `*[_type == 'project' && slug.current == $slug] {
    title, 
    slug, 
    link, 
    image, 
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
