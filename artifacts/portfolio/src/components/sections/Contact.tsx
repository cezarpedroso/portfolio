import React from "react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-12 font-mono text-sm tracking-widest text-primary uppercase">04 Contact</div>
        
        <div className="flex flex-col space-y-6 pt-6 border-t border-border">
          <a 
            href="mailto:cezarapedroso@gmail.com" 
            className="font-sans font-medium text-2xl md:text-3xl text-foreground hover:text-primary transition-colors self-start underline-offset-8 decoration-1 decoration-primary/30 hover:underline" 
            data-testid="link-email"
          >
            cezarapedroso@gmail.com
          </a>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-8 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <a href="https://github.com/cezarpedroso" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/50" data-testid="link-github">GitHub</a>
            <a href="https://linkedin.com/in/cezaramp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/50" data-testid="link-linkedin">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/50" data-testid="link-resume">Download CV</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
