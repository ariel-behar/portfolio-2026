import type { Project } from "@/types";

import { ProjectCard } from "./ProjectCard";

interface ProjectDetailsBoxProps {
  selectedProject: Project | null;
}

export function ProjectDetailsBox({ selectedProject }: ProjectDetailsBoxProps) {
  return (
    <div
      className={`rounded-[20px] bg-black/30 px-3.75 py-2.5 min-[600px]:h-112.5 min-[600px]:overflow-y-auto min-[1200px]:h-130 ${
        selectedProject ? "" : "h-32 overflow-y-auto"
      }`}
    >
      {selectedProject ? (
        <ProjectCard project={selectedProject} />
      ) : (
        <div className="flex h-full min-h-full flex-col items-center justify-center">
          <p className="hero-anim animate-[pulse-scale_1.3s_ease-in-out_infinite] text-center text-xl">
            Click on thumbnails below to see information about each project
          </p>
        </div>
      )}
    </div>
  );
}
