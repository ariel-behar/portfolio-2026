import { NAV_LINKS } from "@/constants";
import { PatternedBackground, PortfolioShell, SectionDivider } from "@/components/Layout";
import { AboutSection, PhotoshopSection, ProjectsSection, ThreeJsSection, TitleSection } from "@/components/Sections";

const BUILT_SECTION_IDS = ["intro", "about", "projects"];

// Each placeholder section below stands in for a real portfolio section
// (Skills, ...), built one at a time in later phases.
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
