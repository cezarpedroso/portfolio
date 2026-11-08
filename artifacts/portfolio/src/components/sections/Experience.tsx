import { motion } from "framer-motion";

const experiences = [
  {
    id: "001",
    title: "Application Developer Intern",
    company: "Homesteaders Life Company",
    location: "West Des Moines, IA",
    period: "May 2026 - Aug 2026",
    focus: "Claims Correspondence / Backend Services",
    highlights: [
      "Developed backend services and REST APIs using C# and ASP.NET Core for a production life insurance claims correspondence platform, automating manual workflows and implementing business logic, CRUD operations, and editable email templates.",
      "Designed and maintained SQL Server database models using Entity Framework Core, implementing data relationships, migrations, and queries to support claims processing and correspondence management.",
      "Implemented OAuth 2.0 and Microsoft Entra ID authentication, JWT-based authorization, and role-based access control to secure API endpoints and manage user permissions.",
      "Wrote automated tests using xUnit and Postman, investigated production issues, and integrated Serilog for structured logging and audit tracking of application changes.",
      "Collaborated with stakeholders to translate business requirements into backend features, contributing to code reviews, pull requests, and CI/CD pipelines using Azure DevOps.",
    ],
  },
  {
    id: "002",
    title: "Software Engineer Intern",
    company: "William Penn University",
    location: "Oskaloosa, IA",
    period: "Sep 2025 - Present",
    focus: "Full-Stack Systems / Campus Software",
    highlights: [
      "Independently developed and maintained four concurrent full-stack projects using React, TypeScript, Express, ASP.NET Core, PostgreSQL, and MySQL.",
      "Oskaloosa Police Department: Built a citation management system with driver's license barcode scanning to automatically populate citations, integrated third-party geocoding APIs for street addresses, implemented role-based access control, and wrote automated tests using Vitest and Playwright.",
      "William Penn University - Scheduling System: Developed a course scheduling and enrollment platform using ASP.NET Core, EF Core, and MySQL, handling professor, classroom, and course assignments under scheduling constraints. Built backend services to forecast course demand using historical enrollment data and implemented CI/CD pipelines with GitHub Actions and Azure.",
      "52577 Scholarship Foundation: Developed the foundation's main website and scholarship application system using React, TypeScript, and MySQL, enabling students to apply for scholarships while administrators and counselors review applications, manage approvals, evaluate academic performance, and track grades.",
      "William Penn University - Recruitment System: Built a full-stack recruitment platform using React, TypeScript, and MySQL, allowing prospective students to enter the recruitment process while admissions staff and coaches manage recruit profiles, track application progress, and coordinate recruitment decisions.",
    ],
  },
  {
    id: "003",
    title: "Contract Software Engineer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jul 2025 - Present",
    focus: "Custom Software / Industrial Operations",
    highlights: [
      "Delivered custom software and asset-management systems for 4 mechanical and industrial maintenance companies in Brazil, owning the full lifecycle from requirements and architecture to testing, cloud deployment, and client support.",
      "Replaced paper-based workflows with a barcode-based asset tracking and preventive-maintenance system for industrial compressors.",
      "Built full-stack apps (C#, .NET, React, Blazor, PostgreSQL) for inventory, maintenance scheduling, work orders, and reporting.",
    ],
  },
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
        <div className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">
          02 Experience
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="pt-6 border-t border-border">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 gap-2">
                <h3 className="font-sans font-medium text-lg text-foreground">
                  <span className="font-mono text-xs text-muted-foreground mr-4">
                    ENTRY {exp.id}
                  </span>
                  {exp.title}
                </h3>
                <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  {exp.period}
                </span>
              </div>

              <div className="font-mono text-xs tracking-wider text-primary mb-2 uppercase">
                COMPANY:{" "}
                <span className="font-semibold text-foreground">
                  {exp.company}
                </span>
              </div>

              <div className="font-mono text-xs tracking-wider text-primary mb-2 uppercase">
                LOCATION:{" "}
                <span className="text-foreground/80">{exp.location}</span>
              </div>

              <div className="font-mono text-xs tracking-wider text-primary mb-3 uppercase">
                FOCUS: <span className="text-foreground/80">{exp.focus}</span>
              </div>

              <ul className="max-w-3xl space-y-2 pl-5 list-disc marker:text-primary">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="font-sans text-sm text-foreground/80 leading-relaxed pl-1"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
