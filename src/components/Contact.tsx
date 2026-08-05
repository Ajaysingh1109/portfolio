import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: "ajaysingh1103as@gmail.com",
      href: "mailto:ajaysingh1103as@gmail.com",
      color: "#00d4ff",
      action: () => copyToClipboard("ajaysingh1103as@gmail.com", "email"),
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91-7587939392",
      href: "tel:+917587939392",
      color: "#a855f7",
      action: () => copyToClipboard("+91-7587939392", "phone"),
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/ajay-singh-93a70a287/",
      color: "#00ff88",
      action: undefined,
    },
    {
      icon: "📍",
      label: "Location",
      value: "Jabalpur, Madhya Pradesh, India",
      href: "#",
      color: "#f59e0b",
      action: undefined,
    },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(168,85,247,0.05) 0%, transparent 60%)",
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
            // 06. contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 glow-border">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-white font-black text-2xl mb-4">
                Let's Build Something{" "}
                <span className="gradient-text">Amazing Together</span>
              </h3>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                I'm currently open to new opportunities in AI/ML engineering. Whether you have a
                project in mind, want to collaborate, or just want to say hi — my inbox is always
                open!
              </p>

              <div className="space-y-2 text-sm text-[#64748b] mb-8">
                {[
                  "✅ Available for Full-time Roles",
                  "✅ Open to Remote Work",
                  "✅ Freelance Projects Welcome",
                  "✅ Research Collaborations",
                ].map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <a
                href="mailto:ajaysingh1103as@gmail.com"
                className="neon-btn block text-center"
                style={{ width: "100%" }}
              >
                📧 Send Me a Message
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Cards */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4"
                style={{ border: `1px solid ${item.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#64748b] text-xs mb-0.5" style={{ fontFamily: "'Fira Code', monospace" }}>
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white font-semibold text-sm truncate block hover:underline"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </a>
                </div>
                {item.action && (
                  <button
                    onClick={item.action}
                    className="flex-shrink-0 text-xs px-3 py-1.5 rounded-lg transition-all"
                    style={{
                      background: copied === item.label.toLowerCase() ? `${item.color}30` : "rgba(255,255,255,0.05)",
                      border: `1px solid ${copied === item.label.toLowerCase() ? item.color : "rgba(255,255,255,0.1)"}`,
                      color: copied === item.label.toLowerCase() ? item.color : "#64748b",
                      fontFamily: "'Fira Code', monospace",
                      cursor: "pointer",
                    }}
                  >
                    {copied === item.label.toLowerCase() ? "✓ Copied!" : "Copy"}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
