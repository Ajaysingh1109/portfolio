import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data";

const accents = ["#00d4ff", "#a855f7", "#00ff88"];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-black text-white section-heading mb-16"
        >
          Selected Projects
        </motion.h2>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            const color = accents[index % accents.length];
            const isExpanded = activeProject === project.id;
            const detailsId = `${project.id}-details`;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass-card rounded-2xl overflow-hidden"
                style={{
                  borderColor: `${color}33`,
                  background: `linear-gradient(135deg, ${color}0e, rgba(5,5,16,0.35))`,
                }}
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-white font-bold text-xl leading-tight">{project.title}</h3>
                  <p className="text-[#94a3b8] mt-2">{project.description}</p>

                  {project.metrics && (
                    <dl className="flex flex-wrap gap-3 mt-5">
                      {project.metrics.map(({ label, value }) => (
                        <div key={label} className="rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                          <dt className="text-[#94a3b8] text-sm">{label}</dt>
                          <dd className="font-black text-lg font-mono" style={{ color }}>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <ul aria-label="Technologies" className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="tech-tag"
                        style={{ background: `${color}10`, borderColor: `${color}30`, color }}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5">
                    {project.links.map(({ label, href }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline underline-offset-4"
                        style={{ color }}
                      >
                        {label}
                      </a>
                    ))}
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      onClick={() => setActiveProject(isExpanded ? null : project.id)}
                      className="rounded-md px-3 py-2 text-sm text-white border border-white/20 cursor-pointer focus-visible:outline-2"
                    >
                      {isExpanded ? "Hide Details" : "View Details"}
                    </button>
                  </div>

                  {project.deploymentNote && (
                    <p className="mt-3 text-sm text-[#94a3b8]">{project.deploymentNote}</p>
                  )}
                </div>

                <div id={detailsId} hidden={!isExpanded} className="border-t border-white/10 px-6 md:px-8 py-5">
                  <ul className="list-disc pl-5 space-y-2 text-[#94a3b8] leading-relaxed">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
