import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="mb-8 font-mono text-sm tracking-widest text-primary uppercase">03 About</div>
        
        <div className="font-sans font-light text-lg md:text-xl text-foreground/90 leading-relaxed">
          <p>
            I am a software engineer focused on becoming the kind of developer people can rely on when the work needs to be clear, secure, and maintainable. I care about building systems with practical architecture, disciplined execution, and enough depth to survive real use. My work is shaped by curiosity, consistency, and a preference for long-term quality over short-term trends.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
