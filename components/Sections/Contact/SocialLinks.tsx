import Image from "next/image";

import { S3_BASE_URL } from "@/constants";

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/ariel-behar/", src: "icons/linkedin.svg", alt: "LinkedIn Logo" },
  { href: "https://github.com/ariel-behar", src: "icons/github.svg", alt: "Github Logo" },
];

export function SocialLinks() {
  return (
    <>
      <div className="mb-6 flex flex-row justify-evenly gap-2">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-center">
            <Image
              src={`${S3_BASE_URL}/${link.src}`}
              alt={link.alt}
              width={32}
              height={32}
              className="h-20 w-auto min-[600px]:h-22.5 min-[900px]:h-25 min-[1200px]:h-27.5"
            />
          </a>
        ))}
      </div>

      {/* text.secondary in the old theme is #e0e0e0 (grey) — this project's text-base-content,
          not Tailwind/DaisyUI's own "secondary" (green). See [[feedback-mui-color-prop-bug]]. */}
      <p className="mb-4 text-center text-[1.3rem] leading-[1.4rem] text-base-content min-[900px]:text-[1.4rem] min-[900px]:leading-6">
        OR EMAIL ME DIRECTLY AT
      </p>

      {/* No mb-6 here — the card's own pb-6 (ContactSection.tsx) supplies this trailing gap;
          a margin on the last in-flow child would collapse through to the card's own edge. */}
      <p className="text-center text-[1.3rem] leading-[1.4rem] text-base-content italic min-[900px]:text-[1.4rem] min-[900px]:leading-6">
        ariel.behar@hotmail.com
      </p>
    </>
  );
}
