import type { SkillProficiency } from "@/types";

// custom.chip.{green,yellow,blue} in the old theme (#419745/#fdeb50/#2f85db) match this
// project's success/accent/info tokens hex-for-hex (see app/globals.css) — confirmed by
// comparing values, not by name, per the standing MUI-color-mapping lesson.
export const PROFICIENCY_COLOR: Record<SkillProficiency, string> = {
  1: "bg-success",
  2: "bg-accent",
  3: "bg-info",
};
