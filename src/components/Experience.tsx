import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    role: "Developer – Healthcare Operations",
    company: "Apollo Hospital",
    location: "Jabalpur, India",
    period: "Sep 2026 – Present",
    color: "#00d4ff",
    icon: "🏥",
    points: [
      "Collect and document feedback and complaints from patients, attendants, and hospital staff.",
      "Identify inefficiencies in manual complaint logging and Excel-based data entry workflows.",
      "Initiated a speech-to-text AI application to transcribe patient-staff conversations and reduce repetitive manual documentation.",
      "Designed the workflow to distinguish speaker roles and convert conversations into structured digital complaint records.",
    ],
    tags: [
      "AI Applications",
      "Speech-to-Text",
      "NLP",
      "Data Processing",
      "Microsoft Excel",
    ],
  },
  {
    role: "Artificial Intelligence Program & Project",
    company: "YHills",
    location: "Remote / Online",
    period: "Dec 2024 – Feb 2025",
    color: "#a855f7",
    icon: "🧠",
    points: [
      "Completed an Artificial Intelligence training and project program covering practical machine learning and AI concepts.",
      "Worked on AI and machine learning projects involving data preprocessing, model development, evaluation, and application workflows.",
      "Applied Python-based tools and machine learning techniques to solve practical data-driven problems.",
    ],
    tags: [
      "Python",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Analysis",
      "Model Evaluation",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      className="py-24 relative"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p
            className="text-sm mb-2"
            style={{
              color: "#00d4ff",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            // 03. experience
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Experience
          </h2>

          <p className="mt-4 text-[#94a3b8] max-w-2xl leading-relaxed">
            Practical experience across healthcare operations,
            artificial intelligence, machine learning, and
            data-driven problem solving.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, #00d4ff, #a855f7, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.7,
                  delay: i * 0.2,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center"
                  style={{
                    background: "#050510",
                    borderColor: exp.color,
                    boxShadow: `0 0 15px ${exp.color}`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: exp.color,
                    }}
                  />
                </div>

                {/* Experience Card */}
                <div
                  className="glass-card rounded-2xl p-6 md:p-8"
                  style={{
                    border: `1px solid ${exp.color}22`,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{
                          background: `${exp.color}15`,
                          border: `1px solid ${exp.color}33`,
                        }}
                      >
                        {exp.icon}
                      </div>

                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {exp.role}
                        </h3>

                        <p
                          style={{
                            color: exp.color,
                            fontFamily: "'Fira Code', monospace",
                            fontSize: "0.85rem",
                          }}
                        >
                          {exp.company}
                        </p>

                        <p className="text-[#64748b] text-sm mt-1">
                          📍 {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div
                      className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-mono self-start"
                      style={{
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}33`,
                        color: exp.color,
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      📅 {exp.period}
                    </div>
                  </div>

                  {/* Experience Points */}
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-2 text-sm text-[#94a3b8] leading-relaxed"
                      >
                        <span
                          style={{
                            color: exp.color,
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        >
                          ▸
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-tag"
                        style={{
                          background: `${exp.color}10`,
                          borderColor: `${exp.color}30`,
                          color: exp.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}