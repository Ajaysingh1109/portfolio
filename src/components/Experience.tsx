import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    role: "Artificial Intelligence Engineer Trainee",
    company: "AI Development Program",
    location: "Jabalpur, India",
    period: "Jan 2025 – Apr 2025",
    color: "#00d4ff",
    icon: "🧠",
    points: [
      "Developed end-to-end ML pipelines achieving 20% performance improvement through feature engineering and hyperparameter tuning on 25K+ records",
      "Built production-ready models using XGBoost and ensemble methods with rigorous evaluation (Precision, Recall, F1, ROC-AUC)",
      "Deployed containerized ML services using Docker and FastAPI, reducing deployment time by 40%",
    ],
    tags: ["Python", "XGBoost", "Docker", "FastAPI", "Feature Engineering"],
  },
  {
    role: "Data Analytics Virtual Intern",
    company: "Tata Group (Forage)",
    location: "Remote",
    period: "Feb 2025 – Mar 2025",
    color: "#a855f7",
    icon: "📊",
    points: [
      "Created interactive dashboards improving decision efficiency by 25% using Tableau and Power BI",
      "Generated actionable insights from complex datasets, increasing reporting clarity by 30%",
    ],
    tags: ["Tableau", "Power BI", "Data Analytics", "Dashboard", "Reporting"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm mb-2" style={{ color: "#00d4ff", fontFamily: "'Fira Code', monospace" }}>
            // 03. experience
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: "linear-gradient(180deg, #00d4ff, #a855f7, transparent)" }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
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
                    style={{ background: exp.color }}
                  />
                </div>

                <div
                  className="glass-card rounded-2xl p-6 md:p-8"
                  style={{ borderColor: `${exp.color}22`, border: `1px solid ${exp.color}22` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}33` }}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                        <p style={{ color: exp.color, fontFamily: "'Fira Code', monospace", fontSize: "0.85rem" }}>
                          {exp.company}
                        </p>
                        <p className="text-[#64748b] text-sm">📍 {exp.location}</p>
                      </div>
                    </div>
                    <div
                      className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-mono"
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

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: "2px" }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

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
