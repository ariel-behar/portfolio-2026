import { skills } from "@/data";

import { SkillsGallery } from "./SkillsGallery";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-300 scroll-mt-7.5 px-4 min-[600px]:px-6">
      <SkillsGallery skills={skills} />
    </section>
  );
}
