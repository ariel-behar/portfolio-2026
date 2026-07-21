import { NAV_LINKS } from "@/constants";
import { PortfolioShell } from "@/components/Layout";
import { TitleSection } from "@/components/Sections";

// Each placeholder section below stands in for a real portfolio section
// (About, Projects, Skills, ...), built one at a time in later phases.
export default function Home() {
  return (
    <PortfolioShell>
      <TitleSection />

      {NAV_LINKS.filter((link) => link.id !== "intro").map((link) => (
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
