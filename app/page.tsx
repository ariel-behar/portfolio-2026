import { NAV_LINKS } from "@/constants";
import { PatternedBackground, PortfolioShell, SectionDivider } from "@/components/Layout";
import {
  AboutSection,
  DocumentsSection,
  PhotoshopSection,
  ProjectsSection,
  SkillsSection,
  ThreeJsSection,
  TitleSection,
} from "@/components/Sections";

const BUILT_SECTION_IDS = ["intro", "about", "projects", "skills", "documents"];

// Each placeholder section below stands in for a real portfolio section
// (Documents, ...), built one at a time in later phases.
export default function Home() {
  return (
    <PortfolioShell>
      <TitleSection />
      <AboutSection />

      <PatternedBackground>
        <ProjectsSection />
        <SectionDivider />
        <ThreeJsSection />
        <SectionDivider />
        <PhotoshopSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />

        {/* Old MainView.tsx closes its Container with `<hr /><Box py={3} />` right after
            Skills — an empty 24px-top/24px-bottom spacer before Documents (outside the
            Container, full-width) picks up. Kept as its own element here since it isn't
            part of any section, matching where the old markup placed it. */}
        <div className="py-6" />

        <DocumentsSection />
      </PatternedBackground>

      {NAV_LINKS.filter((link) => !BUILT_SECTION_IDS.includes(link.id)).map((link) => (
        <section
          key={link.id}
          id={link.id}
          className="flex min-h-screen w-full items-center justify-center bg-base-200 odd:bg-base-300"
        >
          <p className="font-display text-3xl">{link.label}</p>
        </section>
      ))}
    </PortfolioShell>
  );
}
