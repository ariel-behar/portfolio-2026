import { S3_BASE_URL } from "@/constants";
import type { Project } from "@/types";

interface MockupCarouselSlideProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export function MockupCarouselSlide({ project, onSelectProject }: MockupCarouselSlideProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center pb-2 mt-4">
      <img
        onClick={() => onSelectProject(project)}
        src={`${S3_BASE_URL}/mockup-projects/${project.image}`}
        alt={project.title}
        className="h-75 w-auto max-w-full cursor-pointer"
      />

      <p className="mt-4 mb-2 text-2xl text-[aliceblue]">{project.title}</p>

      <div className="flex items-center justify-center">
        {/* #1976d2 is MUI's stock default blue — confirmed via live measurement, this is NOT
            the theme's own primary.main (custom.blue.main, #0d47a1, this project's --color-primary).
            Both this button and the link below share the same stock blue in the real old site. */}
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="cursor-pointer text-lg text-[#1976d2] sm:text-xl"
        >
          Project Description
        </button>

        <span className="text-base text-[aliceblue] sm:text-xl">&nbsp;|&nbsp;</span>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-[#1976d2] no-underline sm:text-xl"
        >
          Visit Project&apos;s Site
        </a>
      </div>
    </div>
  );
}
