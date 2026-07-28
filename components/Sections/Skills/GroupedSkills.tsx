import type { Skill, SkillProficiency } from "@/types";

import { SkillChip } from "./SkillChip";

interface GroupedSkillsProps {
  skills: Skill[];
  hoveredProficiency: SkillProficiency | null;
}

export function GroupedSkills({ skills, hoveredProficiency }: GroupedSkillsProps) {
  return (
    <>
      {skills.map((skill) => (
        <div key={skill.title} className="mt-2 w-full min-[600px]:mt-3 min-[900px]:mt-[1.6px]">
          <h6 className="text-center text-sm text-base-content min-[600px]:text-left">{skill.title}</h6>

          <div className="flex flex-row flex-wrap justify-start">
            {skill.technologies
              .filter((technology) => technology.displayTechnology)
              .map((technology) => (
                <SkillChip key={technology.technology} technology={technology} hoveredProficiency={hoveredProficiency} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
