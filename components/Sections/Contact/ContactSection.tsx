import Image from "next/image";

import { S3_BASE_URL } from "@/constants";

import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

const phoneBlurredStyle = { backgroundImage: `url(${S3_BASE_URL}/backgrounds/phone-blurred.jpg)` };

// Full-bleed root, same as Documents (Phase 10) — Contact sits inside PatternedBackground but
// outside the shared max-w-300 container, per Phase 6 plan notes.
export function ContactSection() {
  return (
    <section id="contact" style={phoneBlurredStyle} className="bg-fixed bg-cover bg-right py-8">
      <div className="mx-auto max-w-300 px-4 min-[600px]:px-6">
        {/* Widths replicate MUI Grid v1's actual gutter formula, not a naive 7:5 split of the
            remaining space after one gap. MUI's negative-margin technique expands the row by the
            full spacing value, gives each item that same spacing as its OWN padding (not half,
            shared), then only the two adjacent paddings visually read as a single gap — so the
            real content-width ratio is more extreme than 7:5. For span N of 12 with gutter G:
            width = (N/12)*(100% + G) - G. Measured against the live old site at 1920px (a plain
            grid-cols-[7fr_5fr] gives 569px/407px; the old site actually renders 599px/377px) —
            confirmed algebraically via this formula to 3 decimal places. G is the old site's
            `spacing` prop per breakpoint (xs=16px, sm=24px, md=80px, lg=176px). */}
        <div className="flex flex-col min-[600px]:flex-row">
          <div className="min-[600px]:w-[calc(58.3333%-10px)] min-[900px]:w-[calc(58.3333%-33.3333px)] min-[1200px]:w-[calc(58.3333%-73.3333px)]">
            {/* pt-6 (not the heading's own mt-6): the heading is the first in-flow child (the
                logo is position:absolute, taken out of flow) of a container with no other
                top padding/border — a margin-top here would collapse straight through to the
                card's own top edge instead of pushing the heading down inside the dark
                background, measured as a real ~24px gap missing against the live old site. */}
            <div className="relative min-h-98 rounded-[20px] bg-black/50 px-4 pt-6 pb-4 min-[900px]:px-6">
              <Image
                src={`${S3_BASE_URL}/logo/logo.png`}
                alt="logo"
                width={75}
                height={75}
                className="absolute -top-2.5 -left-2.5 h-[50px] w-[50px] min-[600px]:-top-5 min-[600px]:-left-5 min-[600px]:h-[75px] min-[600px]:w-[75px]"
              />

              {/* text.secondary in the old theme is #e0e0e0 (grey) — this project's text-base-content,
                  not Tailwind/DaisyUI's own "secondary" (green). See [[feedback-mui-color-prop-bug]]. */}
              <h4 className="mb-6 text-center text-[1.7rem] leading-[1.8rem] text-base-content min-[900px]:text-[1.9rem] min-[900px]:leading-8">
                CONTACT ME
              </h4>

              <ContactForm />
            </div>
          </div>

          <div className="mt-4 min-[600px]:mt-0 min-[600px]:ml-6 min-[600px]:w-[calc(41.6667%-14px)] min-[900px]:ml-20 min-[900px]:w-[calc(41.6667%-46.6667px)] min-[1200px]:ml-44 min-[1200px]:w-[calc(41.6667%-102.6667px)]">
            {/* pt-6/pb-6 (not the heading's own mt-6, or the email line's own mb-6): both are
                the first/last in-flow children of a container with no other top/bottom
                padding, so those margins would collapse straight through to the card's own
                edges instead of staying inside the dark background — see the matching note
                on the left card above. */}
            <div className="rounded-[20px] bg-black/50 px-8 pt-6 pb-6 min-[600px]:px-2 min-[900px]:px-8">
              <h4 className="mb-6 text-center text-[1.7rem] leading-[1.8rem] text-base-content min-[900px]:text-[1.9rem] min-[900px]:leading-8">
                FIND ME ON
              </h4>

              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
