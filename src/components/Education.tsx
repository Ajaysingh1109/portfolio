import { LuBookOpen, LuBrainCircuit } from "react-icons/lu";
import { education, training } from "../data";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="education-list">
        <article className="panel education-card" data-dust="panel" data-dust-step="8">
          <div className="credential-icon"><LuBrainCircuit aria-hidden="true" /></div>
          <div><h3>{training.course}</h3><p>{training.focus}</p></div>
        </article>
        <article className="panel education-card" data-dust="panel" data-dust-step="8">
          <div className="credential-icon"><LuBookOpen aria-hidden="true" /></div>
          <div>
            <h3>{education.program}</h3>
            <p>{education.institution} · {education.location}</p>
          </div>
          <div className="education-meta">
            <p className="date-chip">{education.period}</p>
            <p>CGPA {education.cgpa}</p>
          </div>
        </article>
      </div>
    </Section>
  );
}
