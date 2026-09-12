import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Multi-Agent Research & Operations Assistant",
    year: "2025",
    icon: "🤖",
    color: "#a855f7",
    gradient:
      "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))",

    tags: [
      "Python",
      "LangGraph",
      "LangChain",
      "RAG",
      "ChromaDB",
      "Pinecone",
      "LLMs",
    ],

    stats: [
      { label: "Architecture", value: "Multi-Agent" },
      { label: "Retrieval", value: "RAG" },
      { label: "Tool Use", value: "Web / API / DB" },
      { label: "Memory", value: "Enabled" },
    ],

    description:
      "A production-oriented multi-agent AI assistant designed for research, retrieval, and task execution using RAG, tool calling, and agent orchestration.",

    highlights: [
      "Built multi-agent workflows using LangGraph and LangChain for research and task execution.",
      "Implemented Retrieval-Augmented Generation using vector databases including ChromaDB and Pinecone.",
      "Integrated function calling with web, API, and database tools for task-oriented workflows.",
      "Designed memory, guardrails, and observability components for more reliable AI agent execution.",
    ],
  },

  {
    id: 2,
    title: "Real-Time Multimodal Anomaly Detection System",
    year: "2025",
    icon: "👁️",
    color: "#00ff88",
    gradient:
      "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,255,136,0.03))",

    tags: [
      "Python",
      "YOLO",
      "OpenCV",
      "Computer Vision",
      "Time-Series",
      "LLMs",
    ],

    stats: [
      { label: "Input", value: "Video + Sensor" },
      { label: "Vision", value: "YOLO / OpenCV" },
      { label: "Analysis", value: "Time-Series" },
      { label: "Reasoning", value: "LLM" },
    ],

    description:
      "A multimodal AI system combining video analysis, sensor telemetry, time-series processing, and LLM reasoning for anomaly detection and intelligent alerts.",

    highlights: [
      "Combined video streams and sensor telemetry for multimodal anomaly detection.",
      "Used YOLO and OpenCV for computer vision-based event and object analysis.",
      "Applied time-series analysis to identify abnormal patterns in sensor data.",
      "Used LLM reasoning to generate explanations, severity assessments, and actionable alerts.",
    ],
  },

  {
    id: 3,
    title: "Customer Churn Prediction System",
    year: "2025",
    icon: "📉",
    color: "#00d4ff",
    gradient:
      "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.03))",

    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "SMOTE",
      "Flask",
    ],

    stats: [
      { label: "Records", value: "7,043" },
      { label: "Models", value: "8 Compared" },
      { label: "ROC-AUC", value: "84.15%" },
      { label: "Recall", value: "78.34%" },
    ],

    description:
      "An end-to-end customer churn prediction system involving data preprocessing, feature engineering, model comparison, class balancing, evaluation, and Flask deployment.",

    highlights: [
      "Processed and prepared 7,043 customer records using Pandas with feature engineering and scaling.",
      "Compared 8 machine learning models using Scikit-learn and XGBoost.",
      "Used SMOTE to address class imbalance and evaluated models using multiple performance metrics.",
      "Final model achieved 73.81% Accuracy, 84.15% ROC-AUC, 78.34% Recall, and 61.36% F1-score.",
      "Deployed the trained churn prediction model through a Flask API.",
    ],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 relative"
      ref={ref}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.03) 0%, transparent 60%)",
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
            // 04. projects
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Key AI Projects
          </h2>

          <p className="mt-4 text-[#94a3b8] max-w-2xl leading-relaxed">
            Selected projects covering machine learning, generative AI,
            multi-agent systems, RAG, computer vision, and AI-powered
            decision systems.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer"
              style={{
                border: `1px solid ${project.color}22`,
                background: project.gradient,
              }}
              onClick={() =>
                setActiveProject(
                  activeProject === project.id
                    ? null
                    : project.id
                )
              }
              whileHover={{ scale: 1.01 }}
            >
              {/* Project Header */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}40`,
                      boxShadow: `0 0 20px ${project.color}20`,
                    }}
                  >
                    {project.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <h3 className="text-white font-bold text-xl leading-tight">
                        {project.title}
                      </h3>

                      <span
                        className="text-xs px-3 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: `${project.color}15`,
                          border: `1px solid ${project.color}30`,
                          color: project.color,
                          fontFamily: "'Fira Code', monospace",
                        }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <p className="text-[#94a3b8] text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg p-3 text-center"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border:
                          "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div
                        className="font-black text-lg"
                        style={{
                          color: project.color,
                          fontFamily: "'Fira Code', monospace",
                        }}
                      >
                        {stat.value}
                      </div>

                      <div className="text-[#64748b] text-xs mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-tag"
                      style={{
                        background: `${project.color}10`,
                        borderColor: `${project.color}30`,
                        color: project.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand Indicator */}
                <div className="flex items-center gap-2 mt-5">
                  <motion.span
                    animate={{
                      rotate:
                        activeProject === project.id
                          ? 90
                          : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      color: project.color,
                      display: "inline-block",
                      fontSize: "0.85rem",
                    }}
                  >
                    ▶
                  </motion.span>

                  <span
                    className="text-[#64748b] text-xs"
                    style={{
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    {activeProject === project.id
                      ? "hide details"
                      : "view details"}
                  </span>
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {activeProject === project.id && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 md:px-8 pb-7"
                      style={{
                        borderTop: `1px solid ${project.color}20`,
                      }}
                    >
                      <h4
                        className="text-sm font-mono mt-5 mb-4"
                        style={{
                          color: project.color,
                        }}
                      >
                        // key highlights
                      </h4>

                      <ul className="space-y-3">
                        {project.highlights.map(
                          (highlight, highlightIndex) => (
                            <motion.li
                              key={highlightIndex}
                              initial={{
                                opacity: 0,
                                x: -20,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay:
                                  highlightIndex * 0.08,
                              }}
                              className="flex items-start gap-2 text-sm text-[#94a3b8] leading-relaxed"
                            >
                              <span
                                style={{
                                  color: project.color,
                                  flexShrink: 0,
                                }}
                              >
                                ◆
                              </span>

                              <span>{highlight}</span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}