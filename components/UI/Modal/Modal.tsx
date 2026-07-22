"use client";

import { useEffect, useRef } from "react";

import { S3_BASE_URL } from "@/constants";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const darkPatternStyle = { backgroundImage: `url(${S3_BASE_URL}/dark-pattern.jpg)` };

export function Modal({ open, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // The old MUI Dialog (scroll='body') locks the page's own scroll and scrolls a single
  // viewport-filling container instead — confirmed on the live site: `body { overflow: hidden }`
  // while open, and wheel input over the modal doesn't move the page behind it at all. A native
  // <dialog> alone doesn't lock background scroll (confirmed the same way, without this it
  // scrolled), so it's set explicitly here to match.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/50"
    >
      {/* This div is the single scroll container (dialog itself never scrolls, and the paper
          below never gets its own max-height/overflow either) — matching the old site's DOM,
          where only one element (MuiDialog-container) actually scrolls, sized to the viewport,
          so its scrollbar renders flush with the window edge instead of nested inside a box. */}
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="h-full w-full overflow-y-auto"
      >
        <div className="mx-auto my-8 max-w-225 animate-[slide-up_0.3s_ease] rounded bg-white">
          {/* text.secondary in the old theme is #e0e0e0 (grey, this project's --color-base-content),
              not Tailwind/DaisyUI's own "secondary" (green). See [[feedback-mui-color-prop-bug]]. */}
          <div
            style={darkPatternStyle}
            className="relative border-b border-white bg-repeat px-6 py-4 text-center text-base-content"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-muted hover:text-muted-light"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {title && <h5 className="text-[1.6rem]">{title}</h5>}
          </div>

          <div style={darkPatternStyle} className="bg-repeat">
            {children}
          </div>

          <div style={darkPatternStyle} className="flex justify-end border-t border-white bg-repeat p-5">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded bg-primary px-[22px] py-2 text-[15px] font-medium text-primary-content uppercase"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
