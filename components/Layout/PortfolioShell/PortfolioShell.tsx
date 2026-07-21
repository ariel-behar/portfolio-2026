"use client";

import { useState } from "react";

import { Navigation } from "@/components/Layout/Navigation";
import { Hero } from "@/components/Sections/Hero";

interface PortfolioShellProps {
  children: React.ReactNode;
}

// Owns the one-time hero-reveal state for the whole one-pager: shows the Hero
// intro first, then swaps to the real page content on "Explore Site". Everything
// else (each portfolio section) stays server-rendered and is passed in as
// children from app/page.tsx.
export function PortfolioShell({ children }: PortfolioShellProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <main className={`relative ${revealed ? "h-auto overflow-visible" : "h-screen overflow-hidden"}`}>
      <Navigation visible={revealed} />

      <Hero hiding={revealed} onExplore={() => setRevealed(true)} />

      <div
        className={
          revealed
            ? "absolute inset-x-0 z-10 animate-[main-reveal_2.5s_ease_both]"
            : "absolute inset-x-0 top-[100vh] hidden"
        }
      >
        {children}
      </div>
    </main>
  );
}
