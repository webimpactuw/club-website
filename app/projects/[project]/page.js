import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

export default async function Project({ params }) {
  const project = await getProject(params.project);

  return (
    project[0] && (
      <div className="mx-auto max-w-prose space-y-8">
        <Image
          src={urlForImage(project[0].image)}
          width={1920}
          height={1080}
          alt={project[0].title}
          className="h-64 w-128 object-cover rounded-2xl border border-primary-400"
        />
        <hr className="border-primary-900" />
      </div>
    )
  );
}

async function getProject(slug) {
  const query = `*[_type == 'project' && slug.current == $slug] {
    name, 
    slug, 
    link, 
    image, 
    desc, 
    lead, 
    cm1, 
    cm2, 
    cm3, 
    cm4, 
    dm1, 
    dm2, 
    dm3, 
    dm4
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
