import { motion } from "framer-motion";

type ExperienceHighlight = {
  label: string;
  text: string;
};

type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  focus: string;
  highlights: ExperienceHighlight[];
};

const experiences: ExperienceEntry[] = [
  {
    id: "001",
    title: "Application Developer Intern",
    company: "Homesteaders Life Company",
    location: "West Des Moines, IA",
    period: "May 2026 - Aug 2026",
    focus: "Claims Correspondence / Backend Services",
    highlights: [
      {
        label: "Backend & APIs",
        text: "Built C# and ASP.NET Core services and REST APIs for a production life-insurance claims correspondence platform, automating workflows and implementing business logic, CRUD operations, and editable email templates.",
      },
      {
        label: "Data",
        text: "Modeled SQL Server data with Entity Framework Core, including relationships, migrations, and queries that support claims processing and correspondence management.",
      },
      {
        label: "Security",
        text: "Secured API endpoints with OAuth 2.0, Microsoft Entra ID, JWT authorization, and role-based access control.",
      },
      {
        label: "Reliability",
        text: "Added xUnit and Postman coverage, investigated production issues, and used Serilog for structured logging and change auditing.",
      },
      {
        label: "Delivery",
        text: "Translated stakeholder requirements into backend features through code reviews, pull requests, and Azure DevOps CI/CD workflows.",
      },
    ],
  },
  {
    id: "002",
    title: "Software Engineer Intern",
    company: "William Penn University",
    location: "Oskaloosa, IA",
    period: "Sep 2025 - Present",
    focus: "Full-Stack Systems / Campus & Municipal Software",
    highlights: [
      {
        label: "Scope",
        text: "Independently developed and maintained four concurrent full-stack applications using React, TypeScript, Express, ASP.NET Core, PostgreSQL, and MySQL.",
      },
      {
        label: "Oskaloosa Police Department",
        text: "Built a citation management system with driver's-license barcode scanning, third-party geocoding, role-based access control, and automated tests using Vitest and Playwright.",
      },
      {
        label: "Scheduling & Enrollment",
        text: "Developed ASP.NET Core and EF Core services for course, professor, and classroom assignments under scheduling constraints, including demand forecasting from enrollment history and GitHub Actions delivery to Azure.",
      },
      {
        label: "52577 Scholarship Foundation",
        text: "Built a scholarship application and review system for students, administrators, and counselors, including approval workflows and academic-performance tracking.",
      },
      {
        label: "University Recruitment",
        text: "Delivered a recruitment platform for prospective students while giving admissions staff and coaches tools to manage profiles, application progress, and decisions.",
      },
    ],
  },
  {
    id: "003",
    title: "Self-Employed Contract Software Engineer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jul 2025 - Present",
    focus: "Custom Software / Industrial Operations",
    highlights: [
      {
        label: "Ownership",
        text: "Delivered custom software and asset-management systems for four mechanical and industrial maintenance companies in Brazil, owning requirements, architecture, testing, cloud delivery, and client support.",
      },
      {
        label: "Operational Improvement",
        text: "Replaced paper workflows with barcode-based asset tracking and preventive-maintenance software for industrial compressors.",
      },
      {
        label: "Full-Stack Delivery",
        text: "Built C#, .NET, React, Blazor, and PostgreSQL applications for inventory, maintenance scheduling, work orders, and reporting.",
      },
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
        <h2 className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">
          02 Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <article key={exp.id} className="pt-6 border-t border-border">
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

              <div className="font-mono text-xs tracking-wider text-primary mb-4 uppercase">
                FOCUS: <span className="text-foreground/80">{exp.focus}</span>
              </div>

              <ul className="max-w-3xl space-y-3 pl-5 list-disc marker:text-primary">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight.label}
                    className="font-sans text-sm text-foreground/80 leading-relaxed pl-1"
                  >
                    <strong className="font-medium text-foreground">
                      {highlight.label}:
                    </strong>{" "}
                    {highlight.text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
