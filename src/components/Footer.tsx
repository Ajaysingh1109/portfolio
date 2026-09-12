import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative py-12 border-t"
      style={{
        borderColor: "rgba(0,212,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-[#050510]"
              style={{
                background:
                  "linear-gradient(135deg, #00d4ff, #a855f7)",
              }}
            >
              AS
            </div>

            <span
              className="font-bold text-white"
              style={{
                fontFamily: "'Fira Code', monospace",
              }}
            >
              Ajay<span style={{ color: "#00d4ff" }}>.</span>
              Singh
            </span>
          </motion.button>

          {/* Center */}
          <div className="text-center">
            <p className="text-[#64748b] text-sm">
              Designed & Built by{" "}
              <span style={{ color: "#00d4ff" }}>
                Ajay Singh
              </span>
            </p>

            <p
              className="text-[#475569] text-xs mt-1"
              style={{
                fontFamily: "'Fira Code', monospace",
              }}
            >
              AI Engineer · Data Scientist · ML Engineer
            </p>

            <p
              className="text-[#334155] text-xs mt-2"
              style={{
                fontFamily: "'Fira Code', monospace",
              }}
            >
              © {currentYear} · All rights reserved
            </p>
          </div>

          {/* Scroll To Top */}
          <motion.button
            whileHover={{
              scale: 1.1,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#00d4ff",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            ↑
          </motion.button>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 text-center">
          <p
            className="text-[#334155] text-xs"
            style={{
              fontFamily: "'Fira Code', monospace",
            }}
          >
            {"< React + Vite + Tailwind CSS + Framer Motion />"}
          </p>
        </div>
      </div>
    </footer>
  );
}