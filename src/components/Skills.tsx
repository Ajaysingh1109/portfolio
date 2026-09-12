import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    icon: "💻",
    title: "Programming & Data",
    color: "#00d4ff",
    skills: [
      "Python",
      "SQL",
      "Data Preprocessing",
      "Feature Engineering",
    ],
  },
  {
    icon: "🧠",
    title: "Machine Learning",
    color: "#a855f7",
    skills: [
      "Supervised Learning",
      "Classification",
      "Regression",
      "Predictive Modeling",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },
  {
    icon: "🤖",
    title: "AI & Generative AI",
    color: "#00ff88",
    skills: [
      "Deep Learning",
      "NLP",
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "Computer Vision",
    ],
  },
  {
    icon: "📊",
    title: "Data Science",
    color: "#f59e0b",
    skills: [
      "Data Analysis",
      "EDA",
      "Statistical Analysis",
      "Model Validation",
      "Data Visualization",
      "Power BI",
      "Microsoft Excel",
    ],
  },
  {
    icon: "⚙️",
    title: "Deployment & Engineering",
    color: "#ec4899",
    skills: [
      "REST APIs",
      "Model Deployment",
      "Flask",
      "Docker",
      "Git",
      "CI/CD Fundamentals",
    ],
  },
  {
    icon: "🗄️",
    title: "Databases & Cloud",
    color: "#38bdf8",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Vector Databases",
      "ChromaDB",
      "Pinecone",
      "AWS",
    ],
  },
];

const techStack = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "XGBoost",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "NLP",
  "LLMs",
  "RAG",
  "LangChain",
  "LangGraph",
  "YOLO",
  "OpenCV",
  "Flask",
  "REST APIs",
  "Docker",
  "Git",
  "PostgreSQL",
  "MongoDB",
  "ChromaDB",
  "Pinecone",
  "AWS",
  "Power BI",
  "Microsoft Excel",
];

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-card rounded-2xl p-6"
      style={{
        border: `1px solid ${category.color}22`,
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.icon}</span>

        <h3 className="text-white font-bold text-lg">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg text-sm text-[#cbd5e1]"
            style={{
              background: `${category.color}0d`,
              border: `1px solid ${category.color}20`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      className="py-24 relative"
      ref={ref}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
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
            // 02. skills
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Technical Skills
          </h2>

          <p className="mt-4 text-[#94a3b8] max-w-2xl leading-relaxed">
            A practical AI and Data Science skill set focused on
            machine learning, generative AI, data analysis,
            computer vision, NLP, and deployment.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p
            className="text-center text-[#64748b] text-sm mb-6"
            style={{
              fontFamily: "'Fira Code', monospace",
            }}
          >
            // technologies & tools
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.025,
                }}
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