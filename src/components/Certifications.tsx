import { LuBadgeCheck } from "react-icons/lu";
import { certifications } from "../data";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="cert-grid">
        {certifications.map(({ title, issuer, year }) => (
          <li className="panel cert-card" key={title} data-dust="panel" data-dust-step="9">
            <div className="credential-icon"><LuBadgeCheck aria-hidden="true" /></div>
            <div>
              <h3>{title}</h3>
              <p>{issuer ? issuer + " · " + year : year}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
