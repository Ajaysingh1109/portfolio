import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    icon: "💻",
    title: "Languages",
    color: "#00d4ff",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 70 },
      { name: "JavaScript", level: 72 },
    ],
  },
  {
    icon: "🧪",
    title: "ML / DL",
    color: "#a855f7",
    skills: [
      { name: "TensorFlow / Keras", level: 90 },
      { name: "PyTorch", level: 88 },
      { name: "Scikit-learn", level: 92 },
      { name: "XGBoost / LightGBM", level: 85 },
    ],
  },
  {
    icon: "🤖",
    title: "AI Specialization",
    color: "#00ff88",
    skills: [
      { name: "LLMs (GPT-4, BERT)", level: 88 },
      { name: "RAG / NLP", level: 85 },
      { name: "Computer Vision", level: 87 },
      { name: "Reinforcement Learning", level: 72 },
    ],
  },
  {
    icon: "⚙️",
    title: "MLOps & Cloud",
    color: "#f59e0b",
    skills: [
      { name: "Docker / Kubernetes", level: 82 },
      { name: "AWS / GCP", level: 80 },
      { name: "FastAPI / Flask", level: 88 },
      { name: "MLflow / DVC", level: 78 },
    ],
  },
];

const techStack = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras",
  "XGBoost", "LightGBM", "Hugging Face", "LangChain", "GPT-4",
  "BERT", "YOLO v8", "OpenCV", "FastAPI", "Docker",
  "Kubernetes", "AWS", "GCP", "PostgreSQL", "MongoDB",
  "ChromaDB", "Pinecone", "MLflow", "Airflow", "PySpark",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[#94a3b8]">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm mb-2" style={{ color: "#00d4ff", fontFamily: "'Fira Code', monospace" }}>
            // 02. skills
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.1 }}
              className="glass-card rounded-2xl p-6"
              style={{ border: `1px solid ${cat.color}22` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={si * 0.15}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-center text-[#64748b] text-sm mb-6" style={{ fontFamily: "'Fira Code', monospace" }}>
            // full tech stack
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
                className="tech-tag"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
