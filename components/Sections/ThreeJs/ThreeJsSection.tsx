import { CarouselStatus } from "@/components/UI";
import { threeJsProjects } from "@/data";

import { AvatarScene } from "./AvatarSceneLoader";
import { ThreeJsCard } from "./ThreeJsCard";

export function ThreeJsSection() {
  return (
    <section className="relative mx-auto max-w-300 px-4 py-6 min-[600px]:px-6">
      <h3 className="mb-0 text-center font-sans text-3xl min-[600px]:mb-6">Three JS Projects</h3>

      <CarouselStatus currentSlide={threeJsProjects.length} totalSlides={threeJsProjects.length} />

      <div className="grid grid-cols-1 gap-2 min-[600px]:grid-cols-12">
        <div className="h-125 pt-4 min-[600px]:h-auto min-[600px]:col-span-6">
          <AvatarScene />
        </div>

        <div className="min-[600px]:col-span-6">
          <div className="grid grid-cols-2 gap-2 min-[900px]:grid-cols-3">
            {threeJsProjects.map((project) => (
              <ThreeJsCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
