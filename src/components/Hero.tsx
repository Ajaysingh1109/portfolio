import { motion } from "framer-motion";
import { personal } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Location */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-6"
              style={{
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.3)",
                fontFamily: "'Fira Code', monospace",
                color: "#00d4ff",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#00ff88",
                  boxShadow: "0 0 8px #00ff88",
                }}
              />

              {personal.location}
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
              <span className="text-white">Hi, I'm </span>
              <br />
              <span className="gradient-text">{personal.name}</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold mb-6 text-[#00d4ff]">
              {personal.headline}
            </p>

            <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed max-w-xl mb-8">
              {personal.summary}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              {/* Contact */}
              <a
                href={`mailto:${personal.email}`}
                className="neon-btn"
              >
                📧 Contact Me
              </a>

              <a href={personal.resumePath} className="neon-btn" download>
                Download Resume
              </a>

              {/* Projects */}
              <button
                onClick={() => {
                  const el = document.querySelector("#projects");

                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  background:
                    "linear-gradient(135deg, #00d4ff, #a855f7)",
                  color: "#fff",
                  border: "none",
                  padding: "12px 32px",
                  borderRadius: "8px",
                  fontFamily: "'Fira Code', monospace",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 0 20px rgba(0,212,255,0.3)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(0,212,255,0.6)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(0,212,255,0.3)")
                }
              >
                🚀 View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 flex-wrap">
              {[
                {
                  icon: "💼",
                  label: "LinkedIn",
                  href: personal.linkedin,
                },
                {
                  icon: "🐙",
                  label: "GitHub",
                  href: personal.github,
                },
                {
                  icon: "📧",
                  label: "Email",
                  href: `mailto:${personal.email}`,
                },
                {
                  icon: "📱",
                  label: "Call Me",
                  href: `tel:${personal.phone.replace("-", "")}`,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 text-sm transition-all hover:scale-105"
                  style={{ color: "#64748b" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "#00d4ff")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "#64748b")
                  }
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span>{item.icon}</span>

                  <span
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: "0.8rem",
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Profile Image */}
          <div className="relative float-anim">
            <div
              className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))",
                border: "2px solid rgba(0,212,255,0.3)",
                boxShadow:
                  "0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(168,85,247,0.1)",
              }}
            >
              <img
                src={personal.portraitPath}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orbiting Dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <div
                className="w-4 h-4 rounded-full absolute top-2 left-1/2 -translate-x-1/2"
                style={{
                  background: "#00d4ff",
                  boxShadow: "0 0 12px #00d4ff",
                }}
              />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-4"
            >
              <div
                className="w-3 h-3 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2"
                style={{
                  background: "#a855f7",
                  boxShadow: "0 0 10px #a855f7",
                }}
              />
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#64748b" }}
      >
        <span
          className="text-xs"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          scroll down
        </span>

        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: "rgba(0,212,255,0.3)" }}
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#00d4ff" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
