import { employment } from "@/data";

import { EmploymentGallery } from "./EmploymentGallery";

export function EmploymentSection() {
  const positions = [...employment].sort((a, b) => a.order - b.order);

  return (
    <section id="employment" className="mx-auto max-w-300 px-4 py-6 min-[600px]:px-6">
      <div className="mb-2 flex flex-col items-center px-10 min-[900px]:mb-6">
        <h3 className="font-sans text-5xl">Professional Journey</h3>
      </div>

      <EmploymentGallery positions={positions} />
    </section>
  );
}
