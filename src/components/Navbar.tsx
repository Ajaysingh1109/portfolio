import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import Brand from "./Brand";
import { personal } from "../data";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Experience", "#experience"], ["Education", "#education"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <header className="site-header">
      <div className="nav-inner shell" data-dust="panel" data-dust-step="0">
        <a className="nav-brand" href="#home" aria-label={personal.brand + " home"} onClick={() => setExpanded(false)}>
          <Brand />
        </a>
        <button
          type="button"
          className="nav-toggle"
          ref={toggle}
          aria-label={expanded ? "Close navigation" : "Open navigation"}
          aria-expanded={expanded}
          aria-controls="portfolio-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <LuX /> : <LuMenu />}
        </button>
        <nav
          className="nav-links"
          id="portfolio-nav"
          data-expanded={expanded}
          aria-label="Portfolio"
          onKeyDown={(event) => {
            if (event.key === "Escape" && expanded) {
              setExpanded(false);
              toggle.current?.focus();
            }
          }}
        >
          {links.map(([label, hash]) => (
            <a key={hash} href={hash} onClick={() => setExpanded(false)}>{label}</a>
          ))}
        </nav>
        <a className="nav-resume" href={personal.resumePath} download="Ajay-Singh-Resume.pdf">Résumé</a>
      </div>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    </header>
  );
}
