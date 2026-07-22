import Image from "next/image";

import { S3_BASE_URL } from "@/constants";
import type { CredentialDocument, DocumentCategory } from "@/types";

interface DocumentModalResumeReferenceProps {
  category: DocumentCategory;
  documents: CredentialDocument[];
}

export function DocumentModalResumeReference({ category, documents }: DocumentModalResumeReferenceProps) {
  return (
    <>
      {documents.map((document) => (
        // eslint-disable-next-line @next/next/no-img-element -- fluid width:100%, see Phase 6 plan notes
        <img
          key={document.id}
          src={`${S3_BASE_URL}/documents/${category}/${document.image}`}
          alt={document.title}
          className="h-auto w-full border-b border-white"
        />
      ))}

      {category === "resume" && (
        // flex + justify-center (not text-center): next/image renders its <img> as
        // display:block by default, which text-align can't center on its own.
        <div className="flex flex-col items-center px-10 py-6 text-center">
          {/* text.secondary in the old theme is #e0e0e0 (grey) — this project's text-base-content,
              not Tailwind/DaisyUI's own "secondary" (green). See [[feedback-mui-color-prop-bug]]. */}
          <h5 className="mb-4 text-[1.5rem] leading-[1.6rem] text-base-content min-[900px]:text-[1.6rem] min-[900px]:leading-[1.7rem]">
            Download My Résumé
          </h5>

          <a href={`${S3_BASE_URL}/content/resume.pdf`} target="_blank" rel="noopener noreferrer">
            <Image src={`${S3_BASE_URL}/icons/pdf.png`} alt="PDF icon" width={110} height={118} />
          </a>
        </div>
      )}
    </>
  );
}
