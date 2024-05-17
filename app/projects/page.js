import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { client } from '@/sanity/lib/client';

// export default function Projects() {
//   return (
//     <div className="px-10 py-40">
//       <h1 className="text-5xl font-extrabold mb-10">In Progress ...</h1>
//     </div>
//   );
// }

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <div className="px-10 py-40">
        <h1 className="text-5xl font-extrabold mb-10">In Progress ...</h1>
      </div>
        <div>
          <p className='text-4xl'>Our Projects</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>
    </>
  );
}

async function getProjects() {
  const query = `*[_type == 'project'] | order(date desc) {
    title,
    description,
    date,
    'slug':slug.current,
    image
  }`;

  const projects = await client.fetch(query);
  return projects;
}
  