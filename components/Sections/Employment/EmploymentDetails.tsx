import Image from "next/image";

import { S3_BASE_URL } from "@/constants";
import type { EmploymentPosition } from "@/types";

interface EmploymentDetailsProps {
  position: EmploymentPosition;
}

export function EmploymentDetails({ position }: EmploymentDetailsProps) {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3">
        <Image
          src={`${S3_BASE_URL}/company-logos/${position.companyLogo}`}
          alt={`${position.company} logo`}
          width={64}
          height={64}
          className={`h-16 w-16 shrink-0 rounded-full object-contain p-1 ring-2 ring-white ${position.companyLogoBg ?? "bg-white"}`}
        />

        <div>
          <span className="font-sans text-sm font-bold tracking-wide text-secondary">
            {position.startYear} - {position.endYear ?? "Present"}
          </span>

          <h5 className="text-2xl">
            {position.role}
            <span className="text-muted-light"> · </span>
            <a
              href={position.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-1 underline-offset-2"
            >
              {position.company}
            </a>
          </h5>
        </div>
      </div>

      <p className="mt-3 text-sm text-muted-light">{position.companyDescription}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {position.focus.map((tag) => (
          <span key={tag} className="badge badge-neutral badge-sm">
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-3 text-justify text-secondary">
        <span aria-hidden className="mr-1 text-muted-light">
          &#8618;
        </span>
        {position.contribution}
      </p>
    </div>
  );
}
