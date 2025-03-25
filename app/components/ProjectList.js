"use client";

import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function ProjectList({ title, projects, show }) {
  const [open, setOpen] = useState(show);

  return (
    <>
      <div className="flex flex-row items-center h-12">
        <button
          className="flex transition-opacity md:hover:opacity-50"
          onClick={() => setOpen(!open)}
        >
          <p className="text-4xl font-bold">{title}</p>
          {open ? (
            <Image
              src="/chevron-down.svg"
              width={12}
              height={12}
              alt={"chevron down"}
              className="w-12 h-12"
            />
          ) : (
            <Image
              src="/chevron-right.svg"
              width={12}
              height={12}
              alt={"chevron down"}
              className="w-12 h-12"
            />
          )}
        </button>
        <hr className="flex-1 h-px my-auto ml-2 bg-darkGray opacity-25" />
      </div>
      {open && (
        <div className="h-auto mb-4 px-0 md:px-12 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((project) => (
              <ProjectCard key={project.slug} project={project}>
                <p>{project.image}</p>
              </ProjectCard>
            ))}
        </div>
      )}
    </>
  );
}
