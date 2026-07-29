"use client";

import { useState } from "react";

import { Modal } from "@/components/UI";
import type { EmploymentPosition } from "@/types";

import { EmploymentDetails } from "./EmploymentDetails";
import { EmploymentTile } from "./EmploymentTile";

// Flip to true to reopen the per-company modal on tile click; false links each tile
// straight to the company's site instead. Single switch, kept off rather than ripping
// out the modal wiring, since it's likely to come back later.
const EMPLOYMENT_MODAL_ENABLED = false;

interface EmploymentGalleryProps {
  positions: EmploymentPosition[];
}

export function EmploymentGallery({ positions }: EmploymentGalleryProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const openPosition = positions.find((position) => position.id === openId);

  return (
    <>
      {EMPLOYMENT_MODAL_ENABLED && (
        <Modal open={!!openPosition} onClose={() => setOpenId(null)} title={openPosition?.company}>
          {openPosition && <EmploymentDetails position={openPosition} />}
        </Modal>
      )}

      <div className="grid grid-cols-2 justify-items-center gap-y-6 py-4 min-[600px]:grid-cols-4 min-[900px]:grid-cols-7">
        {positions.map((position) =>
          EMPLOYMENT_MODAL_ENABLED ? (
            <EmploymentTile key={position.id} position={position} onClick={() => setOpenId(position.id)} />
          ) : (
            <EmploymentTile key={position.id} position={position} href={position.companyUrl} />
          ),
        )}
      </div>
    </>
  );
}
