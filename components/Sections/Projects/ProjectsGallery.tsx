"use client";

import { useState } from "react";

import { CarouselStatus } from "@/components/UI";
import type { Project } from "@/types";

import { LargeThumbnailPlaceholder } from "./LargeThumbnailPlaceholder";
import { ProjectDetailsBox } from "./ProjectDetailsBox";
import { ProjectLargeThumbnail } from "./ProjectLargeThumbnail";
import { ProjectsThumbnailsList } from "./ProjectsThumbnailsList";

interface ProjectsGalleryProps {
  projects: Project[];
}

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [selected, setSelected] = useState<{ project: Project | null; index: number }>({
    project: null,
    index: 1,
  });

  return (
    <div className="grid grid-cols-1 gap-2 py-4 min-[900px]:grid-cols-12">
      <div className="relative flex h-full flex-col justify-center min-[900px]:col-span-7">
        <CarouselStatus currentSlide={selected.index} totalSlides={projects.length} />

        {selected.project ? (
          <ProjectLargeThumbnail selectedProject={selected.project} />
        ) : (
          <LargeThumbnailPlaceholder />
        )}
      </div>

      <div className="min-[900px]:col-span-5">
        <ProjectDetailsBox selectedProject={selected.project} />
      </div>

      <div className="min-[900px]:col-span-12">
        <ProjectsThumbnailsList
          projects={projects}
          onSelectProject={(project, index) => setSelected({ project, index })}
        />
      </div>
    </div>
  );
}
