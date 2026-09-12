import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: "🧠",
      title: "Machine Learning",
      desc: "Supervised learning, predictive modeling, model evaluation and feature engineering.",
    },
    {
      icon: "🤖",
      title: "Generative AI",
      desc: "LLMs, RAG, LangChain, LangGraph, vector search and AI agent workflows.",
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      desc: "Computer vision applications using YOLO and OpenCV for real-world scenarios.",
    },
    {
      icon: "📊",
      title: "Data Science",
      desc: "Data analysis, EDA, statistical analysis, model validation and visualization.",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
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
            // 01. about
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 glow-border">
              {/* Profile Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #00d4ff, #a855f7)",
                  }}
                >
                  👨‍💻
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">
                    Ajay Singh
                  </h3>

                  <p
                    style={{
                      color: "#00d4ff",
                      fontFamily: "'Fira Code', monospace",
                      fontSize: "0.8rem",
                    }}
                  >
                    AI Engineer · Data Scientist
                  </p>
                </div>
              </div>

              {/* Introduction */}
              <p className="text-[#94a3b8] leading-relaxed mb-6 text-sm">
                I'm an{" "}
                <span style={{ color: "#00d4ff" }}>
                  AI Engineer and Computer Science graduate
                </span>{" "}
                focused on building practical Machine Learning, Deep Learning,
                NLP, Generative AI, and Computer Vision applications.
              </p>

              <p className="text-[#94a3b8] leading-relaxed mb-6 text-sm">
                My work spans{" "}
                <span style={{ color: "#a855f7" }}>
                  LLMs, Retrieval-Augmented Generation (RAG),
                </span>{" "}
                predictive modeling, data analysis, and AI application
                development. I enjoy taking real-world problems and converting
                them into structured, data-driven solutions.
              </p>

              <p className="text-[#94a3b8] leading-relaxed text-sm mb-6">
                Currently, I'm working in{" "}
                <span style={{ color: "#00ff88" }}>
                  healthcare operations
                </span>
                , where I identified inefficiencies in manual,
                Excel-based complaint logging and initiated development of a
                speech-to-text AI application to structure patient feedback
                into digital records.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Jabalpur, India",
                  "AI / ML",
                  "Generative AI",
                  "Data Science",
                  "Open to Opportunities",
                ].map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                }}
                className="glass-card rounded-xl p-6 glow-border cursor-default"
              >
                <div className="text-3xl mb-3">{item.icon}</div>

                <h4 className="text-white font-bold mb-2">
                  {item.title}
                </h4>

                <p className="text-[#64748b] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}