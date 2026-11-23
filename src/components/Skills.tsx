import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillGroups } from "../data";

const groupStyles: Record<string, { icon: string; color: string }> = {
  languages: { icon: "💻", color: "#00d4ff" },
  ai: { icon: "🧠", color: "#a855f7" },
  backend: { icon: "🗄️", color: "#38bdf8" },
  frontend: { icon: "⚙️", color: "#ec4899" },
};

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillGroups)[number];
  index: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const { icon, color } = groupStyles[category.id] ?? groupStyles.languages;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-card rounded-2xl p-6"
      style={{
        border: `1px solid ${color}22`,
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{icon}</span>

        <h3 className="text-white font-bold text-lg">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg text-sm text-[#cbd5e1]"
            style={{
              background: `${color}0d`,
              border: `1px solid ${color}20`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      className="py-24 relative"
      ref={ref}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)",
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
            // 02. skills
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white section-heading">
            Technical Skills
          </h2>

        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
