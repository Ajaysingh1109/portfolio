import { personal, training } from "../data";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About me" className="about-section">
      <div className="about-grid" data-dust="panel" data-dust-step="4">
        <p className="about-headline">{personal.headline.split(" | ").map((line) => <span key={line}>{line}</span>)}</p>
        <p>I completed a {training.course} focused on {training.focus}. {personal.summary} My healthcare work applies those tools to multilingual patient feedback and operational reporting.</p>
      </div>
    </Section>
  );
}
