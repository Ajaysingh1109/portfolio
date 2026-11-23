import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certifications, education } from "../data";

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-black text-white section-heading mb-16"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-xl mb-6">Education</h3>
            <article className="glass-card rounded-2xl p-6 border border-[#00d4ff22]">
              <h4 className="text-white font-bold text-lg">{education.degree}</h4>
              <p className="text-[#00d4ff] mt-2">{education.institution}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#94a3b8] text-sm mt-3">
                <span>{education.location}</span>
                <span>{education.period}</span>
                <span>CGPA {education.cgpa}</span>
              </div>
            </article>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-xl mb-6">Certifications</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map(({ title, issuer, year }) => (
                <li key={title} className="cert-badge">
                  <h4 className="text-white font-bold text-sm leading-snug">{title}</h4>
                  <p className="text-[#00d4ff] text-sm mt-1">
                    {issuer ? `${issuer} · ${year}` : year}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
