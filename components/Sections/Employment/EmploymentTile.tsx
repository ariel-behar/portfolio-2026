import Image from "next/image";

import { S3_BASE_URL } from "@/constants";
import type { EmploymentPosition } from "@/types";

interface EmploymentTileProps {
  position: EmploymentPosition;
  // Exactly one of the two is passed in by EmploymentGallery, depending on EMPLOYMENT_MODAL_ENABLED.
  href?: string;
  onClick?: () => void;
}

export function EmploymentTile({ position, href, onClick }: EmploymentTileProps) {
  const className =
    "flex w-24 cursor-pointer flex-col items-center gap-2 rounded-2xl px-0 py-3 text-center transition-transform duration-200 ease-linear hover:-translate-y-1.5 min-[600px]:w-32 min-[600px]:px-2";

  const content = (
    <>
      <Image
        src={`${S3_BASE_URL}/company-logos/${position.companyLogo}`}
        alt={`${position.company} logo`}
        width={80}
        height={80}
        className={`h-16 w-16 shrink-0 rounded-full object-contain p-1 shadow-[0_6px_16px_rgba(0,0,0,0.45)] ring-4 ring-white min-[600px]:h-20 min-[600px]:w-20 ${position.companyLogoBg ?? "bg-white"}`}
      />

      <div>
        <p className="text-xs font-bold whitespace-nowrap min-[600px]:text-base">{position.company}</p>
        <p className="text-xs text-muted-light">{position.role}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className={className}>
      {content}
    </div>
  );
}
