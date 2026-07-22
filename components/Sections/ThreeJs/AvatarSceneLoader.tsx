"use client";

import dynamic from "next/dynamic";

// R3F's Canvas relies on WebGL/DOM APIs unavailable during server rendering, so this
// is loaded client-only. `ssr: false` must be called from a Client Component file —
// that's the only reason this thin wrapper exists separately from AvatarScene itself.
export const AvatarScene = dynamic(() => import("./AvatarScene").then((mod) => mod.AvatarScene), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <span className="loading loading-spinner loading-lg" />
    </div>
  ),
});
