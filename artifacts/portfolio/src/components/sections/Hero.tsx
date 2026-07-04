import { motion } from "framer-motion";
import pfpPath from "@assets/pfp_1783130743782.png";

export function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col md:flex-row items-center pt-24 pb-16 gap-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full md:w-[55%] flex flex-col justify-center"
      >
        <h1 className="font-sans font-medium text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 tracking-tight">
          CEZAR PEDROSO
        </h1>
        <h2 className="font-sans font-light text-lg md:text-xl text-foreground/70 mb-6 tracking-wide">
          Software Engineer
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
        <div className="relative w-full max-w-sm aspect-[4/5] border border-primary/20 overflow-hidden">
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50 z-10" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50 z-10" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50 z-10" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50 z-10" />
          <img
            src={pfpPath}
            alt="Cezar Pedroso"
            className="w-full h-full object-cover object-top"
            data-testid="img-portrait"
          />
          <div className="absolute bottom-3 right-3 font-mono text-[10px] text-white/70 uppercase tracking-widest z-10 bg-black/30 px-1.5 py-0.5">
            CP / 2025
          </div>
        </div>
      </motion.div>
    </section>
  );
}
