import { S3_BASE_URL } from "@/constants";

export function PsdPoster() {
  return (
    <div className="text-center">
      <img src={`${S3_BASE_URL}/icons/psd-to-html5.png`} alt="PSD TO HTML Poster" className="mx-auto w-full" />
    </div>
  );
}
