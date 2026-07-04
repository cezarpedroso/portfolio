import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-accent/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <div className="mb-12 font-serif text-sm tracking-widest text-primary">V. About</div>
        
        <div className="space-y-6 font-sans text-lg text-foreground/80 leading-relaxed">
          <p>
            <span className="font-serif text-4xl float-left mr-2 leading-none mt-1 text-secondary">M</span>
            y foundation in software engineering is built on backend systems and architecture. I am drawn to the structural challenges of computing—how data flows reliably, how systems fail gracefully, and how complexity can be managed through deliberate, thoughtful design.
          </p>
          <p>
            I have a strong interest in cybersecurity, operating on the principle that secure code must be the default, not an afterthought. I believe in approaching technical problems with depth before speed, ensuring I fully understand the constraints before writing a solution.
          </p>
          <p>
            Beyond the screen, my values are rooted in family and a deep appreciation for craftsmanship. Whether in history, architecture, or timeless design, I respect work that is built to endure. I bring this same philosophy to my engineering: creating tools that serve their purpose quietly and reliably for years to come.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
