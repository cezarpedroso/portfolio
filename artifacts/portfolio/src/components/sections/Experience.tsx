import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: "001",
    title: "Software Engineering Intern",
    period: "2024 – Present",
    focus: "Backend Engineering / Production Systems",
    description: "Focused on meaningful PRs, backend contribution, and learning deeply. Contributing to production-quality systems through backend services, code reviews, and maintaining high standards for readable, tested, and maintainable code."
  },
  {
    id: "002",
    title: "Backend Development Experience",
    period: "[Placeholder]",
    focus: "Backend / API / Databases",
    description: "Placeholder for backend, API design, and database work. Systems built with clear interfaces, proper data modeling, and attention to reliability under load."
  },
  {
    id: "003",
    title: "Cybersecurity Learning & Practice",
    period: "[Placeholder]",
    focus: "Security / Networking / Systems",
    description: "Placeholder for security-focused experience, networking, systems hardening, or cybersecurity coursework and practice."
  },
  {
    id: "004",
    title: "Technical Projects & Independent Work",
    period: "Ongoing",
    focus: "Personal Projects / Architecture / Automation",
    description: "Placeholder for personal projects, architecture experiments, automation tools, and full-stack applications built independently to deepen technical understanding and build real systems."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-12 font-mono text-sm tracking-widest text-primary uppercase">02 Experience</div>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="pt-6 border-t border-border">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 gap-2">
                <h3 className="font-sans font-medium text-lg text-foreground">
                  <span className="font-mono text-xs text-muted-foreground mr-4">ENTRY {exp.id}</span>
                  {exp.title}
                </h3>
                <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  {exp.period}
                </span>
              </div>
              
              <div className="font-mono text-xs tracking-wider text-primary mb-3 uppercase">
                FOCUS: <span className="text-foreground/80">{exp.focus}</span>
              </div>
              
              <p className="font-sans text-sm text-foreground/80 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
