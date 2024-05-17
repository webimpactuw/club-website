export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className='space-y-4 md:hover:opacity-75 transition-opacity'
    >
      <Image
        src={urlForImage(project.image).auto('format').size(1920, 1080).url()}
        width={1920}
        height={1080}
        alt={project.title}
        className='rounded-2xl border border-primary-400'
      />
      <div className='space-y-2'>
        <DatePill date={project.date} />
        <div>
          <h2 className='text-lg font-semibold'>{project.title}</h2>
          <p className='line-clamp-1 text-sm text-primary-600'>
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
