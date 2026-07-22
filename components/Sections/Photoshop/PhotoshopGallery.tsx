"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/Sections/Projects";
import { Modal } from "@/components/UI";
import { S3_BASE_URL } from "@/constants";
import type { Project } from "@/types";

import { MockupCarousel } from "./MockupCarousel";
import { TvOrPoster } from "./TvOrPoster";

export function PhotoshopGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Modal open={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title}>
        {selectedProject && (
          <>
            <img
              src={`${S3_BASE_URL}/mockup-projects/${selectedProject.image}`}
              alt={selectedProject.title}
              className="h-auto w-full border-b border-white"
            />
            <div className="px-10 py-6">
              <ProjectCard project={selectedProject} hideTitle />
            </div>
          </>
        )}
      </Modal>

      <div className="grid grid-cols-1 gap-y-6 py-6 min-[900px]:grid-cols-2 min-[900px]:gap-4 min-[900px]:py-14">
        <div className="flex h-full flex-col min-[900px]:px-4">
          {/* text.secondary in the old theme is #e0e0e0 (grey) — this project's --color-base-content,
              not Tailwind/DaisyUI's own "secondary" (green). See [[feedback-mui-color-prop-bug]]. */}
          <h4 className="text-center text-3xl text-base-content">PSD / FIG to HTML</h4>

          {/* flex-1 + justify-center: the old Stack centers this group in whatever extra height
              the Grid's row-stretch gives this column beyond its own content (confirmed by
              measuring a real ~158px gap above the TV on the live site) — matching that requires
              this column to actually stretch (h-full above) and this inner group to consume and
              center within the leftover space, not just sit directly under the heading. */}
          <div className="mt-4 flex flex-1 flex-row items-center justify-center gap-4 min-[900px]:flex-col">
            <p className="text-justify text-base-content min-[900px]:mt-4">
              This section focuses on my ability to work with Adobe Photoshop / Figma and accurately recreate
              websites into HTML format.
            </p>

            <div className="flex h-full flex-col justify-center">
              <TvOrPoster />
            </div>
          </div>
        </div>

        <div className="mt-6 min-[600px]:mt-4 min-[900px]:mt-0">
          <div className="h-full rounded-[20px] border-2 border-neutral bg-[linear-gradient(-45deg,rgba(36,35,35,0.72)_0%,rgba(78,75,76,0.81)_100%)]">
            <MockupCarousel onSelectProject={setSelectedProject} />
          </div>
        </div>
      </div>
    </>
  );
}
