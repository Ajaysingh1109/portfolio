import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (
    text: string,
    label: string
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);

      setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch {
      console.error("Unable to copy text");
    }
  };

  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: "ajaysingh1103as@gmail.com",
      href: "mailto:ajaysingh1103as@gmail.com",
      color: "#00d4ff",
      copyValue: "ajaysingh1103as@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 7587939392",
      href: "tel:+917587939392",
      color: "#a855f7",
      copyValue: "+91 7587939392",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/ajaysingh1103as",
      color: "#00ff88",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "Ajaysingh1109",
      href: "https://github.com/Ajaysingh1109",
      color: "#38bdf8",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Jabalpur, India",
      href: "#",
      color: "#f59e0b",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative"
      ref={ref}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(168,85,247,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
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
          }}
          className="mb-16"
        >
          <p
            className="text-sm mb-2"
            style={{
              color: "#00d4ff",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            // 06. contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Get In Touch
          </h2>

          <p className="mt-4 text-[#94a3b8] max-w-2xl leading-relaxed">
            Interested in AI, Machine Learning, Data Science, or
            Generative AI opportunities? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <div className="glass-card rounded-2xl p-8 glow-border">
              <div className="text-5xl mb-6">
                🚀
              </div>

              <h3 className="text-white font-black text-2xl mb-4">
                Let's Build Something{" "}
                <span className="gradient-text">
                  Meaningful
                </span>
              </h3>

              <p className="text-[#94a3b8] leading-relaxed mb-6">
                I'm interested in opportunities where I can work
                on practical AI and Data Science problems. Whether
                it's Machine Learning, Generative AI, Computer
                Vision, NLP, or AI-powered applications, I'd be
                happy to connect.
              </p>

              <div className="space-y-2 text-sm text-[#64748b] mb-8">
                {[
                  "✅ Open to AI / ML Opportunities",
                  "✅ Open to Data Science Roles",
                  "✅ Interested in AI Projects & Collaboration",
                  "✅ Open to Remote Opportunities",
                ].map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <a
                href="mailto:ajaysingh1103as@gmail.com"
                className="neon-btn block text-center"
                style={{
                  width: "100%",
                }}
              >
                📧 Send Me a Message
              </a>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {contactItems.map((item, index) => {
              const isCopied =
                copied === item.label.toLowerCase();

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="glass-card rounded-xl p-5 flex items-center gap-4"
                  style={{
                    border: `1px solid ${item.color}22`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[#64748b] text-xs mb-0.5"
                      style={{
                        fontFamily:
                          "'Fira Code', monospace",
                      }}
                    >
                      {item.label}
                    </p>

                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-semibold text-sm truncate block hover:underline"
                      style={{
                        color: item.color,
                      }}
                    >
                      {item.value}
                    </a>
                  </div>

                  {/* Copy Button */}
                  {item.copyValue && (
                    <button
                      onClick={() =>
                        copyToClipboard(
                          item.copyValue!,
                          item.label.toLowerCase()
                        )
                      }
                      className="flex-shrink-0 text-xs px-3 py-1.5 rounded-lg transition-all"
                      style={{
                        background: isCopied
                          ? `${item.color}30`
                          : "rgba(255,255,255,0.05)",
                        border: `1px solid ${
                          isCopied
                            ? item.color
                            : "rgba(255,255,255,0.1)"
                        }`,
                        color: isCopied
                          ? item.color
                          : "#64748b",
                        fontFamily:
                          "'Fira Code', monospace",
                        cursor: "pointer",
                      }}
                    >
                      {isCopied ? "✓ Copied!" : "Copy"}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}