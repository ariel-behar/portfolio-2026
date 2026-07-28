"use client";

import { useState } from "react";

import type { Skill, SkillProficiency } from "@/types";

import { GroupedSkills } from "./GroupedSkills";
import { ProficiencyTitle } from "./ProficiencyTitle";

const PROFICIENCY_TITLES: { title: string; proficiency: SkillProficiency }[] = [
  { title: "PROFICIENT", proficiency: 1 },
  { title: "COMPETENT", proficiency: 2 },
  { title: "NOVICE", proficiency: 3 },
];

interface SkillsGalleryProps {
  skills: Skill[];
}

export function SkillsGallery({ skills }: SkillsGalleryProps) {
  const [hoveredProficiency, setHoveredProficiency] = useState<SkillProficiency | null>(null);

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-4 pb-0 min-[600px]:flex-row min-[600px]:justify-between min-[900px]:px-10 min-[900px]:pt-6 min-[900px]:pb-2">
        <h3 className="mb-4 text-center font-sans text-5xl leading-[3.1rem] text-base-content">My Abilities</h3>

        <div className="flex flex-row items-center justify-around">
          <div className="hidden flex-col items-center justify-center pr-4 min-[1200px]:flex">
            <p className="text-sm text-muted-light">HOVER</p>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hero-anim mt-[5px] mb-2.5 h-6 w-6 animate-[point-right_1.5s_ease-in-out_infinite] text-muted-light"
            >
              <path d="m9 6 6 6-6 6" />
            </svg>
          </div>

          {PROFICIENCY_TITLES.map(({ title, proficiency }) => (
            <ProficiencyTitle
              key={proficiency}
              title={title}
              proficiency={proficiency}
              hoveredProficiency={hoveredProficiency}
              onHover={setHoveredProficiency}
            />
          ))}
        </div>
      </div>

      <div>
        <GroupedSkills skills={skills} hoveredProficiency={hoveredProficiency} />

        <p className="mt-2 text-center text-base text-muted">
          *In constant learning of new skills and improvement on already existing ones
        </p>
      </div>
    </>
  );
}
