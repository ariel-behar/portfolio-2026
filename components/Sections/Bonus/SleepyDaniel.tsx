import { S3_BASE_URL } from "@/constants";
import { danielProject } from "@/data";

interface SleepyDanielProps {
  onClose: () => void;
}

const blueBoxStyle = { backgroundColor: "#8ab0da" };

export function SleepyDaniel({ onClose }: SleepyDanielProps) {
  return (
    <div style={blueBoxStyle} className="animate-[fade-in_1s_ease_both] [text-shadow:1px_1px_5px_#245485]">
      <div className="relative mx-auto max-w-300 px-4 min-[600px]:px-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3.75 left-5 cursor-pointer text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-12">
          <div className="text-center min-[900px]:col-span-7 min-[900px]:p-14">
            {/* text.primary in the old theme is #2e2e2e — this project's text-neutral (--color-neutral),
                needed explicitly here since the ambient app text color is light (dark theme default).
                See [[feedback-text-color-light-bg-sections]]. */}
            <h4 className="mt-8 mb-2 text-[1.7rem] leading-[1.8rem] text-neutral min-[900px]:mt-0 min-[900px]:mb-6 min-[900px]:text-[1.9rem] min-[900px]:leading-8">
              {danielProject.title}
            </h4>

            <a href={danielProject.url} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element -- fluid max-height/max-width combo, no next/image equivalent needed here */}
              <img
                src={`${S3_BASE_URL}/projects-slides/${danielProject.image}`}
                alt="Sleepy Daniel"
                className="mx-auto max-h-[370px] max-w-full"
              />
            </a>
          </div>

          <div className="pb-6 min-[900px]:col-span-5">
            <h6 className="mt-4 text-[1.3rem] leading-[1.4rem] text-neutral min-[900px]:text-[1.4rem] min-[900px]:leading-6">
              Project Description:
            </h6>
            {/* text.secondary in the old theme is #e0e0e0 (grey) — this project's text-base-content,
                not Tailwind/DaisyUI's own "secondary" (green). See [[feedback-mui-color-prop-bug]]. */}
            <p className="text-justify text-base-content">{danielProject.description}</p>

            <h6 className="mt-4 text-[1.3rem] leading-[1.4rem] text-neutral min-[900px]:text-[1.4rem] min-[900px]:leading-6">
              My Role in the Project:
            </h6>
            <p className="text-justify text-base-content">{danielProject.myRole}</p>

            <div>
              <h6 className="mt-4 text-[1.3rem] leading-[1.4rem] text-neutral min-[900px]:text-[1.4rem] min-[900px]:leading-6">
                Technologies Used:
              </h6>
              {danielProject.technologies.map((technology) => (
                <p key={technology} className="inline-block text-base-content">
                  &bull;&nbsp;{technology}&nbsp;
                </p>
              ))}
            </div>

            <h6 className="mt-2 text-[1.3rem] leading-[1.4rem] text-neutral min-[900px]:text-[1.4rem] min-[900px]:leading-6">
              Project Launched in:
            </h6>
            <p className="text-base-content">
              {danielProject.month}&nbsp;{danielProject.year}
            </p>

            <h6 className="mt-4 text-[1.3rem] leading-[1.4rem] text-neutral min-[900px]:text-[1.4rem] min-[900px]:leading-6">
              Visit site:&nbsp;
              <a
                href={danielProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content underline"
              >
                {danielProject.title}
              </a>
            </h6>

            {/* Old site's `color='text.muted'` here is a bare/invalid MUI color path (text.muted is
                an object, not a string) — it silently fails to apply, so the line just inherits the
                page's baseline text color (text.primary/#2e2e2e) instead. Confirmed via live
                measurement: computed color is rgb(46,46,46), not text.muted's actual #636c72.
                See [[feedback-mui-color-prop-bug]]. */}
            <p className="text-neutral">(best experienced in Google Chrome)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
