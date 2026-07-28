"use client";

import { useCallback, useSyncExternalStore } from "react";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { CarouselStatus } from "@/components/UI";
import { mockupProjects } from "@/data";
import type { Project } from "@/types";

import { MockupCarouselSlide } from "./MockupCarouselSlide";

type EmblaApi = ReturnType<typeof useEmblaCarousel>[1];

function getSelectedIndexSnapshot(emblaApi: EmblaApi) {
  return emblaApi?.selectedScrollSnap() ?? 0;
}

interface MockupCarouselProps {
  onSelectProject: (project: Project) => void;
}

export function MockupCarousel({ onSelectProject }: MockupCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const subscribe = useCallback(
    (callback: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", callback).on("reInit", callback);
      return () => {
        emblaApi.off("select", callback).off("reInit", callback);
      };
    },
    [emblaApi],
  );

  const selectedIndex = useSyncExternalStore(
    subscribe,
    () => getSelectedIndexSnapshot(emblaApi),
    () => 0,
  );

  return (
    <div className="relative min-h-115 h-full">
      <CarouselStatus currentSlide={selectedIndex + 1} totalSlides={mockupProjects.length} />

      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {mockupProjects.map((project) => (
            <div key={project.id} className="h-full min-w-0 flex-[0_0_100%]">
              <MockupCarouselSlide project={project} onSelectProject={onSelectProject} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer text-white"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7.5 w-7.5 animate-[carousel-arrow-pulse_1s_infinite] hover:h-8.75 hover:w-8.75 hover:animate-none"
        >
          <path d="M15 18 9 12l6-6" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-white"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7.5 w-7.5 animate-[carousel-arrow-pulse_1s_infinite] hover:h-8.75 hover:w-8.75 hover:animate-none"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="absolute top-2.5 left-1/2 flex -translate-x-1/2 gap-1.5">
        {mockupProjects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-3 w-3 rounded-full border-2 border-[#808080] ${
              index === selectedIndex ? "bg-[#080808]" : "bg-[#f0f0f0]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
