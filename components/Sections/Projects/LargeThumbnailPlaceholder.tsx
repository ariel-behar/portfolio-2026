import { S3_BASE_URL } from "@/constants";

export function LargeThumbnailPlaceholder() {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- unknown intrinsic size, see Phase 6 plan notes
    <img
      width="100%"
      src={`${S3_BASE_URL}/projects-slides/site-plan.jpg`}
      alt="Site Plan"
      className="w-full"
    />
  );
}
