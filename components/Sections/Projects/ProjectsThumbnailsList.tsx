import { S3_BASE_URL } from "@/constants";
import type { Project } from "@/types";

interface ProjectsThumbnailsListProps {
  projects: Project[];
  onSelectProject: (project: Project, index: number) => void;
}

export function ProjectsThumbnailsList({ projects, onSelectProject }: ProjectsThumbnailsListProps) {
  return (
    <div className="mt-4 flex flex-1 flex-wrap items-center justify-center gap-2">
      {projects.map((project, index) => (
        <div
          key={project.id}
          onClick={() => onSelectProject(project, index + 1)}
          className="flex h-[105px] w-[105px] cursor-pointer flex-col gap-2 transition-transform duration-200 ease-linear hover:scale-110 min-[900px]:h-[110px] min-[900px]:w-[135px] min-[1200px]:h-[120px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- unknown intrinsic size, see Phase 6 plan notes */}
          <img
            width="100%"
            src={`${S3_BASE_URL}/projects-slides/${project.image}`}
            alt={`${project.title} || ${project.id}`}
            className="w-full"
          />

          <p className="text-center text-sm">{project.title}</p>
        </div>
      ))}
    </div>
  );
}
