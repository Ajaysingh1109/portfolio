import type { FormEvent } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { personal } from "../data";
import Section from "./Section";

function composeEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const subject = encodeURIComponent("Portfolio inquiry from " + name);
  const body = encodeURIComponent(message + "\r\n\r\nFrom: " + name + " (" + email + ")");
  window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <div className="contact-grid">
        <div className="contact-details" data-dust="panel" data-dust-step="10">
          <p>For AI engineering roles, project discussions, or collaboration, reach out directly.</p>
          <address>
            <a href={"mailto:" + personal.email}><LuMail aria-hidden="true" /> {personal.email}</a>
            <a href={"tel:" + personal.phone.replace("-", "")}><LuPhone aria-hidden="true" /> {personal.phone}</a>
            <span><LuMapPin aria-hidden="true" /> {personal.location}</span>
          </address>
          <div className="hero-social">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true" /> LinkedIn</a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
          </div>
        </div>
        <form className="panel contact-form" onSubmit={composeEmail} data-dust="panel" data-dust-step="10">
          <label>Name<input name="name" required autoComplete="name" maxLength={120} /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" maxLength={160} /></label>
          <label className="form-message">Message<textarea name="message" required rows={4} maxLength={1200} /></label>
          <div className="contact-submit">
            <button type="submit" className="btn btn-gold"><LuMail aria-hidden="true" /> Open Email Draft</button>
            <p>Opens your email app.</p>
          </div>
        </form>
      </div>
    </Section>
  );
}
