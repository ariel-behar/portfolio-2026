import { S3_BASE_URL } from "@/constants";

interface HumbleBeginningsProps {
  onReveal: () => void;
}

export function HumbleBeginnings({ onReveal }: HumbleBeginningsProps) {
  return (
    <div className="animate-[fade-in_1s_ease_both] py-8">
      <div className="mx-auto flex max-w-300 flex-row items-center justify-center px-4 min-[600px]:px-6">
        {/* eslint-disable-next-line @next/next/no-img-element -- intrinsic size, no next/image equivalent needed here */}
        <img src={`${S3_BASE_URL}/bonus.png`} alt="Bonus" className="hidden min-[900px]:block" />

        {/* min-w-0: flex items default to min-width:auto, so this column's content (the floated
            mobile image + long-word text) could refuse to shrink below its own min-content width
            and push the row wider than the viewport at narrow widths — confirmed via a page-wide
            horizontal-overflow sweep (Phase 14), not visible at any width this project otherwise
            spot-checks (320px/600px only). */}
        <div className="min-w-0 px-4">
          {/* text.secondary in the old theme is #e0e0e0 (grey) — this project's text-base-content,
              not Tailwind/DaisyUI's own "secondary" (green). See [[feedback-mui-color-prop-bug]]. */}
          <h4 className="mb-4 text-center text-[2.2rem] leading-[2.3rem] text-base-content min-[900px]:text-[2.5rem] min-[900px]:leading-[2.6rem]">
            Humble Beginnings
          </h4>

          {/* eslint-disable-next-line @next/next/no-img-element -- fluid float-left wrap, no next/image equivalent needed here */}
          <img
            src={`${S3_BASE_URL}/bonus.png`}
            alt="Bonus"
            className="float-left mr-2.5 h-32.5 min-[900px]:hidden"
          />

          <p className="mb-2 indent-10 text-justify text-base-content">
            When you click on the button below, the first site I ever did will be revealed to you. Not much
            to brag about technically, but it does hold a sentimental value to me since these were the days
            I was making my first baby steps into the HTML/CSS skills world and I wanted to put them in
            action. My nephew had just been born, and this seemed like a no-brainer to who or what my first
            project would be devoted to.
          </p>

          <p className="mb-2 indent-10 text-justify text-base-content">
            I want to use this opportunity to thank you for having looked at my portfolio, and I hope you
            liked what you saw. Feel free to contact me through the methods listed above about anything
            that may come to mind.
          </p>

          <p className="mb-2 indent-10 text-base-content">Best regards,</p>

          <div className="flex flex-row flex-wrap items-center px-6">
            {/* eslint-disable-next-line @next/next/no-img-element -- fluid max-width/50%, no next/image equivalent needed here */}
            <img
              src={`${S3_BASE_URL}/signature.png`}
              alt="Ariel Behar Signature"
              className="max-w-75 min-[600px]:max-w-1/2"
            />

            <div className="ml-auto w-1/2">
              {/* Text color here is measured pure white (#fff), not this project's --color-primary-content
                  (#f2f6ff) — the old Button only overrides backgroundColor via sx, so its text keeps MUI's
                  unthemed stock primary contrastText (#fff), same "stock, not this theme's token" case as
                  the #1976d2 link color noted elsewhere (see MockupCarouselSlide.tsx). */}
              <button
                type="button"
                onClick={onReveal}
                className="mx-auto mt-2.5 block cursor-pointer rounded bg-primary px-[2.4rem] py-4 text-[15px] font-medium text-white uppercase shadow-[0_4px_5px_-2px_rgba(0,0,0,0.2),0_7px_10px_1px_rgba(0,0,0,0.14),0_2px_16px_1px_rgba(0,0,0,0.12)]"
              >
                Reveal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
