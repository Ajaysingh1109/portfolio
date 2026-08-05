import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Shri Ram Institute of Science and Technology",
    location: "Jabalpur, India",
    period: "2022 – 2026",
    icon: "🎓",
    color: "#00d4ff",
    status: "Pursuing",
  },
  {
    degree: "Senior Secondary (CBSE)",
    institution: "Board of Secondary Education",
    location: "India",
    period: "2021 – 2022",
    score: "60%",
    icon: "📚",
    color: "#a855f7",
    status: "Completed",
  },
];

const certifications = [
  {
    title: "Oracle Certified Data Scientist",
    issuer: "Oracle",
    year: "2025",
    icon: "🔵",
    color: "#f59e0b",
  },
  {
    title: "PwC Data Analytics",
    issuer: "PwC (Forage)",
    year: "2025",
    icon: "🔶",
    color: "#00d4ff",
  },
  {
    title: "AI Specialization",
    issuer: "YHills",
    year: "2025",
    icon: "🤖",
    color: "#a855f7",
  },
  {
    title: "Google Analytics",
    issuer: "Google",
    year: "2023",
    icon: "📊",
    color: "#00ff88",
  },
];

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm mb-2" style={{ color: "#00d4ff", fontFamily: "'Fira Code', monospace" }}>
            // 05. education
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white font-bold text-xl mb-6 flex items-center gap-2"
            >
              <span>🎓</span> Education
            </motion.h3>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
                  className="glass-card rounded-2xl p-6"
                  style={{ border: `1px solid ${edu.color}22` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                    >
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <h4 className="text-white font-bold leading-tight">{edu.degree}</h4>
                        <span
                          className="text-xs px-2 py-1 rounded-full flex-shrink-0"
                          style={{
                            background: `${edu.color}15`,
                            border: `1px solid ${edu.color}30`,
                            color: edu.color,
                            fontFamily: "'Fira Code', monospace",
                          }}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <p style={{ color: edu.color, fontSize: "0.85rem", fontFamily: "'Fira Code', monospace" }}>
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-[#64748b]">
                        <span>📍 {edu.location}</span>
                        <span>📅 {edu.period}</span>
                        {edu.score && <span>📈 Score: {edu.score}</span>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white font-bold text-xl mb-6 flex items-center gap-2"
            >
              <span>🏆</span> Certifications
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="cert-badge"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <h4 className="text-white font-bold text-sm leading-snug">{cert.title}</h4>
                      <p
                        className="text-xs mt-1"
                        style={{ color: cert.color, fontFamily: "'Fira Code', monospace" }}
                      >
                        {cert.issuer}
                      </p>
                      <p className="text-[#64748b] text-xs mt-0.5">📅 {cert.year}</p>
                    </div>
                  </div>
                  <div
                    className="mt-3 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Achievement Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-6 glass-card rounded-2xl p-6"
              style={{ border: "1px solid rgba(0,212,255,0.15)" }}
            >
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span>⚡</span> Quick Summary
              </h4>
              <div className="space-y-2 text-sm text-[#94a3b8]">
                {[
                  { icon: "🎯", text: "4 Industry Certifications" },
                  { icon: "🏛️", text: "B.Tech CSE (2022–2026)" },
                  { icon: "📊", text: "Oracle, Google, PwC Certified" },
                  { icon: "🤖", text: "AI Specialization from YHills" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
