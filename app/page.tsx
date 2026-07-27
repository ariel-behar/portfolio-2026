import { Footer, PatternedBackground, PortfolioShell, SectionDivider } from "@/components/Layout";
import {
  AboutSection,
  BonusSection,
  ContactSection,
  DocumentsSection,
  PhotoshopSection,
  ProjectsSection,
  SkillsSection,
  ThreeJsSection,
  TitleSection,
} from "@/components/Sections";

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
        <ContactSection />
        <BonusSection />
        <Footer />
      </PatternedBackground>
    </PortfolioShell>
  );
}
