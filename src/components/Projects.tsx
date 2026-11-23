import { useRef, useState } from "react";
import { projects, type Project } from "../data";
import Section from "./Section";
import ProjectModal, { ProjectLinks, ProjectMetrics } from "./ProjectModal";

function ProjectVisual({ project }: { project: Project }) {
  const type = project.id;
  return (
    <div className={"project-visual " + type} aria-hidden="true">
      <svg viewBox="0 0 300 134" fill="none">
        {type === "saarthi-one-v2" && (
          <g>
            <circle cx="150" cy="67" r="47" stroke="currentColor" strokeOpacity=".55" />
            <circle cx="150" cy="67" r="33" stroke="currentColor" strokeDasharray="2 4" />
            <ellipse cx="150" cy="67" rx="105" ry="22" transform="rotate(-15 150 67)" stroke="currentColor" opacity=".6" />
            <ellipse cx="150" cy="67" rx="92" ry="28" transform="rotate(18 150 67)" stroke="currentColor" opacity=".37" />
            <path d="M150 45 156 61 172 67 156 73 150 89 144 73 128 67 144 61Z" fill="currentColor" />
            <circle cx="98" cy="86" r="4" fill="currentColor" /><circle cx="226" cy="41" r="3" fill="currentColor" />
          </g>
        )}
        {type === "saarthi-opsmind" && (
          <g>
            <path d="M65 69H118Q132 69 132 53V38h48m-48 12v40q0 12 15 12h34m-29-33h83" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
            <g stroke="currentColor" strokeWidth="1.3" fill="#151522">
              <rect x="45" y="57" width="29" height="24" rx="6" /><rect x="119" y="56" width="31" height="27" rx="7" />
              <rect x="178" y="27" width="36" height="23" rx="6" /><rect x="178" y="91" width="36" height="23" rx="6" />
              <rect x="225" y="57" width="30" height="24" rx="6" />
            </g>
            <g fill="currentColor"><circle cx="59" cy="69" r="3" /><circle cx="135" cy="69" r="4" /><circle cx="195" cy="38" r="3" /><circle cx="249" cy="69" r="2" /><circle cx="195" cy="102" r="3" /></g>
          </g>
        )}
        {type === "customer-churn-prediction" && (
          <g>
            <path d="M63 27v79h180M63 50h180M63 78h180" stroke="currentColor" opacity=".32" />
            <path d="M81 100H99V81H81ZM111 100H129V72H111ZM141 100H159V63H141ZM171 100H189V43H171ZM201 100H219V33H201Z" fill="currentColor" opacity=".2" />
            <path d="m81 89 38-16 34 1 26-20 39-16 21-12" stroke="currentColor" strokeWidth="2" />
            <circle cx="239" cy="26" r="4" fill="currentColor" />
          </g>
        )}
      </svg>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  return (
    <Section id="projects" title="Selected Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card panel" data-dust="panel" data-dust-step="6">
            <ProjectVisual project={project} />
            <div className="project-content">
              <p className="project-type">{project.description}</p>
              <h3>{project.title}</h3>
              <p>{project.problem}</p>
              <ProjectMetrics project={project} />
              <ul className="tags" aria-label="Technologies">
                {project.technologies.slice(0, 4).map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <div className="project-actions">
                <button
                  type="button"
                  className="btn btn-outline"
                  aria-haspopup="dialog"
                  aria-label={"View details for " + project.title}
                  onClick={(event) => {
                    trigger.current = event.currentTarget;
                    setSelected(project);
                  }}
                >
                  View Details
                </button>
                <ProjectLinks project={project} />
                {project.deploymentNote && <p className="deployment-note">{project.deploymentNote}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <ProjectModal
          project={selected}
          onDismiss={() => {
            setSelected(null);
            trigger.current?.focus({ preventScroll: true });
          }}
        />
      )}
    </Section>
  );
}
