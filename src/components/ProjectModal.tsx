import { useEffect, useRef } from "react";
import { LuX } from "react-icons/lu";
import type { Project } from "../data";

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.links.map(({ label, href }) => (
        <a className="text-link" key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      ))}
    </div>
  );
}

export function ProjectMetrics({ project }: { project: Project }) {
  if (!project.metrics) return null;
  return (
    <dl className="metrics">
      {project.metrics.map(({ label, value }) => (
        <div className="metric" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ProjectModal({ project, onDismiss }: { project: Project; onDismiss: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (element && !element.open) element.showModal();
    closeButton.current?.focus();
  }, []);

  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onDismiss}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}
    >
      <div className="dialog-inner">
        <button
          type="button"
          className="dialog-close"
          ref={closeButton}
          aria-label="Close project details"
          onClick={() => dialog.current?.close()}
        >
          <LuX aria-hidden="true" />
        </button>
        <p className="dialog-type">{project.description}</p>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p>{project.problem}</p>
        <h3>Architecture</h3>
        <p>{project.architecture}</p>
        <h3>Implementation</h3>
        <ul className="detail-list">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        {project.metrics && <h3>Documented results</h3>}
        <ProjectMetrics project={project} />
        <h3>Technologies</h3>
        <ul className="tags" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <ProjectLinks project={project} />
        {project.deploymentNote && <p className="deployment-note">{project.deploymentNote}</p>}
      </div>
    </dialog>
  );
}
