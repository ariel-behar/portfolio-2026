import Image from "next/image";

import { S3_BASE_URL } from "@/constants";
import type { SkillProficiency, Technology } from "@/types";

import { PROFICIENCY_COLOR } from "./proficiencyColor";

interface SkillChipProps {
  technology: Technology;
  hoveredProficiency: SkillProficiency | null;
}

export function SkillChip({ technology, hoveredProficiency }: SkillChipProps) {
  const dimmed = hoveredProficiency !== null && hoveredProficiency !== technology.proficiency;

  return (
    <div
      className={`mt-2.5 mr-0 mb-[15px] ml-2.5 min-w-[145px] rounded-2xl text-center text-black min-[600px]:mt-2.5 min-[600px]:mr-[25px] min-[600px]:mb-[15px] min-[600px]:ml-0 min-[600px]:min-w-[155px] min-[900px]:min-w-[165px] ${PROFICIENCY_COLOR[technology.proficiency]} ${dimmed ? "opacity-20" : "opacity-100"}`}
    >
      <Image
        src={`${S3_BASE_URL}/icons/${technology.image}`}
        alt={`${technology.technology} logo`}
        width={27}
        height={27}
        className="float-left h-[27px] w-[27px] scale-[1.2] rounded-full min-[600px]:scale-150"
      />

      <p className="mt-[3px] text-[0.9rem] font-bold">{technology.technology}</p>
    </div>
  );
}
