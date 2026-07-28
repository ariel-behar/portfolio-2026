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

        {/* Bespoke MUI Button match (not DaisyUI's btn/btn-primary/btn-lg, which renders
            visibly larger/rounder with a border and no uppercase — measured against the live
            old site: 15px/500/uppercase text, 4px radius, no border, elevation-2 shadow, pure
            white text (MUI's stock contained-button contrastText — this Button only overrides
            backgroundColor via sx, never the `color` prop, same "stock, not this theme's own
            token" case as the Bonus/Contact buttons' text-white). */}
        <button
          type="button"
          onClick={onExplore}
          className="hero-anim mt-2 min-w-16 cursor-pointer rounded bg-primary px-5.5 py-2 text-[15px] leading-[1.75] font-medium text-white uppercase shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_0px_rgba(0,0,0,0.14),0_1px_5px_0px_rgba(0,0,0,0.12)] animate-[fade-in_2s_ease_4s_both]"
        >
          EXPLORE SITE
        </button>
      </div>
    </div>
  );
}
