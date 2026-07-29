import Image from "next/image";

import { S3_BASE_URL } from "@/constants";
import type { EmploymentPosition } from "@/types";

interface EmploymentTileProps {
  position: EmploymentPosition;
  onClick: () => void;
}

export function EmploymentTile({ position, onClick }: EmploymentTileProps) {
  return (
    <div
      onClick={onClick}
      className="flex w-32 cursor-pointer flex-col items-center gap-2 rounded-2xl px-2 py-3 text-center transition-transform duration-200 ease-linear hover:-translate-y-1.5"
    >
      <Image
        src={`${S3_BASE_URL}/company-logos/${position.companyLogo}`}
        alt={`${position.company} logo`}
        width={80}
        height={80}
        className={`h-20 w-20 shrink-0 rounded-full object-contain p-1 shadow-[0_6px_16px_rgba(0,0,0,0.45)] ring-4 ring-white ${position.companyLogoBg ?? "bg-white"}`}
      />

      <div>
        <p className="whitespace-nowrap font-bold">{position.company}</p>
        <p className="text-xs text-muted-light">{position.role}</p>
      </div>
    </div>
  );
}
