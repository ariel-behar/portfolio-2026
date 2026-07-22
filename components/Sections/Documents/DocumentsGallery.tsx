"use client";

import { useState } from "react";

import { Modal } from "@/components/UI";
import type { CredentialDocumentsByCategory, DocumentCategory } from "@/types";

import { DocumentCard } from "./DocumentCard";
import { DocumentModalCertificate } from "./DocumentModalCertificate";
import { DocumentModalResumeReference } from "./DocumentModalResumeReference";

interface DocumentCardConfig {
  category: DocumentCategory;
  title: string;
  image: string;
  // Gradient stops taken verbatim from the old site's styled-components (literal CSS values,
  // not MUI theme dot-paths) — no color-mapping ambiguity here, unlike text.secondary below.
  gradientClassName: string;
  // >=1200px rest-state 3D tilt; below 1200px every card sits flat (see DocumentCard).
  tiltClassName: string;
}

const DOCUMENT_CARDS: DocumentCardConfig[] = [
  {
    category: "resume",
    title: "Résumé",
    image: "documents/resume/resume.jpg",
    gradientClassName: "bg-[linear-gradient(45deg,#87db87_0%,#5cb85c_100%)]",
    tiltClassName: "min-[1200px]:transform-[rotateX(15deg)_rotateY(15deg)_scale(0.8)]",
  },
  {
    category: "reference",
    title: "References",
    image: "documents/reference/recommendation-letter-visual-edge.jpg",
    gradientClassName: "bg-[linear-gradient(-45deg,#94cafa_0%,#4096ee_100%)]",
    tiltClassName: "min-[1200px]:transform-[scale(0.73)]",
  },
  {
    category: "certificate",
    title: "Certificates",
    image: "documents/certificate/softuni-react.jpg",
    gradientClassName: "bg-[linear-gradient(-45deg,#fbca85_0%,#f0ad4e_100%)]",
    tiltClassName: "min-[1200px]:transform-[rotateX(15deg)_rotateY(-15deg)_scale(0.8)]",
  },
];

interface DocumentsGalleryProps {
  documents: CredentialDocumentsByCategory;
}

export function DocumentsGallery({ documents }: DocumentsGalleryProps) {
  const [openCategory, setOpenCategory] = useState<DocumentCategory | null>(null);
  const openCard = DOCUMENT_CARDS.find((card) => card.category === openCategory);

  return (
    <>
      <Modal open={!!openCategory} onClose={() => setOpenCategory(null)} title={openCard?.title}>
        {openCategory === "certificate" ? (
          <DocumentModalCertificate documents={documents.certificate} />
        ) : (
          openCategory && <DocumentModalResumeReference category={openCategory} documents={documents[openCategory]} />
        )}
      </Modal>

      {/* Grid's own px={{xs:3}} in the old markup adds 24px on top of the shared max-w-300
          container's own gutter (16/24px) — this wrapper carries just that extra 24px. */}
      <div className="px-6">
        <div className="grid grid-cols-1 gap-4 min-[600px]:grid-cols-3">
          {DOCUMENT_CARDS.map((card) => (
            <DocumentCard
              key={card.category}
              title={card.title}
              image={card.image}
              alt={card.title}
              gradientClassName={card.gradientClassName}
              tiltClassName={card.tiltClassName}
              onClick={() => setOpenCategory(card.category)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
