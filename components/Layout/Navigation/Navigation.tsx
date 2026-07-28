import Image from "next/image";

import { NAV_LINKS, S3_BASE_URL } from "@/constants";

interface NavigationProps {
  visible?: boolean;
}

// Fixed side nav, scroll-to-section links. Hidden on small/medium screens and
// hidden until the caller marks it visible (the hero-reveal transition, wired in
// a later phase, owns that decision).
export function Navigation({ visible = false }: NavigationProps) {
  return (
    <nav
      className={`fixed top-[15%] right-0 z-50 hidden transition-opacity duration-500 lg:block ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ul className="flex flex-col items-center gap-1 rounded-l-box bg-black/50 py-3 transition-colors hover:bg-black/80">
        <li className="px-4 pb-2">
          <Image src={`${S3_BASE_URL}/logo/logo.png`} alt="Logo" width={35} height={35} />
        </li>
        {NAV_LINKS.map((link) => (
          <li key={link.id} className="w-full px-4 py-1.5 text-center">
            <a
              href={`#${link.id}`}
              className="cursor-pointer text-sm text-secondary no-underline transition-colors hover:text-base-content"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
