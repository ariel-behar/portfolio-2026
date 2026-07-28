import { S3_BASE_URL } from "@/constants";
import type { Project } from "@/types";

interface ProjectLargeThumbnailProps {
  selectedProject: Project;
}

export function ProjectLargeThumbnail({ selectedProject }: ProjectLargeThumbnailProps) {
  return (
    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
      {/* eslint-disable-next-line @next/next/no-img-element -- unknown/varying intrinsic size per project, see Phase 6 plan notes */}
      <img
        key={selectedProject.id}
        width="100%"
        src={`${S3_BASE_URL}/projects-slides/${selectedProject.image}`}
        alt={`${selectedProject.title} || ${selectedProject.id}`}
        className="hero-anim w-full cursor-pointer transition-transform duration-100 ease-linear hover:scale-[1.01] animate-[fade-in_0.3s_ease_both]"
      />
    </a>
  );
}
