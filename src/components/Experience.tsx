import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../data";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { role, company, department, location, period, work } = experience;

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-black text-white section-heading mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="relative md:pl-16">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block bg-gradient-to-b from-[#00d4ff] to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-[#00d4ff] bg-[#050510] hidden md:block"
          />

          <motion.article
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-[#00d4ff22]"
          >
            <header className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-white font-bold text-lg">{role}</h3>
                <p className="text-[#00d4ff] mt-1">{company} · {department}</p>
                <p className="text-[#94a3b8] text-sm mt-1">{location}</p>
              </div>
              <p className="rounded-full border border-[#00d4ff33] bg-[#00d4ff15] px-4 py-1.5 text-sm font-mono text-[#00d4ff]">
                {period}
              </p>
            </header>

            <h4 className="text-white font-semibold mb-3">{work.title}</h4>
            <ul className="list-disc pl-5 space-y-2 text-[#94a3b8] leading-relaxed">
              {work.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
              {work.links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#00d4ff] underline underline-offset-4"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
