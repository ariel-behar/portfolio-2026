import { useEffect, useState } from "react";

import { S3_BASE_URL } from "@/constants";
import type { Project } from "@/types";

interface ProjectsThumbnailsListProps {
  projects: Project[];
  onSelectProject: (project: Project, index: number) => void;
}

// Two full rows' worth at the most common desktop breakpoint; the rest only renders
// once "Display More" is clicked, so the grid doesn't spill into a sparse third row.
const DESKTOP_INITIAL_VISIBLE_COUNT = 16;
// On narrow (< 600px) viewports, far fewer thumbnails fit per row, so the same count
// would stretch across many more rows than intended - cap it lower there instead.
const MOBILE_INITIAL_VISIBLE_COUNT = 9;
const MOBILE_BREAKPOINT_QUERY = "(min-width: 600px)";

export function ProjectsThumbnailsList({ projects, onSelectProject }: ProjectsThumbnailsListProps) {
  const [showAll, setShowAll] = useState(false);
  const [initialVisibleCount, setInitialVisibleCount] = useState(DESKTOP_INITIAL_VISIBLE_COUNT);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT_QUERY);
    const updateCount = (isDesktop: boolean) =>
      setInitialVisibleCount(isDesktop ? DESKTOP_INITIAL_VISIBLE_COUNT : MOBILE_INITIAL_VISIBLE_COUNT);

    updateCount(mediaQuery.matches);
    const listener = (event: MediaQueryListEvent) => updateCount(event.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, initialVisibleCount);
  const remainingCount = projects.length - initialVisibleCount;

  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      <div className="flex flex-1 flex-wrap items-center justify-center gap-2">
        {visibleProjects.map((project, index) => (
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

      {!showAll && remainingCount > 0 && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="cursor-pointer rounded border border-white px-3 py-1 text-xs font-medium tracking-wide text-white uppercase hover:bg-white/10"
        >
          Display {remainingCount} more {remainingCount === 1 ? "project" : "projects"}...
        </button>
      )}
    </div>
  );
}
