import type { EmploymentPosition } from "@/types";

import { EmploymentPositionCard } from "./EmploymentPositionCard";

interface EmploymentTimelineProps {
  positions: EmploymentPosition[];
}

export function EmploymentTimeline({ positions }: EmploymentTimelineProps) {
  const sorted = [...positions].sort((a, b) => a.order - b.order);

  return (
    <ol className="mx-auto flex max-w-175 flex-col py-4">
      {sorted.map((position, index) => (
        <EmploymentPositionCard
          key={position.id}
          position={position}
          isLast={index === sorted.length - 1}
        />
      ))}
    </ol>
  );
}
