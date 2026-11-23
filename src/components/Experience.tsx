import { experience } from "../data";
import Section from "./Section";

export default function Experience() {
  const { role, company, department, location, period, work } = experience;
  return (
    <Section id="experience" title="Professional Experience">
      <div className="timeline">
        <article className="panel experience-card" data-dust="panel" data-dust-step="7">
          <header className="experience-heading">
            <div>
              <p className="experience-employer">{company}</p>
              <h3>{role}</h3>
              <p>{department} · {location}</p>
            </div>
            <p className="date-chip">{period}</p>
          </header>
          <h4>{work.title}</h4>
          <ul className="detail-list">
            {work.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <div className="experience-links">
            {work.links.map(({ href, label, description }) => (
              <div key={href}>
                <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
