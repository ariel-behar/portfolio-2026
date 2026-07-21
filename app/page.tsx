import {
  danielProject,
  documents,
  languages,
  mockupProjects,
  projects,
  skills,
  threeJsProjects,
} from "@/data";

const dataCounts = [
  { label: "projects", count: projects.length },
  { label: "mockup projects", count: mockupProjects.length },
  { label: "three.js projects", count: threeJsProjects.length },
  { label: "skill groups", count: skills.length },
  { label: "languages", count: languages.length },
  {
    label: "documents",
    count: documents.resume.length + documents.reference.length + documents.certificate.length,
  },
  { label: "bonus project", count: danielProject ? 1 : 0 },
];

const swatches = [
  { name: "primary", className: "bg-primary text-primary-content" },
  { name: "secondary", className: "bg-secondary text-secondary-content" },
  { name: "accent", className: "bg-accent text-accent-content" },
  { name: "neutral", className: "bg-neutral text-neutral-content" },
  {
    name: "base-100",
    className: "bg-base-100 text-base-content border border-base-300",
  },
  { name: "base-200", className: "bg-base-200 text-base-content" },
  { name: "base-300", className: "bg-base-300 text-base-content" },
  { name: "info", className: "bg-info text-info-content" },
  { name: "success", className: "bg-success text-success-content" },
  { name: "warning", className: "bg-warning text-warning-content" },
  { name: "error", className: "bg-error text-error-content" },
  { name: "muted", className: "bg-muted text-base-100" },
  { name: "muted-light", className: "bg-muted-light text-base-100" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center gap-12 px-6 py-16">
      <div className="space-y-2 text-center">
        <h1 className="font-display text-5xl md:text-6xl">ARIEL BEHAR</h1>
        <p className="text-lg text-base-content/80">
          Design &amp; Development Done Differently
        </p>
        <p className="font-mesh text-2xl text-secondary">I ♥ THREE JS</p>
      </div>

      <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
        {swatches.map((swatch) => (
          <div
            key={swatch.name}
            className={`rounded-box p-4 text-center text-sm font-medium ${swatch.className}`}
          >
            {swatch.name}
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-2xl flex-wrap justify-center gap-3">
        {dataCounts.map((item) => (
          <div key={item.label} className="rounded-box bg-base-200 px-4 py-2 text-sm">
            <span className="font-semibold text-secondary">{item.count}</span> {item.label}
          </div>
        ))}
      </div>
    </main>
  );
}
