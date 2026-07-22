"use client";

import { useSyncExternalStore } from "react";

import { PsdPoster } from "./PsdPoster";
import { Television } from "./Television";

const QUERY = "(min-width: 900px)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

// Old site conditionally *mounted* Television vs. PsdToHtml (not just CSS-hid one of them),
// so the ~350KB video never downloads on mobile. Matched here via matchMedia instead of a
// CSS-only breakpoint switch, at the MUI `md` breakpoint (900px) this section was built against.
export function TvOrPoster() {
  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return isDesktop ? <Television /> : <PsdPoster />;
}
