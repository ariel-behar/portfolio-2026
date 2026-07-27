import type { MetadataRoute } from "next";

import { SITE_NAME, SITE_TAGLINE } from "@/constants";

// Replaces the old site's public/favicon/site.webmanifest, which shipped with empty
// "name"/"short_name" strings (a CRA-PWA-builder default that was never filled in) and
// theme/background colors both left at white — populated properly here instead of ported
// verbatim. theme_color matches custom.blue.main (#0d47a1, this project's --color-primary,
// used on every primary CTA); background_color matches --color-base-100 (#262626).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} - Web Developer Portfolio`,
    short_name: SITE_NAME,
    description: SITE_TAGLINE,
    start_url: "/",
    display: "standalone",
    background_color: "#262626",
    theme_color: "#0d47a1",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
