import { motion } from "framer-motion";

const experiences = [
  {
    id: "001",
    title: "Application Developer Intern",
    company: "Homesteaders Life Company",
    period: "May 2026 - Aug 2026",
    focus: "Claims Correspondence / Backend Services",
    highlights: [
      "Built backend services and REST APIs in C# and ASP.NET Core for a production claims-correspondence platform.",
      "Designed and maintained Entity Framework Core models and database migrations that supported claims processing.",
      "Refactored shared modules and optimized document-processing workflows, improving maintainability and performance.",
      "Secured the platform with OAuth 2.0 and Microsoft Entra ID while adding structured logging with Serilog and automated tests with xUnit and Postman.",
      "Turned stakeholder requirements into production improvements.",
    ],
  },
  {
    id: "002",
    title: "Software Engineer Intern",
    company: "William Penn University",
    period: "Sep 2025 - Present",
    focus: "Full-Stack Systems / Campus Software",
    highlights: [
      "Built a citation management system for the Oskaloosa Police Department with React, TypeScript, Express, and PostgreSQL, including license scanning to auto-populate citations and multi-role officer access.",
      "Automated citation-system builds and deployments with GitHub Actions and an AWS CI/CD pipeline.",
      "Built a university scheduling and enrollment platform with ASP.NET Core, EF Core, and MySQL to assign courses, professors, and classrooms under scheduling constraints.",
      "Added a backend forecasting service that uses historical enrollment data to recommend course schedules and contributed features to a local geofencing and advertising application.",
    ],
  },
  {
    id: "003",
    title: "Contract Software Engineer",
    company: "Self-Employed",
    period: "Jul 2025 - Present",
    focus: "Custom Software / Industrial Operations",
    highlights: [
      "Delivered custom software and asset-management systems for four mechanical and industrial maintenance companies in Brazil, owning the lifecycle from requirements to cloud deployment and client support.",
      "Replaced paper-based workflows with a barcode-based asset tracking and preventive-maintenance system for industrial compressors.",
      "Built full-stack apps with C#, .NET, React, Blazor, and PostgreSQL for inventory, maintenance scheduling, work orders, and reporting.",
    ],
  },
  {
    id: "004",
    title: "Software Engineering Intern",
    company: "VTEX",
    period: "May 2024 - Aug 2024",
    focus: "CRM Platform / Backend Services",
    highlights: [
      "Developed backend services for a CRM platform using C#, .NET, ASP.NET Core, and REST APIs.",
      "Designed relational data models and data access with EF Core, LINQ, and schema migrations.",
      "Built reusable Blazor components, integrated APIs, and fixed backend defects through testing and code review.",
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
