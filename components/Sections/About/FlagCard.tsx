import Image from "next/image";

import { S3_BASE_URL } from "@/constants";
import type { Language } from "@/types";

interface FlagCardProps {
  language: Language;
}

export function FlagCard({ language }: FlagCardProps) {
  return (
    <div className="flex flex-col items-center">
      <p>{language.language}</p>

      <Image
        src={`${S3_BASE_URL}/flags/${language.image}`}
        alt={language.flag}
        width={64}
        height={64}
        className="w-[45px] min-[900px]:w-16"
      />

      <p className="text-sm">{language.proficiencies}</p>
    </div>
  );
}
