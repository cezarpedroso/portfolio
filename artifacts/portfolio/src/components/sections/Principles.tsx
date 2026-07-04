import React from "react";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Reliability over hype",
    description: "Systems should work predictably under real conditions, not just demos."
  },
  {
    title: "Maintainability over cleverness",
    description: "Code is read far more than it is written."
  },
  {
    title: "Security by design",
    description: "Security is not a feature. It is a prerequisite."
  },
  {
    title: "Depth before speed",
    description: "Understanding the problem fully before writing a single line."
  },
  {
    title: "Clear architecture",
    description: "Good systems are understandable systems."
  },
  {
    title: "Professional execution",
    description: "Deadlines, documentation, and communication are part of the craft."
  }
];

export function Principles() {
  return (
    <section id="principles" className="py-24 border-t border-accent/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-12 font-serif text-sm tracking-widest text-primary">III. Engineering Principles</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {principles.map((principle, index) => (
            <div key={index}>
              <h3 className="font-serif text-2xl text-foreground mb-2">{principle.title}</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
