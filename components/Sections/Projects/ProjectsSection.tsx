import { projects } from "@/data";

import { ProjectsGallery } from "./ProjectsGallery";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-300 px-4 py-6 min-[600px]:px-6">
      <div className="mb-2 flex flex-col items-center justify-between gap-2 px-10 min-[900px]:mb-6 min-[900px]:flex-row">
        <h3 className="font-sans text-5xl">My Projects</h3>

        <h4 className="text-center text-xl leading-tight min-[900px]:hidden">
          Next | MERN | Shopify
          <br />
          &nbsp;Wordpress | Vanilla JS
        </h4>
        <h4 className="hidden text-center text-xl min-[900px]:block">
          Next | MERN | Shopify | Wordpress | Vanilla JS
        </h4>
      </div>

      <ProjectsGallery projects={projects} />
    </section>
  );
}
