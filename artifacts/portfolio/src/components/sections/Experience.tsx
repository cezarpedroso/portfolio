import { motion } from "framer-motion";

const experiences = [
  {
    id: "001",
    title: "Application Developer Intern",
    company: "Homesteaders Life Company",
    period: "May 2026 – Present",
    focus: ".NET development / Backend Services ",
    description: "Developed .NET applications using C#, Blazor, and Entity Framework Core. Contributed to a greenfield application by designing the data layer, implementing business logic, and integrating authentication with Microsoft Entra ID. Developed REST API endpoints that were deployed to production and collaborated using Azure DevOps throughout the development process."
  },
  {
    id: "002",
    title: "Software Engineering Intern",
    company: "AI Equity Alliance",
    period: "September 2025 – December 2025",
    focus: "Web Development / API / Databases",
    description: "Developed software solutions for local businesses, including a full-stack citation management system for the City of Oskaloosa that modernized the citation process for law enforcement and citizens. Contributed to backend development, application design, and feature implementation while conducting research on cybersecurity and artificial intelligence to support technical initiatives and emerging technologies."
  },
  {
    id: "003",
    title: "IT & Web Development Intern",
    company: "Jeremy Empie Web Design LLC.",
    period: "May 2025 – July 2025",
    focus: "Web Development / Networking / Systems",
    description: "Built and maintained 7+ websites for local businesses while supporting server and network maintenance. Managed website updates, plugins, and day-to-day technical support to ensure reliable operation."
  },
  {
    id: "004",
    title: "IT Shadowing Experience",
    company: "Pella Regional Health Center",
    period: "January 2026 – March 2026",
    focus: "Personal Projects / Architecture / Automation",
    description: "Shadowed IT professionals to learn about enterprise server architecture, data storage, wireless infrastructure, healthcare APIs, and SQL-based reporting systems, gaining exposure to the technologies that support large-scale healthcare applications."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">02 Experience</div>

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

              <div className="font-mono text-xs tracking-wider text-primary mb-2 uppercase">
                COMPANY: <span className="font-semibold text-foreground">{exp.company}</span>
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
