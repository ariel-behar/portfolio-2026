import Image from "next/image";

import { S3_BASE_URL } from "@/constants";

export function Logo() {
  return (
    <div className="hero-anim relative my-4 h-[150px] w-[150px] animate-[fade-in_2s_ease_2s_both] md:h-55 md:w-55">
      <Image
        src={`${S3_BASE_URL}/logo/logo-light.png`}
        alt="Ariel Behar Logo"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}
