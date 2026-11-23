import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuDownload, LuMapPin } from "react-icons/lu";
import { personal, training } from "../data";

const roles = personal.headline.split(" | ");

export default function Hero() {
  const [role, setRole] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const interval = window.setInterval(() => setRole((value) => (value + 1) % roles.length), 2600);
    return () => window.clearInterval(interval);
  }, [reduced]);

  return (
    <section id="home" className="hero">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-inner shell">
        <div className="hero-copy">
          <p className="location-label"><LuMapPin aria-hidden="true" /> {personal.location}</p>
          <h1 className="hero-title" aria-label="I AM AJAY" tabIndex={-1} data-focus="hero">
            <span data-dust="text" data-dust-step="1">I AM</span>
            <span className="hero-name" data-dust="text" data-dust-step="1">AJAY</span>
          </h1>
          <div className="hero-role" data-dust="text" data-dust-step="1">
            <span className="sr-only">{personal.headline}</span>
            <span className="role-cycle" aria-hidden="true">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={reduced ? "headline" : role}
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: reduced ? 0 : .22 }}
                >
                  {reduced ? personal.headline : roles[role]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
          <p className="hero-summary">Completed a {training.course} focused on {training.focus}. {personal.summary.split(". ")[0]}.</p>
          <div className="hero-actions" data-dust="panel" data-dust-step="3">
            <a className="btn btn-gold" href={personal.resumePath} download="Ajay-Singh-Resume.pdf"><LuDownload aria-hidden="true" /> Download Resume</a>
            <a className="btn btn-outline" href="#projects">View Projects</a>
            <a className="btn btn-link" href="#contact">Contact Me</a>
          </div>
          <div className="hero-social">
            <a href={personal.github} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>

        <figure className="portrait" data-dust="portrait" data-dust-step="2">
          <div className="portrait-orbit" aria-hidden="true" />
          <div className="portrait-bezel">
            <img src={personal.portraitPath} alt={personal.name} width="250" height="330" fetchPriority="high" decoding="async" />
          </div>
          <figcaption>{personal.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}
