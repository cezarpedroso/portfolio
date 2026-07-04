import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "001",
    title: "Citation Management System",
    year: "2024",
    type: "Internal Systems",
    role: "Lead Developer",
    stack: "C# / .NET / SQL Server / Entity Framework",
    problem: "A local police department needed a reliable system to manage citations, workflows, and data with consistency and auditability.",
    solution: "A full citation management platform handling citation creation, assignment, escalation, and reporting. Focused on data integrity, workflow reliability, and operational usability under real conditions.",
    highlights: [
      "Complex relational schema with audit trails and status tracking",
      "Role-based access control and permission management",
      "Optimized SQL queries and reliable Entity Framework integration"
    ]
  },
  {
    id: "002",
    title: "SQL Schema Architect",
    year: "2023",
    type: "Developer Tooling",
    role: "Author",
    stack: "C# / .NET / SQL / EF Core / CLI",
    problem: "Generating EF Core models from SQL schema files required repetitive manual work and was error-prone.",
    solution: "A CLI tool that parses SQL schema files and auto-generates Entity Framework Core code for C# backends — reducing setup time and eliminating manual errors.",
    highlights: [
      "SQL parsing engine with support for multiple schema patterns",
      "Auto-generation of model classes, DbContext, and configuration files",
      "Configurable output matching team conventions"
    ]
  },
  {
    id: "003",
    title: "Additional Project",
    year: "2023",
    type: "Software Development",
    role: "Developer",
    stack: "TypeScript / Node.js / PostgreSQL",
    problem: "Placeholder for another meaningful software project.",
    solution: "Built with reliability and maintainability as primary concerns.",
    highlights: [
      "Structured backend architecture",
      "Clean data modeling",
      "Focus on maintainability and clear interfaces"
    ]
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
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <article key={project.id} className="pt-6 border-t border-border group">
              <div className="mb-4">
                <div className="font-mono text-xs tracking-wider text-muted-foreground mb-2">PROJECT {project.id}</div>
                <h3 className="font-sans font-medium text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-wider text-muted-foreground uppercase pb-6 border-b border-border/50">
                  <span>TYPE: <span className="text-foreground/80">{project.type}</span></span>
                  <span>YEAR: <span className="text-foreground/80">{project.year}</span></span>
                  <span>ROLE: <span className="text-foreground/80">{project.role}</span></span>
                  <span>STACK: <span className="text-foreground/80">{project.stack}</span></span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 mt-6">
                <div className="md:col-span-4 flex flex-col gap-1">
                  <span className="font-mono text-xs tracking-widest text-primary uppercase">Problem</span>
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
                </div>
                <div className="md:col-span-8 flex flex-col gap-1">
                  <span className="font-mono text-xs tracking-widest text-primary uppercase">What I Built</span>
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="mb-6 bg-muted/30 p-6 border border-border/50">
                <span className="font-mono text-xs tracking-widest text-primary uppercase block mb-4">Technical Highlights</span>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="font-sans text-sm text-foreground/80 flex items-start">
                      <span className="text-primary mr-3 mt-[2px] font-mono text-xs">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a 
                  href="#" 
                  className="font-mono text-xs tracking-widest text-primary hover:text-secondary transition-colors uppercase group-hover:underline underline-offset-4"
                  data-testid={`link-project-${project.id}`}
                >
                  View details &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
