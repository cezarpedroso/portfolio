import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";
import pfpPath from "@assets/pfp_1783130743782.png";

function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const fontSize = 13;
    let cols = Math.floor(canvas.width / (fontSize * 0.65));
    let drops = Array(cols).fill(1);

    let raf: number;

    const draw = () => {
      cols = Math.floor(canvas.width / (fontSize * 0.65));
      if (drops.length !== cols) drops = Array(cols).fill(1);

      ctx.fillStyle = "rgba(0,0,0,0.13)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cols; i++) {
        const bit = Math.random() > 0.5 ? "1" : "0";
        const brightness = Math.random();
        if (brightness > 0.85) {
          ctx.fillStyle = "#ffffff";
        } else if (brightness > 0.5) {
          ctx.fillStyle = "#aaaaaa";
        } else {
          ctx.fillStyle = "#555555";
        }
        ctx.font = `${fontSize}px 'IBM Plex Mono', monospace`;
        ctx.fillText(bit, i * (fontSize * 0.65), drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
}

export function Hero() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col md:flex-row items-center pt-24 pb-10 gap-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full md:w-[55%] flex flex-col justify-center"
      >
        <h1 className="font-sans font-medium text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 tracking-tight">
          CEZAR PEDROSO
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <h2 className="font-sans font-light text-lg md:text-xl text-foreground/70 tracking-wide">
            Software Engineer
          </h2>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/cezarpedroso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-testid="link-github-hero"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <SiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/cezaramp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-testid="link-linkedin-hero"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="font-sans font-light text-base md:text-lg text-foreground/80 leading-relaxed mb-10 max-w-xl">
          I build reliable, maintainable software with a focus on clean architecture. Currently building enterprise .NET applications.
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
            <span className="text-foreground">Iowa, United States</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        className="w-full md:w-[45%] flex justify-center md:justify-end"
      >
        <div
          className="relative w-full max-w-sm aspect-[4/5] cursor-pointer"
          style={{ perspective: "1000px" }}
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
          data-testid="hero-photo-flipper"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front — portrait photo */}
            <div
              style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              className="absolute inset-0 border border-primary/20 overflow-hidden"
            >
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
                CEZAR / 2026
              </div>
            </div>

            {/* Back — matrix binary animation */}
            <div
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
              className="absolute inset-0 border border-primary/20 overflow-hidden bg-black"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 z-10" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 z-10" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 z-10" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 z-10" />
              <div className="w-full h-full">
                {flipped && <MatrixCanvas />}
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] text-white/40 uppercase tracking-widest z-10">
                SYS / ACTIVE
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
