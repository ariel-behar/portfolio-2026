import { Footer, PatternedBackground, PortfolioShell, SectionDivider } from "@/components/Layout";
import {
  AboutSection,
  BonusSection,
  ContactSection,
  DocumentsSection,
  EmploymentSection,
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
        <EmploymentSection />
        <SectionDivider />

        <div className="py-3" />

        <DocumentsSection />
        <ContactSection />
        <BonusSection />
        <Footer />
      </PatternedBackground>
    </PortfolioShell>
  );
}
