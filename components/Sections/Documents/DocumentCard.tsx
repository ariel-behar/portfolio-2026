import { S3_BASE_URL } from "@/constants";

interface DocumentCardProps {
  title: string;
  image: string;
  alt: string;
  gradientClassName: string;
  tiltClassName: string;
  onClick: () => void;
}

export function DocumentCard({ title, image, alt, gradientClassName, tiltClassName, onClick }: DocumentCardProps) {
  return (
    <div
      className={`flex flex-col items-center rounded-[20px] py-5 [text-shadow:1px_1px_5px_#245485] shadow-[0_6px_6px_-3px_rgba(0,0,0,0.2),0_10px_14px_1px_rgba(0,0,0,0.14),0_4px_18px_3px_rgba(0,0,0,0.12)] ${gradientClassName}`}
    >
      <h4 className="text-[1.9rem] leading-8 text-base-content">{title}</h4>

      {/* eslint-disable-next-line @next/next/no-img-element -- rendered at a fluid 90% width of
          a responsive parent, not a fixed icon box; see Phase 10 plan notes */}
      <img
        src={`${S3_BASE_URL}/${image}`}
        alt={alt}
        onClick={onClick}
        // Below 1200px the image sits flat (identity transform) at all times, both at rest and
        // on hover — measured on the live old site — so the flat shadow is the base/mobile
        // state, and >=1200px only returns to it on hover (tiltClassName supplies the >=1200px
        // rest-state tilt + its own deeper shadow). transition-timing-function is left unset:
        // the browser's initial value for it is already literally "ease", matching the old
        // site's own explicit value, so no ease-* utility is needed.
        className={`mt-5 w-[90%] cursor-pointer shadow-[10px_10px_24px_0_rgba(0,0,0,0.2),-10px_-10px_24px_0_rgba(0,0,0,0.2)] transition-all duration-[1.5s] min-[1200px]:hover:shadow-[10px_10px_24px_0_rgba(0,0,0,0.2),-10px_-10px_24px_0_rgba(0,0,0,0.2)] min-[1200px]:hover:transform-[rotateX(0deg)_rotateY(0deg)_scale(1)] ${tiltClassName}`}
      />
    </div>
  );
}
