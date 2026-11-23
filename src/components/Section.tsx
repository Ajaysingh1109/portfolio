import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({ id, title, children, className = "" }: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={"portfolio-section shell " + className}
      aria-labelledby={id + "-title"}
      initial={reduced ? false : { opacity: .64, y: 19 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .08 }}
      transition={{ duration: reduced ? 0 : .62 }}
    >
      <h2 className="section-title" id={id + "-title"} data-dust="text">{title}</h2>
      {children}
    </motion.section>
  );
}
