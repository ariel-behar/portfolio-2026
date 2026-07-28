"use client";

import { useRef, useState } from "react";

import { S3_BASE_URL } from "@/constants";

export function Television() {
  const [isTvOn, setIsTvOn] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative mt-4">
      <div className="absolute top-[-12px] left-1/2 z-10 h-[92%] w-3/4 -translate-x-1/2 rotate-[-10deg] rounded-full bg-[radial-gradient(circle,rgba(118,120,119,1)_0%,rgba(73,73,71,1)_80%)]" />

      <video
        ref={videoRef}
        autoPlay
        muted
        onEnded={() => videoRef.current?.load()}
        poster={`${S3_BASE_URL}/backgrounds/tv-designer-poster.jpg`}
        style={isTvOn ? undefined : { opacity: 0 }}
        className="relative top-[-19px] left-1/2 z-20 w-[79%] -translate-x-1/2 rotate-[-10deg]"
      >
        <source src="/videos/design.mp4" type="video/mp4" />
        <source src="/videos/design.webm" type="video/webm" />
        <source src="/videos/design.ogv" type="video/ogv" />
      </video>

      <img
        src={`${S3_BASE_URL}/tv.png`}
        alt="Television"
        className="absolute top-[-20px] left-1/2 z-30 w-4/5 -translate-x-1/2 rotate-[-10deg]"
      />

      {/* Wrapper's idle color is text.secondary (#e0e0e0 grey, this project's --color-base-content) —
          not Tailwind's own "secondary" (green). The active "ON" state below is a different color,
          custom.green.main, which *does* map to this project's --color-secondary. See [[feedback-mui-color-prop-bug]]. */}
      <div className="absolute -bottom-[20%] right-[10%] cursor-pointer text-base-content">
        <span onClick={() => setIsTvOn(true)} className={isTvOn ? "text-secondary" : ""}>
          ON{" "}
        </span>
        |
        {/* #d32f2f is MUI's stock error.main — this project's --color-error is deliberately
            reserved for MUI's error.light (contact form's error state), a different color. */}
        <span onClick={() => setIsTvOn(false)} className={isTvOn ? "" : "text-[#d32f2f]"}>
          {" "}
          OFF
        </span>
      </div>
    </div>
  );
}
