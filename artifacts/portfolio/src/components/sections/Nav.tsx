import React from "react";
import { motion } from "framer-motion";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-serif font-medium text-lg tracking-wide text-foreground">
          Cezar Pedroso
        </div>
        <div className="hidden sm:flex items-center gap-6 font-sans text-xs tracking-widest uppercase text-muted-foreground">
          <a href="#work" className="hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/50">I. Work</a>
          <a href="#principles" className="hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/50">II. Principles</a>
          <a href="#experience" className="hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/50">III. Experience</a>
          <a href="#about" className="hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/50">IV. About</a>
          <a href="#contact" className="hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/50">V. Contact</a>
        </div>
      </div>
    </nav>
  );
}
