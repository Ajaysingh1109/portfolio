import type { CSSProperties, PointerEvent } from "react";
import { skillGroups } from "../data";
import Section from "./Section";

function tilt(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  card.style.setProperty("--tilt-x", ((.5 - (event.clientY - bounds.top) / bounds.height) * 7) + "deg");
  card.style.setProperty("--tilt-y", (((event.clientX - bounds.left) / bounds.width - .5) * 7) + "deg");
}

function reset(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.removeProperty("--tilt-x");
  event.currentTarget.style.removeProperty("--tilt-y");
}

export default function Skills() {
  return (
    <Section id="skills" title="The Six Gems">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article
            key={group.id}
            className="skill-card panel"
            style={{ "--gem": group.color } as CSSProperties}
            tabIndex={0}
            onPointerMove={tilt}
            onPointerLeave={reset}
            data-dust="panel"
            data-dust-step="5"
          >
            <div className="skill-heading"><span className="gem-mark" aria-hidden="true" /><h3>{group.title}</h3></div>
            <p>{group.description}</p>
            <ul className="tags" aria-label={group.title + " tools"}>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
