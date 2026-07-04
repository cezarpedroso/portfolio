import { motion } from "framer-motion";

const projects = [
  {
    id: "001",
    title: "Citation Management System",
    year: "2024",
    type: "Internal Systems",
    role: "Lead Developer",
    stack: "C# / .NET / SQL Server / Entity Framework",
    description: "Built for a local police department. A complex system for managing citations, workflows, and data with consistency and auditability. Focused on role-based access, audit trails, and reliable Entity Framework integration.",
    github: "https://github.com/cezarpedroso"
  },
  {
    id: "002",
    title: "SQL Schema Architect",
    year: "2023",
    type: "Developer Tooling",
    role: "Author",
    stack: "C# / .NET / SQL / EF Core / CLI",
    description: "A CLI tool that parses SQL schema files and auto-generates Entity Framework Core models, DbContext, and configuration files for C# backends — eliminating repetitive manual work and reducing setup errors.",
    github: "https://github.com/cezarpedroso"
  },
  {
    id: "003",
    title: "Backend API Service",
    year: "2023",
    type: "Software Development",
    role: "Developer",
    stack: "TypeScript / Node.js / PostgreSQL",
    description: "A structured REST API service built with reliability and maintainability as primary concerns. Clean data modeling, proper error handling, and clear interfaces throughout.",
    github: "https://github.com/cezarpedroso"
  },
  {
    id: "004",
    title: "Additional Project",
    year: "2023",
    type: "Software Development",
    role: "Developer",
    stack: "Placeholder",
    description: "Placeholder for another meaningful software project. Built with a focus on practical architecture, disciplined execution, and long-term usability.",
    github: "https://github.com/cezarpedroso"
  }
];

export function Work() {
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
            <article key={project.id} className="pt-6 border-t border-border group">
              <div className="mb-3">
                <div className="font-mono text-xs tracking-wider text-muted-foreground mb-2">PROJECT {project.id}</div>
                <h3 className="font-sans font-medium text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  <span>TYPE: <span className="text-foreground/80">{project.type}</span></span>
                  <span>YEAR: <span className="text-foreground/80">{project.year}</span></span>
                  <span>ROLE: <span className="text-foreground/80">{project.role}</span></span>
                  <span>STACK: <span className="text-foreground/80">{project.stack}</span></span>
                </div>
              </div>

              <p className="font-sans text-sm text-foreground/80 leading-relaxed max-w-2xl mb-5 mt-4">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest text-primary hover:text-secondary transition-colors uppercase hover:underline underline-offset-4"
                data-testid={`link-github-${project.id}`}
              >
                View on GitHub &rarr;
              </a>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
