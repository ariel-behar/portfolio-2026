export interface NavLink {
  id: string;
  label: string;
}

// Section ids are semantic (unlike the old site's first-section/second-section/... scheme);
// labels are kept identical to the old nav copy.
export const NAV_LINKS: NavLink[] = [
  { id: "intro", label: "INTRO" },
  { id: "about", label: "ABOUT" },
  { id: "employment", label: "EMPLOYMENT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "documents", label: "RESUME" },
  { id: "contact", label: "CONTACT" },
  { id: "bonus", label: "BONUS" },
];
