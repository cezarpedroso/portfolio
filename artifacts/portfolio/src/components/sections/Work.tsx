import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Slide = {
  label: string;
  note: string;
};

type Project = {
  id: string;
  title: string;
  year: string;
  type: string;
  role: string;
  stack: string;
  description: string;
  github: string;
  slides: Slide[];
};

const projects: Project[] = [
  {
    id: "001",
    title: "Citation Management System",
    year: "2024",
    type: "Internal Systems",
    role: "Lead Developer",
    stack: "C# / .NET / SQL Server / Entity Framework",
    description: "Built for a local police department. A complex system for managing citations, workflows, and data with consistency and auditability. Focused on role-based access, audit trails, and reliable Entity Framework integration.",
    github: "https://github.com/cezarpedroso",
    slides: [
      { label: "Dashboard Overview", note: "Add screenshot here" },
      { label: "Citation Form", note: "Add screenshot here" },
      { label: "Workflow View", note: "Add screenshot here" },
    ]
  },
  {
    id: "002",
    title: "SQL Schema Architect",
    year: "2023",
    type: "Developer Tooling",
    role: "Author",
    stack: "C# / .NET / SQL / EF Core / CLI",
    description: "A CLI tool that parses SQL schema files and auto-generates Entity Framework Core models, DbContext, and configuration files for C# backends — eliminating repetitive manual work and reducing setup errors.",
    github: "https://github.com/cezarpedroso",
    slides: [
      { label: "CLI Interface", note: "Add screenshot here" },
      { label: "Generated Output", note: "Add screenshot here" },
      { label: "Schema Parsing", note: "Add screenshot here" },
    ]
  },
  {
    id: "003",
    title: "Backend API Service",
    year: "2023",
    type: "Software Development",
    role: "Developer",
    stack: "TypeScript / Node.js / PostgreSQL",
    description: "A structured REST API service built with reliability and maintainability as primary concerns. Clean data modeling, proper error handling, and clear interfaces throughout.",
    github: "https://github.com/cezarpedroso",
    slides: [
      { label: "API Routes", note: "Add screenshot here" },
      { label: "Database Schema", note: "Add screenshot here" },
      { label: "Documentation", note: "Add screenshot here" },
    ]
  },
  {
    id: "004",
    title: "Additional Project",
    year: "2023",
    type: "Software Development",
    role: "Developer",
    stack: "Placeholder",
    description: "Placeholder for another meaningful software project. Built with a focus on practical architecture, disciplined execution, and long-term usability.",
    github: "https://github.com/cezarpedroso",
    slides: [
      { label: "Overview", note: "Add screenshot here" },
      { label: "Details", note: "Add screenshot here" },
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
            data-testid="carousel-close"
            aria-label="Close preview"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="relative aspect-video bg-background/60 flex items-center justify-center group">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30" />

          <div className="text-center z-10">
            <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest">[ {slides[current].label} ]</p>
            <p className="font-mono text-[10px] text-muted-foreground/40 mt-2 uppercase tracking-widest">{slides[current].note}</p>
          </div>

          <button
            onClick={prev}
            className="absolute left-3 text-muted-foreground hover:text-primary transition-colors"
            data-testid="carousel-prev"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 text-muted-foreground hover:text-primary transition-colors"
            data-testid="carousel-next"
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
    <section id="work" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-12 font-mono text-sm tracking-widest text-primary uppercase">01 Work</div>

        <div className="space-y-12">
          {projects.map((project) => (
            <article key={project.id} className="pt-6 border-t border-border">
              <div className="mb-3">
                <div className="font-mono text-xs tracking-wider text-muted-foreground mb-2">PROJECT {project.id}</div>
                <button
                  onClick={() => toggleCarousel(project.id)}
                  className="text-left group w-full"
                  data-testid={`project-title-${project.id}`}
                  aria-expanded={openCarousel === project.id}
                >
                  <h3 className="font-sans font-medium text-2xl text-foreground mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2">
                    {project.title}
                    <span className="font-mono text-[10px] text-muted-foreground/50 tracking-wider uppercase border border-border/60 px-1.5 py-0.5 group-hover:border-primary/40 group-hover:text-primary/60 transition-colors">
                      {openCarousel === project.id ? "CLOSE ↑" : "PREVIEW ↓"}
                    </span>
                  </h3>
                </button>
                <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs tracking-wider text-muted-foreground uppercase mt-2">
                  <span>TYPE: <span className="text-foreground/80">{project.type}</span></span>
                  <span>YEAR: <span className="text-foreground/80">{project.year}</span></span>
                  <span>ROLE: <span className="text-foreground/80">{project.role}</span></span>
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

              <div className="mt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-primary hover:text-secondary transition-colors uppercase hover:underline underline-offset-4"
                  data-testid={`link-github-${project.id}`}
                >
                  <SiGithub className="w-3.5 h-3.5" />
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
