import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from "../data";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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

        <div className="max-w-3xl">
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
                    {personal.name}
                  </h3>

                  <p
                    style={{
                      color: "#00d4ff",
                      fontFamily: "'Fira Code', monospace",
                      fontSize: "0.8rem",
                    }}
                  >
                    {personal.headline}
                  </p>
                </div>
              </div>

              <p className="text-[#94a3b8] leading-relaxed text-base">
                {personal.summary}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
