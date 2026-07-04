import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="mb-6 font-serif text-sm tracking-widest text-primary">I.</div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-8">
          Building reliable software with discipline, clarity, and long-term thinking.
        </h1>
        <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          I focus on secure, maintainable systems, thoughtful backend architecture, and practical solutions that can stand the test of real use.
        </p>
      </motion.div>
    </section>
  );
}
