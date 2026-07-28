import { employment } from "@/data";

import { EmploymentTimeline } from "./EmploymentTimeline";

export function EmploymentSection() {
  return (
    <section id="employment" className="mx-auto max-w-300 px-4 py-6 min-[600px]:px-6">
      <div className="mb-2 flex flex-col items-center px-10 min-[900px]:mb-6">
        <h3 className="font-sans text-5xl">Employment</h3>
      </div>

      <EmploymentTimeline positions={employment} />
    </section>
  );
}
