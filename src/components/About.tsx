import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const highlights = [
    { icon: "🧠", title: "ML/DL Systems", desc: "Production-grade models with 91%+ accuracy" },
    { icon: "🔗", title: "LLM & RAG", desc: "GPT-4, BERT, LangChain, vector databases" },
    { icon: "👁️", title: "Computer Vision", desc: "YOLO v8, real-time object detection @ 30 FPS" },
    { icon: "☁️", title: "Cloud & MLOps", desc: "AWS, GCP, Docker, Kubernetes, CI/CD" },
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
          <p className="text-sm mb-2" style={{ color: "#00d4ff", fontFamily: "'Fira Code', monospace" }}>
            // 01. about
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 glow-border">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)" }}
                >
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Ajay Singh</h3>
                  <p style={{ color: "#00d4ff", fontFamily: "'Fira Code', monospace", fontSize: "0.8rem" }}>
                    AI Engineer · ML/DL Aspirant
                  </p>
                </div>
              </div>

              <p className="text-[#94a3b8] leading-relaxed mb-6 text-sm">
                I'm an AI Engineer with <span style={{ color: "#00d4ff" }}>2+ years</span> of experience
                building production-grade ML/DL systems. I've developed scalable AI solutions processing
                <span style={{ color: "#a855f7" }}> 100K+ records</span>, improving accuracy by{" "}
                <span style={{ color: "#00ff88" }}>28%</span> and reducing costs by{" "}
                <span style={{ color: "#00ff88" }}>35%</span>.
              </p>

              <p className="text-[#94a3b8] leading-relaxed text-sm mb-6">
                My expertise spans <span style={{ color: "#00d4ff" }}>LLMs, Computer Vision, NLP</span>, and
                MLOps deployment on <span style={{ color: "#a855f7" }}>AWS/GCP</span>. I have a proven track
                record in end-to-end model development from research to production.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Jabalpur, India", "Open to Remote", "Full-Time"].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-xl p-6 glow-border cursor-default"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-[#64748b] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
