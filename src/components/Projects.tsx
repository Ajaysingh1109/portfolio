import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "End-to-End Customer Churn Prediction System",
    year: "2025",
    icon: "📉",
    color: "#00d4ff",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.03))",
    tags: ["Python", "XGBoost", "FastAPI", "Docker", "AWS"],
    stats: [
      { label: "Accuracy", value: "91%" },
      { label: "ROC-AUC", value: "0.89" },
      { label: "Churn Reduced", value: "18%" },
      { label: "Req/min", value: "500+" },
    ],
    description:
      "Engineered production system processing 100K+ records with 40+ features achieving 91% accuracy, 0.89 ROC-AUC. Reduced churn by 18% through ML-driven risk segmentation.",
    highlights: [
      "Engineered production system processing 100K+ records with 40+ features",
      "91% accuracy, 0.89 ROC-AUC using XGBoost ensemble methods",
      "Reduced churn by 18% through ML-driven risk segmentation",
      "Deployed scalable API on AWS EC2 handling 500+ req/min",
    ],
  },
  {
    id: 2,
    title: "LLM-Powered RAG Research Assistant",
    year: "2025",
    icon: "🔬",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))",
    tags: ["OpenAI GPT-4", "LangChain", "ChromaDB", "FAISS", "Streamlit"],
    stats: [
      { label: "Documents", value: "50K+" },
      { label: "Research Time ↓", value: "45%" },
      { label: "Relevance ↑", value: "30%" },
      { label: "Architecture", value: "RAG" },
    ],
    description:
      "Built intelligent Q&A system processing 50K+ documents using vector embeddings and semantic search. Reduced research time by 45% with advanced RAG architecture.",
    highlights: [
      "Intelligent Q&A system processing 50K+ documents",
      "Vector embeddings and semantic search with ChromaDB & FAISS",
      "Reduced research time by 45% with RAG architecture",
      "Improved response relevance by 30% via prompt engineering",
    ],
  },
  {
    id: 3,
    title: "Real-time Object Detection & Tracking System",
    year: "2025",
    icon: "👁️",
    color: "#00ff88",
    gradient: "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,255,136,0.03))",
    tags: ["YOLO v8", "PyTorch", "OpenCV", "TensorRT", "NVIDIA Jetson"],
    stats: [
      { label: "FPS", value: "30" },
      { label: "mAP", value: "92%" },
      { label: "Latency ↓", value: "60%" },
      { label: "Platform", value: "Edge" },
    ],
    description:
      "Developed real-time detection system achieving 30 FPS on edge devices with 92% mAP using YOLO v8. Optimized with TensorRT reducing latency by 60%.",
    highlights: [
      "Real-time detection achieving 30 FPS on edge devices",
      "92% mAP using YOLO v8 with PyTorch backbone",
      "TensorRT optimization reducing latency by 60%",
      "Deployed on NVIDIA Jetson for live monitoring",
    ],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.03) 0%, transparent 60%)",
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
            // 04. projects
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Key AI Projects
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer"
              style={{
                border: `1px solid ${proj.color}22`,
                background: proj.gradient,
              }}
              onClick={() => setActiveProject(activeProject === proj.id ? null : proj.id)}
              whileHover={{ scale: 1.01 }}
            >
              {/* Header */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: `${proj.color}20`,
                      border: `1px solid ${proj.color}40`,
                      boxShadow: `0 0 20px ${proj.color}20`,
                    }}
                  >
                    {proj.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h3 className="text-white font-bold text-xl leading-tight">{proj.title}</h3>
                      <span
                        className="text-xs px-3 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: `${proj.color}15`,
                          border: `1px solid ${proj.color}30`,
                          color: proj.color,
                          fontFamily: "'Fira Code', monospace",
                        }}
                      >
                        {proj.year}
                      </span>
                    </div>
                    <p className="text-[#94a3b8] text-sm mt-1">{proj.description}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {proj.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg p-3 text-center"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div
                        className="font-black text-lg"
                        style={{ color: proj.color, fontFamily: "'Fira Code', monospace" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-[#64748b] text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-tag"
                      style={{
                        background: `${proj.color}10`,
                        borderColor: `${proj.color}30`,
                        color: proj.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand indicator */}
                <div className="flex items-center gap-2 mt-4">
                  <motion.span
                    animate={{ rotate: activeProject === proj.id ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: proj.color, display: "inline-block", fontSize: "0.85rem" }}
                  >
                    ▶
                  </motion.span>
                  <span className="text-[#64748b] text-xs" style={{ fontFamily: "'Fira Code', monospace" }}>
                    {activeProject === proj.id ? "hide details" : "view details"}
                  </span>
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {activeProject === proj.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 md:px-8 pb-6"
                      style={{ borderTop: `1px solid ${proj.color}20` }}
                    >
                      <h4
                        className="text-sm font-mono mt-5 mb-3"
                        style={{ color: proj.color }}
                      >
                        // key highlights
                      </h4>
                      <ul className="space-y-2">
                        {proj.highlights.map((h, hi) => (
                          <motion.li
                            key={hi}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: hi * 0.1 }}
                            className="flex items-start gap-2 text-sm text-[#94a3b8]"
                          >
                            <span style={{ color: proj.color, flexShrink: 0 }}>◆</span>
                            {h}
                          </motion.li>
                        ))}
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
