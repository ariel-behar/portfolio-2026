import { S3_BASE_URL } from "@/constants";
import type { CredentialDocument } from "@/types";

interface DocumentModalCertificateProps {
  documents: CredentialDocument[];
}

export function DocumentModalCertificate({ documents }: DocumentModalCertificateProps) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {documents.map((document, index) => {
        const isFullWidth = index === 0 || index === 1 || index === documents.length - 1;

        return (
          <div
            key={document.id}
            className={`flex flex-col justify-center ${isFullWidth ? "col-span-2" : "col-span-1"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- fluid width:100%, see Phase 6 plan notes */}
            <img src={`${S3_BASE_URL}/documents/certificate/${document.image}`} alt={document.title} className="h-auto w-full" />
          </div>
        );
      })}
    </div>
  );
}
