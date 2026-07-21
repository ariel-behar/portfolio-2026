"use client";

import { DesignHeading } from "./DesignHeading";
import { FlyInText } from "./FlyInText";
import { Logo } from "./Logo";
import { VideoBackground } from "./VideoBackground";

interface HeroProps {
  hiding: boolean;
  onExplore: () => void;
}

export function Hero({ hiding, onExplore }: HeroProps) {
  return (
    <div
      className={`relative h-screen w-full overflow-hidden text-neutral ${
        hiding ? "hero-anim pointer-events-none animate-[hero-hide_3.5s_ease_both]" : ""
      }`}
    >
      <VideoBackground />
      <div className="absolute inset-0 z-10 bg-white/50" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 px-4 text-center">
        <FlyInText />
        <Logo />
        <DesignHeading />

        <button
          type="button"
          onClick={onExplore}
          className="hero-anim btn btn-primary btn-lg mt-2 animate-[fade-in_2s_ease_4s_both]"
        >
          EXPLORE SITE
        </button>
      </div>
    </div>
  );
}
