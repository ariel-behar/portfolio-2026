import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  hideTitle?: boolean;
}

export function ProjectCard({ project, hideTitle }: ProjectCardProps) {
  return (
    <div className="hero-anim flex flex-col py-2 animate-[fade-in_0.3s_ease_both]">
      {!hideTitle && <h5 className="mb-2 text-center text-2xl">{project.title}</h5>}

      <h6 className="mt-2 text-xl">Project Description:</h6>
      <p className="text-justify text-secondary">{project.description}</p>

      {project.category === "real" &&
        project.notes.map((note) => (
          <p key={note.note} className="text-muted">
            *{note.note}
          </p>
        ))}

      <h6 className="mt-2 text-xl">My Role in the Project:</h6>
      <p className="text-justify text-secondary">{project.myRole}</p>

      <div>
        <h6 className="mt-2 text-xl">Technologies Used:</h6>
        {project.technologies.map((technology) => (
          <p key={technology} className="inline-block text-secondary">
            &bull;&nbsp;{technology}&nbsp;
          </p>
        ))}
      </div>

      <h6 className="mt-2 text-xl">Project Launch:</h6>
      <p className="text-secondary">
        {project.month} {project.year}
      </p>

      <h6 className="mt-2 text-xl">
        Visit site:&nbsp;
        {/* #1976d2 is MUI's stock default Link/primary blue — the old theme never overrode
            palette.primary, so this is deliberately not this project's --color-primary (#0d47a1). */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1976d2] underline decoration-1 underline-offset-2"
        >
          {project.title}
        </a>
      </h6>

      {project.category === "mockup" &&
        project.notes.map((note) => (
          <p key={note.note} className="mt-1 text-muted">
            *{note.note}&nbsp;
            {note.hasLink && (
              <a
                href={note.hasLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1976d2] underline decoration-1 underline-offset-2"
              >
                here
              </a>
            )}
          </p>
        ))}
    </div>
  );
}
