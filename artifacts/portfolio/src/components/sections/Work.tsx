import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

type Slide = {
  label: string;
  source: string;
  kind: "image" | "pdf" | "document";
};

type Project = {
  id: string;
  title: string;
  year: string;
  type: string;
  status: string;
  stack: string;
  description: string;
  highlights: string[];
  github?: string;
  live?: string;
  slides: Slide[];
};

const projectMedia = (path: string) =>
  `${import.meta.env.BASE_URL}project-media/${path}`;

const projects: Project[] = [
  {
    id: "001",
    title: "DotDet",
    year: "2026",
    type: "Developer Tooling / Code Analysis",
    status: "Live",
    stack: ".NET 9 / ASP.NET Core / Roslyn / React / TypeScript",
    description:
      "A production-readiness analysis workbench that turns static findings from ASP.NET Core solutions into evidence-backed engineering guidance.",
    highlights: [
      "Analyzes architecture boundaries, dependency injection, EF Core migrations, security and configuration, and API readiness with confidence-aware scoring.",
      "Connects findings to source evidence, rule logic, Microsoft guidance, and practical remediation through a Code Explorer, Architecture Map, and Engineering Guide.",
      "Supports ZIP and GitHub repository analysis, scoped suppressions, saved history, and sanitized JSON, Markdown, and printable HTML reports.",
    ],
    github: "https://github.com/cezarpedroso/dotdet",
    live: "https://dotdet.vercel.app/",
    slides: [
      {
        label: "Product Home",
        source: projectMedia("dotdet/home.png"),
        kind: "image",
      },
      {
        label: "Analysis Dashboard",
        source: projectMedia("dotdet/dashboard.png"),
        kind: "image",
      },
      {
        label: "Readiness Overview",
        source: projectMedia("dotdet/overview.png"),
        kind: "image",
      },
      {
        label: "Findings Workspace",
        source: projectMedia("dotdet/findings.png"),
        kind: "image",
      },
      {
        label: "Code Explorer",
        source: projectMedia("dotdet/code-explorer.png"),
        kind: "image",
      },
      {
        label: "Production Readiness Report (PDF)",
        source: projectMedia("dotdet/production-readiness-report.pdf"),
        kind: "pdf",
      },
      {
        label: "Interactive Readiness Report",
        source: projectMedia("dotdet/production-readiness-report.html"),
        kind: "document",
      },
    ],
  },
  {
    id: "004",
    title: "SQL Schema Architect",
    year: "2023",
    type: "Developer Tooling",
    status: "Live",
    stack: "C# / .NET / SQL / EF Core / Blazor",
    description:
      "A developer tool that converts SQL database definitions into a clean, production-ready Entity Framework Core foundation.",
    highlights: [
      "Parses SQL schemas to identify tables, relationships, constraints, keys, and data types.",
      "Generates entity models, a DbContext, Fluent API configurations, DTOs, and CRUD controller scaffolding.",
      "Reduces repetitive backend setup while giving teams a consistent, maintainable starting architecture.",
    ],
    github: "https://github.com/cezarpedroso/SchemaArchitect",
    live: "https://schemarchitect.azurewebsites.net/",
    slides: [
      {
        label: "Product Home",
        source: projectMedia("schema-architect/home.png"),
        kind: "image",
      },
      {
        label: "Schema Upload",
        source: projectMedia("schema-architect/schema-upload.png"),
        kind: "image",
      },
      {
        label: "Interactive Schema Explorer",
        source: projectMedia("schema-architect/schema-explorer.png"),
        kind: "image",
      },
      {
        label: "Schema Health",
        source: projectMedia("schema-architect/schema-health.png"),
        kind: "image",
      },
      {
        label: "Relationship Map",
        source: projectMedia("schema-architect/relationships.png"),
        kind: "image",
      },
      {
        label: "Generated Code",
        source: projectMedia("schema-architect/generated-code.png"),
        kind: "image",
      },
    ],
  },
  {
    id: "003",
    title: "Document Approval System",
    year: "2026",
    type: "Document Governance / Workflow",
    status: "Source Available",
    stack: ".NET 9 / ASP.NET Core / EF Core / React / TypeScript",
    description:
      "A controlled-document workflow designed to preserve decision integrity across drafting, review, approval, publication, and audit.",
    highlights: [
      "Enforces department-scoped Author, Reviewer, Approver, and Administrator roles through server-side authorization and an explicit workflow state machine.",
      "Preserves immutable version history, pins the exact approved version, and uses optimistic concurrency to prevent silent conflicts during edits and decisions.",
      "Combines reviewer and approver queues with a searchable administrative audit trail, Microsoft Entra ID integration, and security-focused unit and integration tests.",
    ],
    github: "https://github.com/cezarpedroso/Document-Approval-System",
    slides: [
      {
        label: "Workspace Overview",
        source: projectMedia("document-approval-system/workspace-overview.png"),
        kind: "image",
      },
      {
        label: "Create Document",
        source: projectMedia("document-approval-system/create-document.png"),
        kind: "image",
      },
      {
        label: "Review Queue",
        source: projectMedia("document-approval-system/review-queue.png"),
        kind: "image",
      },
      {
        label: "Approval Queue",
        source: projectMedia("document-approval-system/approval-queue.png"),
        kind: "image",
      },
      {
        label: "Administrative Audit Log",
        source: projectMedia("document-approval-system/audit-log.png"),
        kind: "image",
      },
    ],
  },
  {
    id: "002",
    title: "WPU Residence Life Management Portal",
    year: "2026",
    type: "Residence Life / Operations",
    status: "Deployed Internally",
    stack: "React / TypeScript / ASP.NET Core / EF Core / Azure",
    description:
      "A residence life operations portal deployed to 25+ active staff users for schedules, resident records, room checks, sweeps, incident reports, and PDF exports.",
    highlights: [
      "Replaced manual forms and duplicate entry with structured workflows for day-to-day residence life operations.",
      "Implemented Microsoft Entra ID sign-in and role-based access so staff only see assigned hall data and authorized functions.",
      "Covered scheduling, authentication, and resident-management logic with xUnit and delivered updates to Azure Web App through GitHub Actions.",
    ],
    github: "https://github.com/cezarpedroso/eltse-hall",
    slides: [
      {
        label: "Portal Login",
        source: projectMedia("wpu-residence-life/portal-login.png"),
        kind: "image",
      },
      {
        label: "Residence Life Home",
        source: projectMedia("wpu-residence-life/portal-home.png"),
        kind: "image",
      },
      {
        label: "Room Check Workflow",
        source: projectMedia("wpu-residence-life/dorm-check.png"),
        kind: "image",
      },
      {
        label: "Incident Report Workflow",
        source: projectMedia("wpu-residence-life/incident-report.png"),
        kind: "image",
      },
    ],
  },
  {
    id: "005",
    title: "Citation Management System",
    year: "2025",
    type: "Internal Systems",
    status: "Internal System",
    stack: "React / TypeScript / Express / PostgreSQL",
    description:
      "A PostgreSQL-backed municipal workflow that moves citation issuance, administration, and citizen responses online for the City of Oskaloosa.",
    highlights: [
      "Added driver's-license barcode scanning and third-party geocoding to reduce manual entry for driver and location data.",
      "Separates officer, administrator, and citizen workflows with role-based access control, citation search, and online response paths.",
      "Supports infraction management, media uploads, printable citations, analytics, and audit logs for operational accountability.",
    ],
    slides: [
      {
        label: "Public Citation Search",
        source: projectMedia("citation-management-system/public-search.jpg"),
        kind: "image",
      },
      {
        label: "Administrative Dashboard",
        source: projectMedia("citation-management-system/dashboard.jpg"),
        kind: "image",
      },
      {
        label: "Citation Detail",
        source: projectMedia("citation-management-system/citation-detail.jpg"),
        kind: "image",
      },
      {
        label: "Printable Citation",
        source: projectMedia(
          "citation-management-system/printable-citation.png",
        ),
        kind: "image",
      },
    ],
  },
];

const projectsInDisplayOrder = [...projects].sort((a, b) =>
  a.id.localeCompare(b.id),
);

function ProjectCarousel({
  slides,
  onClose,
}: {
  slides: Slide[];
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

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
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")} — {slide.label}
          </span>
          <div className="flex items-center gap-3">
            {slide.kind !== "image" && (
              <a
                href={slide.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-primary hover:text-secondary transition-colors uppercase"
              >
                <ExternalLink className="w-3 h-3" />
                Open {slide.kind === "pdf" ? "PDF" : "Report"}
              </a>
            )}
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close preview"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div
          className={`relative bg-background/60 overflow-hidden ${
            slide.kind === "image"
              ? "aspect-video"
              : "h-[70vh] min-h-[32rem] max-h-[52rem]"
          }`}
        >
          {slide.kind === "image" ? (
            <img
              src={slide.source}
              alt={slide.label}
              className="w-full h-full object-contain object-center"
              loading="lazy"
            />
          ) : (
            <iframe
              key={slide.source}
              src={
                slide.kind === "pdf"
                  ? `${slide.source}#page=1&view=FitH&toolbar=1&navpanes=0`
                  : slide.source
              }
              title={slide.label}
              className="w-full h-full border-0 bg-white"
              loading="lazy"
              sandbox={slide.kind === "document" ? "" : undefined}
            />
          )}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30 z-10" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30 z-10" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30 z-10" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30 z-10" />
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors z-10 bg-black/55 rounded p-1"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors z-10 bg-black/55 rounded p-1"
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
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">
          01 Projects
        </h2>

        <div className="space-y-10">
          {projectsInDisplayOrder.map((project) => (
            <article key={project.id} className="pt-6 border-t border-border">
              <div className="mb-3">
                <div className="font-mono text-xs tracking-wider text-muted-foreground mb-2">
                  PROJECT {project.id}
                </div>
                {project.slides.length > 0 ? (
                  <button
                    onClick={() => toggleCarousel(project.id)}
                    className="text-left group w-full"
                    aria-expanded={openCarousel === project.id}
                  >
                    <h3 className="font-sans font-medium text-2xl text-foreground mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2 flex-wrap">
                      {project.title}
                      <span className="border border-primary/30 bg-primary/5 px-2.5 py-1.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase transition-colors group-hover:border-primary/60 group-hover:text-primary">
                        {openCarousel === project.id ? "CLOSE ↑" : "PREVIEW ↓"}
                      </span>
                    </h3>
                  </button>
                ) : (
                  <h3 className="font-sans font-medium text-2xl text-foreground mb-1">
                    {project.title}
                  </h3>
                )}
                <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs tracking-wider text-muted-foreground uppercase mt-2">
                  <span>
                    TYPE:{" "}
                    <span className="text-foreground/80">{project.type}</span>
                  </span>
                  <span>
                    YEAR:{" "}
                    <span className="text-foreground/80">{project.year}</span>
                  </span>
                  <span>
                    STATUS:{" "}
                    <span className="text-foreground/80">{project.status}</span>
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                    Stack:
                  </span>
                  {project.stack.split(" / ").map((technology) => (
                    <span
                      key={technology}
                      className="border border-border/70 bg-muted/20 px-2 py-1 font-mono text-[10px] tracking-wide text-foreground/75"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <p className="font-sans text-sm text-foreground/80 leading-relaxed max-w-2xl mb-5 mt-4">
                {project.description}
              </p>

              <ul className="max-w-2xl space-y-2 pl-5 mb-5 list-disc marker:text-primary">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="font-sans text-sm text-foreground/75 leading-relaxed pl-1"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <AnimatePresence>
                {openCarousel === project.id && (
                  <ProjectCarousel
                    slides={project.slides}
                    onClose={() => setOpenCarousel(null)}
                  />
                )}
              </AnimatePresence>

              {(project.live || project.github) && (
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-primary hover:text-secondary transition-colors uppercase hover:underline underline-offset-4"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit Live Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-primary hover:text-secondary transition-colors uppercase hover:underline underline-offset-4"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      View on GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
