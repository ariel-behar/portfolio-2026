"use client";

import { useEffect, useRef, useState } from "react";

import { AvatarCanvas } from "./AvatarCanvas";
import { animationsNames, type ActionName } from "./Avatar";

// Buttons only expose the three user-triggerable actions — Crouch/Idle drive the
// automatic intro sequence and aren't meant to be clickable (matches old site).
const TRIGGERABLE_ACTIONS = animationsNames.slice(2);

function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function AvatarScene() {
  const [animationName, setAnimationName] = useState<ActionName | "">("");
  const { ref: canvasContainerRef, inView: isInView } = useInView<HTMLDivElement>();

  return (
    <div className="flex h-full flex-col">
      <div className="hero-anim flex w-full justify-center gap-2 animate-[fade-in_1s_ease_2.7s_both]">
        {TRIGGERABLE_ACTIONS.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setAnimationName(name)}
            className="btn btn-lg btn-ghost font-bold text-[#1976d2] uppercase"
          >
            {name}
          </button>
        ))}
      </div>

      <div ref={canvasContainerRef} className="relative flex-1">
        <AvatarCanvas animationName={animationName} isInView={isInView} />
      </div>
    </div>
  );
}
