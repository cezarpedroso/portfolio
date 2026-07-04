import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import pfpPath from "@assets/pfp_1783130743782.png";

type Slide = {
  label: string;
  image: string;
};

type Project = {
  id: string;
  title: string;
  year: string;
  type: string;
  stack: string;
  description: string;
  github?: string;
  slides: Slide[];
};

const projects: Project[] = [
  {
    id: "001",
    title: "SQL Schema Architect",
    year: "2023",
    type: "Developer Tooling",
    stack: "C# / .NET / SQL / EF Core / Blazor",
    description: "Schema Architect is a developer tool that generates a production-ready Entity Framework Core foundation from SQL database schemas. It parses SQL definitions to identify tables, relationships, constraints, and data types, then generates entity models, a DbContext, Fluent API configurations, DTOs, and CRUD controller scaffolding. Built to reduce repetitive backend setup and provide developers with a clean, maintainable starting point for new applications.",
    slides: [
      { label: "CLI Interface", image: pfpPath },
      { label: "Generated Output", image: pfpPath },
      { label: "Schema Parsing", image: pfpPath },
    ]
  },
  {
    id: "002",
    title: "Citation Management System",
    year: "2025",
    type: "Internal Systems",
    stack: "Node.js / PostgreSQL / Tailwind CSS",
    description: "Developed a full-stack citation management system for the City of Oskaloosa that allows law enforcement officers to issue citations digitally and enables citizens to view and contest citations online. Built features including role-based access control, analytics, audit logs, user management, infraction management, media uploads, and PDF generation.",
    slides: [
      { label: "Dashboard Overview", image: pfpPath },
      { label: "Citation Form", image: pfpPath },
      { label: "Workflow View", image: pfpPath },
    ]
  },
  {
    id: "003",
    title: "Argus: AI Engineering Agent",
    year: "2026",
    type: "AI / Machine Learning",
    stack: "TypeScript / Node.js / PostgreSQL",
    description: "Argus is a local AI engineering agent for .NET backend development built with C#, Ollama, and local large language models. It analyzes real codebases, understands project structure, explains backend workflows, generates and refactors code, runs builds and tests, and iteratively resolves compiler errors to streamline development and improve maintainability.",
    github: "https://github.com/cezarpedroso/argus",
    slides: [
      { label: "API Routes", image: pfpPath },
      { label: "Database Schema", image: pfpPath },
      { label: "Documentation", image: pfpPath },
    ]
  },
  {
    id: "004",
    title: "Vulnerable File Sharing Platform",
    year: "2025",
    type: "Software Development / Security",
    stack: "React / TypeScript / Node.js / PostgreSQL",
    description: "Vulnerable File Sharing Platform is an educational web application designed to simulate a realistic file-sharing system with intentionally embedded security vulnerabilities. Built to support penetration testing and secure coding education, the platform includes authentication, file management, sharing, commenting, and administration features while demonstrating common web security flaws such as SQL injection, IDOR, SSRF, XSS, broken access control, and insecure authentication mechanisms.",
    github: "https://github.com/cezarpedroso/Vulnerable-Web-App",
    slides: [
      { label: "Overview", image: pfpPath },
      { label: "Details", image: pfpPath },
    ]
  }
];

function ProjectCarousel({ slides, onClose }: { slides: Slide[]; onClose: () => void }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="mt-5 border border-border/60 bg-muted/20">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border/60">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")} — {slides[current].label}
          </span>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close preview"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="relative aspect-video bg-background/60 overflow-hidden">
          <img
            src={slides[current].image}
            alt={slides[current].label}
            className="w-full h-full object-cover object-top opacity-60"
          />
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30 z-10" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30 z-10" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30 z-10" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30 z-10" />
          <div className="absolute bottom-2 left-3 font-mono text-[10px] text-white/70 uppercase tracking-widest z-10 bg-black/30 px-1.5 py-0.5">
            {slides[current].label}
          </div>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/20 rounded p-0.5"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/20 rounded p-0.5"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 py-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const [openCarousel, setOpenCarousel] = useState<string | null>(null);

  const toggleCarousel = (id: string) => {
    setOpenCarousel((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">01 Work</div>

        <div className="space-y-10">
          {projects.map((project) => (
            <article key={project.id} className="pt-6 border-t border-border">
              <div className="mb-3">
                <div className="font-mono text-xs tracking-wider text-muted-foreground mb-2">PROJECT {project.id}</div>
                <button
                  onClick={() => toggleCarousel(project.id)}
                  className="text-left group w-full"
                  aria-expanded={openCarousel === project.id}
                >
                  <h3 className="font-sans font-medium text-2xl text-foreground mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2 flex-wrap">
                    {project.title}
                    <span className="font-mono text-[10px] text-muted-foreground/50 tracking-wider uppercase border border-border/60 px-1.5 py-0.5 group-hover:border-primary/40 group-hover:text-primary/60 transition-colors">
                      {openCarousel === project.id ? "CLOSE ↑" : "PREVIEW ↓"}
                    </span>
                  </h3>
                </button>
                <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs tracking-wider text-muted-foreground uppercase mt-2">
                  <span>TYPE: <span className="text-foreground/80">{project.type}</span></span>
                  <span>YEAR: <span className="text-foreground/80">{project.year}</span></span>
                  <span>STACK: <span className="text-foreground/80">{project.stack}</span></span>
                </div>
              </div>

              <p className="font-sans text-sm text-foreground/80 leading-relaxed max-w-2xl mb-5 mt-4">
                {project.description}
              </p>

              <AnimatePresence>
                {openCarousel === project.id && (
                  <ProjectCarousel
                    slides={project.slides}
                    onClose={() => setOpenCarousel(null)}
                  />
                )}
              </AnimatePresence>

              {project.github && (
                <div className="mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-primary hover:text-secondary transition-colors uppercase hover:underline underline-offset-4"
                  >
                    <SiGithub className="w-3.5 h-3.5" />
                    View on GitHub
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
