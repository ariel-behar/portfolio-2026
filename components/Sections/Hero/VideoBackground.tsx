"use client";

import { useRef } from "react";

// Some browsers don't reliably restart a looping <video> on their own; reloading
// on "ended" is a common, cheap workaround (ported from the old site).
export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    videoRef.current?.load();
  };

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      playsInline
      onEnded={handleEnded}
      className="absolute inset-0 z-0 h-full w-full object-cover"
    >
      <source src="/videos/ink.mp4" type="video/mp4" />
      <source src="/videos/ink.webm" type="video/webm" />
      <source src="/videos/ink.ogv" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
}
