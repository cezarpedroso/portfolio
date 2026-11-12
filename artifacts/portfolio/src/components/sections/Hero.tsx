import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FileText, Linkedin, Mail } from "lucide-react";
import pfpPath from "@assets/pfp_1783130743782.png";
import { ResumeViewer } from "@/components/ResumeViewer";

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
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'IBM Plex Mono', monospace`;

      for (let x = 0; x < canvas.width; x += fontSize * 0.65) {
        for (let y = fontSize; y < canvas.height; y += fontSize) {
          ctx.fillStyle = Math.random() > 0.82 ? "#aaaaaa" : "#555555";
          ctx.fillText(Math.random() > 0.5 ? "1" : "0", x, y);
        }
      }

      return;
    }

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

    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

export function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const openResume = () => {
    setResumeOpen(true);
  };

  const closeResume = () => {
    setResumeOpen(false);
  };

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col md:flex-row items-center pt-24 pb-10 gap-12"
    >
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
            Software Engineer | .NET &amp; Backend Systems
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

        <p className="font-sans font-light text-base md:text-lg text-foreground/80 leading-relaxed mb-6 max-w-xl">
          I build backend, internal, and full-stack applications for insurance,
          municipal, education, and industrial teams—turning operational needs
          into secure, maintainable software.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={openResume}
            className="inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2.5 font-mono text-xs tracking-wider text-primary-foreground uppercase transition-colors hover:bg-primary/85"
            data-testid="button-view-resume"
          >
            <FileText className="h-4 w-4" />
            View Resume
          </button>
          <a
            href="mailto:cezarapedroso@gmail.com"
            className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs tracking-wider text-foreground uppercase transition-colors hover:border-primary/60 hover:text-primary"
            data-testid="button-email-hero"
          >
            <Mail className="h-4 w-4" />
            Send Email
          </a>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-4 sm:gap-8 font-mono text-xs text-muted-foreground uppercase tracking-wider">
          <div className="flex flex-col gap-1">
            <span className="text-primary/70">Focus</span>
            <span className="text-foreground">
              .NET / Backend Systems / Full-Stack Applications
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-primary/70">Status</span>
            <span className="text-foreground">Available December 2026</span>
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
        <button
          type="button"
          className="relative block w-full max-w-sm aspect-[4/5] cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          style={{ perspective: "1000px" }}
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
          onClick={() => setFlipped((current) => !current)}
          onBlur={() => setFlipped(false)}
          aria-label="Toggle Cezar Pedroso portrait animation"
          aria-pressed={flipped}
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
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
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
              <div className="w-full h-full">{flipped && <MatrixCanvas />}</div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] text-white/40 uppercase tracking-widest z-10">
                SYS / ACTIVE
              </div>
            </div>
          </div>
        </button>
      </motion.div>

      <ResumeViewer open={resumeOpen} onClose={closeResume} />
    </section>
  );
}
