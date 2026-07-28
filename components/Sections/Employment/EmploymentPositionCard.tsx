import Image from "next/image";

import { S3_BASE_URL } from "@/constants";
import type { EmploymentPosition } from "@/types";

interface EmploymentPositionCardProps {
  position: EmploymentPosition;
  isLast: boolean;
}

export function EmploymentPositionCard({ position, isLast }: EmploymentPositionCardProps) {
  return (
    <li className="flex gap-4 min-[600px]:gap-6">
      <div className="flex flex-col items-center">
        <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full bg-secondary ring-4 ring-base-100" />
        {!isLast && <span className="mt-1 w-px flex-1 bg-base-content/20" />}
      </div>

      <div className={isLast ? "pb-2" : "pb-10"}>
        <span className="font-sans text-sm font-bold tracking-wide text-secondary">
          {position.startYear} - {position.endYear ?? "Present"}
        </span>

        <div className="mt-1 flex items-center gap-3">
          <Image
            src={`${S3_BASE_URL}/company-logos/${position.companyLogo}`}
            alt={`${position.company} logo`}
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-xl object-contain"
          />

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

        <p className="mt-2 text-sm text-muted-light">{position.companyDescription}</p>

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
    </li>
  );
}
