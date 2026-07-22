import { S3_BASE_URL } from "@/constants";

interface PatternedBackgroundProps {
  children: React.ReactNode;
}

export function PatternedBackground({ children }: PatternedBackgroundProps) {
  return (
    <div
      style={{ backgroundImage: `url(${S3_BASE_URL}/dark-pattern.jpg)` }}
      className="relative bg-repeat"
    >
      {children}
    </div>
  );
}

// Divider between sections nested in PatternedBackground. Each section constrains its
// own width via an inner (mx-auto max-w-300 px-4 min-[600px]:px-6) wrapper — since
// PatternedBackground itself is full-bleed, an <hr/> placed directly between two
// sections would span the full viewport instead of lining up with their content edges.
// The wrapping div (not the hr itself) needs the padding: a padded block's border
// still spans its full border-box edge to edge, so padding on the hr wouldn't inset
// the visible line — nesting it inside the same padded box the sections use does.
export function SectionDivider() {
  return (
    <div className="mx-auto max-w-300 px-4 min-[600px]:px-6">
      <hr />
    </div>
  );
}
