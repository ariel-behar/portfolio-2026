import { S3_BASE_URL } from "@/constants";
import type { ThreeJsProject } from "@/types";

interface ThreeJsCardProps {
  project: ThreeJsProject;
}

export function ThreeJsCard({ project }: ThreeJsCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer no-underline transition-transform duration-200 ease-linear hover:scale-105"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- unknown intrinsic size, see Phase 6 plan notes */}
      <img
        src={`${S3_BASE_URL}/three-js-projects/${project.image}`}
        alt={project.title}
        width="100%"
        className="w-full rounded-[10px]"
      />

      <h5 className="text-center">{project.title}</h5>
    </a>
  );
}
