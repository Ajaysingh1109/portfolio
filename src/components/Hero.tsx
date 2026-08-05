import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "AI Engineer",
  "ML/DL Specialist",
  "LLM Developer",
  "Computer Vision Expert",
  "MLOps Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    setDisplayText(currentRole.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const stats = [
    { value: "2+", label: "Years Exp." },
    { value: "100K+", label: "Records Processed" },
    { value: "28%", label: "Accuracy Boost" },
    { value: "35%", label: "Cost Reduction" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
                style={{ background: "#00ff88", boxShadow: "0 0 8px #00ff88" }}
              />
              Available for Opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
              <span className="text-white">Hi, I'm </span>
              <br />
              <span className="gradient-text">Ajay Singh</span>
            </h1>

            <div className="flex items-center gap-3 text-2xl md:text-3xl font-semibold mb-6 h-10">
              <span style={{ color: "#94a3b8" }}>I'm a </span>
              <span style={{ color: "#00d4ff", fontFamily: "'Fira Code', monospace" }}>
                {displayText}
                <span className="typing-cursor" />
              </span>
            </div>

            <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed max-w-xl mb-8">
              AI Engineer with <span style={{ color: "#00d4ff" }}>2+ years</span> of experience
              building production-grade ML/DL systems. Expert in{" "}
              <span style={{ color: "#a855f7" }}>LLMs, Computer Vision, NLP</span>, and{" "}
              <span style={{ color: "#00ff88" }}>MLOps deployment</span> on AWS/GCP.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="mailto:ajaysingh1103as@gmail.com" className="neon-btn">
                📧 Contact Me
              </a>
              <button
                onClick={() => {
                  const el = document.querySelector("#projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #a855f7)",
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
                  ((e.target as HTMLButtonElement).style.boxShadow =
                    "0 0 40px rgba(0,212,255,0.6)")
                }
                onMouseOut={(e) =>
                  ((e.target as HTMLButtonElement).style.boxShadow =
                    "0 0 20px rgba(0,212,255,0.3)")
                }
              >
                🚀 View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/ajay-singh-93a70a287/" },
                { icon: "📧", label: "Gmail", href: "mailto:ajaysingh1103as@gmail.com" },
                { icon: "📱", label: "+91-7587939392", href: "tel:+917587939392" },
                { icon: "📍", label: "Jabalpur, India", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 text-sm transition-all hover:scale-105"
                  style={{ color: "#64748b" }}
                  onMouseOver={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#00d4ff")
                  }
                  onMouseOut={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#64748b")
                  }
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span>{item.icon}</span>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.8rem" }}>
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right - Avatar + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Avatar Circle */}
          <div className="relative float-anim">
            <div
              className="w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center text-8xl md:text-9xl"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))",
                border: "2px solid rgba(0,212,255,0.3)",
                boxShadow: "0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(168,85,247,0.1)",
              }}
            >
              🤖
            </div>
            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div
                className="w-4 h-4 rounded-full absolute top-2 left-1/2 -translate-x-1/2"
                style={{ background: "#00d4ff", boxShadow: "0 0 12px #00d4ff" }}
              />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4"
            >
              <div
                className="w-3 h-3 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2"
                style={{ background: "#a855f7", boxShadow: "0 0 10px #a855f7" }}
              />
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="stat-card"
              >
                <div
                  className="text-2xl font-black"
                  style={{ color: "#00d4ff", fontFamily: "'Fira Code', monospace" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[#64748b] mt-1">{stat.label}</div>
              </motion.div>
            ))}
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
        <span className="text-xs" style={{ fontFamily: "'Fira Code', monospace" }}>scroll down</span>
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
