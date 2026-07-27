"use client";

import { useState } from "react";

import { HumbleBeginnings } from "./HumbleBeginnings";
import { SleepyDaniel } from "./SleepyDaniel";

// Gradient is a literal CSS value from the old site's styled-component, not a MUI theme dot-path.
// border-top color is custom.black.main (#2e2e2e), this project's --color-neutral.
const gradientStyle = { background: "linear-gradient(135deg, rgba(180,180,180,1) 0%, rgba(46,46,46,1) 72%)" };

export function BonusSection() {
  const [showDaniel, setShowDaniel] = useState(false);

  return (
    <section id="bonus" style={gradientStyle} className="border-t-[3px] border-neutral">
      {showDaniel ? (
        <SleepyDaniel onClose={() => setShowDaniel(false)} />
      ) : (
        <HumbleBeginnings onReveal={() => setShowDaniel(true)} />
      )}
    </section>
  );
}
