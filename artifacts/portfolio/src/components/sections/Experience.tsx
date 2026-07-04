import React from "react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-accent/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-12 font-serif text-sm tracking-widest text-primary">IV. Experience</div>
        
        <div className="relative pl-8 border-l border-border/60">
          <div className="absolute w-2 h-2 rounded-full bg-accent -left-[4.5px] top-2" />
          <h3 className="font-serif text-3xl text-foreground mb-1">Software Engineering Intern</h3>
          <div className="font-sans text-sm text-muted-foreground mb-4">
            A software company &nbsp;&middot;&nbsp; 2024 &ndash; Present
          </div>
          <p className="font-sans text-base text-foreground/80 leading-relaxed max-w-2xl">
            Focused on meaningful PRs, backend contribution, learning deeply, and contributing to production-quality systems. Worked on backend services, participated in code reviews, and maintained high standards for readable, tested, and maintainable code.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
