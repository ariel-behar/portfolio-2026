import type { SkillProficiency } from "@/types";

import { PROFICIENCY_COLOR } from "./proficiencyColor";

interface ProficiencyTitleProps {
  title: string;
  proficiency: SkillProficiency;
  hoveredProficiency: SkillProficiency | null;
  onHover: (proficiency: SkillProficiency | null) => void;
}

export function ProficiencyTitle({ title, proficiency, hoveredProficiency, onHover }: ProficiencyTitleProps) {
  const dimmed = hoveredProficiency !== null && hoveredProficiency !== proficiency;

  return (
    <div className="mx-2 flex flex-col items-center">
      <p
        onMouseEnter={() => onHover(proficiency)}
        onMouseLeave={() => onHover(null)}
        className={`cursor-crosshair text-base text-base-content ${dimmed ? "opacity-20" : "opacity-100"}`}
      >
        {title}
      </p>

      <div
        onMouseEnter={() => onHover(proficiency)}
        onMouseLeave={() => onHover(null)}
        className={`mt-[5px] mb-2.5 h-7.5 w-7.5 cursor-crosshair rounded-full ${PROFICIENCY_COLOR[proficiency]} ${dimmed ? "opacity-20" : "opacity-100"}`}
      />
    </div>
  );
}
