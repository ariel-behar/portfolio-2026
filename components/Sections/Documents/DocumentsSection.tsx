import { S3_BASE_URL } from "@/constants";
import { documents } from "@/data";

import { DocumentsGallery } from "./DocumentsGallery";

const chalkboardStyle = { backgroundImage: `url(${S3_BASE_URL}/backgrounds/chalkboard.jpg)` };

// Unlike Projects/ThreeJs/Photoshop/Skills, this section's own background/borders span the
// full unconstrained width PatternedBackground provides (measured on the live old site: the
// chalkboard background and top/bottom borders reach the viewport edge, only the heading/grid
// inside sit in a centered max-w-300 column) — see Phase 6 plan notes on Phase 10+ sections.
export function DocumentsSection() {
  return (
    <section
      id="documents"
      style={chalkboardStyle}
      className="border-t-[3px] border-b-[3px] border-neutral bg-[#b6d5f6] bg-cover bg-center bg-no-repeat pb-10"
    >
      <div className="mx-auto max-w-300 px-4 min-[600px]:px-6">
        {/* text.secondary in the old theme is #e0e0e0 (grey) — this project's text-base-content,
            not Tailwind/DaisyUI's own "secondary" (green). See [[feedback-mui-color-prop-bug]]. */}
        <h3 className="my-6 text-center text-[2.2rem] leading-[2.3rem] text-base-content min-[900px]:text-[2.5rem] min-[900px]:leading-[2.6rem]">
          Some Reading Material
        </h3>

        <DocumentsGallery documents={documents} />
      </div>
    </section>
  );
}
