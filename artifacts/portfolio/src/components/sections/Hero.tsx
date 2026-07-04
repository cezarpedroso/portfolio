import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col md:flex-row items-center pt-24 pb-16 gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full md:w-[55%] flex flex-col justify-center"
      >
        <div className="mb-4 font-mono text-xs tracking-widest text-primary uppercase">
          Software Engineer / Backend Systems
        </div>
        <h1 className="font-sans font-medium text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight">
          CEZAR PEDROSO
        </h1>
        <h2 className="font-sans font-medium text-xl md:text-2xl text-foreground/90 mb-6">
          Reliable systems. Clear architecture. Practical execution.
        </h2>
        <p className="font-sans font-light text-base md:text-lg text-foreground/80 leading-relaxed mb-10 max-w-xl">
          I build maintainable backend-focused software with attention to security, structure, and long-term usability.
        </p>
        
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-4 sm:gap-8 font-mono text-xs text-muted-foreground uppercase tracking-wider">
          <div className="flex flex-col gap-1">
            <span className="text-primary/70">Focus</span>
            <span className="text-foreground">Backend Engineering / Cybersecurity</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-primary/70">Status</span>
            <span className="text-foreground">Software Engineering Intern</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-primary/70">Location</span>
            <span className="text-foreground">United States</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        className="w-full md:w-[45%] flex justify-center md:justify-end"
      >
        <div className="relative w-full max-w-sm aspect-[4/5] border border-primary/20 bg-background/50 flex flex-col p-4 overflow-hidden">
          {/* Grid background */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} 
          />
          
          {/* Corner ticks */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40 -translate-x-[1px] -translate-y-[1px]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40 translate-x-[1px] -translate-y-[1px]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/40 -translate-x-[1px] translate-y-[1px]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40 translate-x-[1px] translate-y-[1px]" />

          <div className="flex-1 flex flex-col items-center justify-center text-center z-10">
            <div className="font-mono text-xs tracking-widest text-primary/70 mb-2">
              [ PORTRAIT ]
            </div>
            <div className="font-mono text-sm text-foreground">
              Cezar Pedroso
            </div>
            <div className="font-mono text-xs text-muted-foreground mt-1">
              Software Engineer
            </div>
          </div>

          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest z-10">
            IMG-001 / PORTRAIT / 2025
          </div>
        </div>
      </motion.div>
    </section>
  );
}
