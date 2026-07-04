import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Citation Management System",
    year: "2024",
    description: "Built for a local police department. A complex system focused on managing citations with practical workflows and reliable data handling.",
    tech: "C#, .NET, SQL Server, Entity Framework",
  },
  {
    title: "SQL Schema Architect",
    year: "2023",
    description: "A tool that transforms SQL files into EF Core code for C# backends, reflecting growth in backend engineering, architecture, and automation.",
    tech: "C#, .NET, SQL, EF Core, CLI tooling",
  },
  {
    title: "Additional Project",
    year: "2023",
    description: "Placeholder for another meaningful software project. Built with reliability and maintainability as primary concerns.",
    tech: "TypeScript, Node.js, PostgreSQL",
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 border-t border-accent/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-12 font-serif text-sm tracking-widest text-primary">II. Selected Work</div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={index} className="pt-8 border-t border-border/60 group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="font-serif text-3xl text-foreground mb-2 md:mb-0 group-hover:text-primary transition-colors">{project.title}</h3>
                <span className="font-sans text-sm text-muted-foreground">{project.year}</span>
              </div>
              <p className="font-sans text-base text-foreground/80 leading-relaxed max-w-2xl mb-4">
                {project.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
                  {project.tech}
                </span>
                <a 
                  href="#" 
                  className="font-sans text-sm font-medium text-primary hover:text-secondary transition-colors underline-offset-4 hover:underline"
                  data-testid={`link-project-${index}`}
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
