import { motion } from "framer-motion";

const experiences = [
  {
    id: "001",
    title: "Software Developer",
    company: "OskyApp",
    period: "August 2026 – Present",
    focus: "Personal Projects / Architecture / Automation",
    description: "Lead and mentor a team of five developers building a community web application in partnership with the Mahaska Chamber & Development Group. Collaborate with stakeholders to define requirements and features while providing technical direction across architecture, data modeling, reusable components, testing, troubleshooting, and implementation."
  }
  {
    id: "002",
    title: "Application Developer Intern",
    company: "Homesteaders Life Company",
    period: "May 2026 – Present",
    focus: ".NET development / Backend Services ",
    description: "Developed a production claims-correspondence application using C#, ASP.NET Core, Entity Framework Core, and REST APIs to streamline Claims Department workflows. Designed data models and migrations, optimized document-processing functionality, implemented Serilog logging, expanded xUnit and Postman testing, and secured application access with OAuth 2.0 and Microsoft Entra ID while collaborating with stakeholders on enhancements."
  },
  {
    id: "003",
    title: "Software Engineering Intern",
    company: "VTEX",
    period: "Jan 2026 – ",
    focus: "Web Development / Rest APIs / Databases",
    description: "Contributed to a CRM system by developing backend services and REST APIs with C#, .NET, and ASP.NET Core, while designing data models and database access with Entity Framework Core. Developed reusable Blazor components, implemented business logic, integrated APIs, and resolved backend issues through testing, code reviews, and collaboration with engineers and stakeholders."
  },
  {
    id: "004",
    title: "Contract Software Engineer",
    company: "Self-Employed",
    period: "July 2025 – Present",
    focus: "Web Development / Networking / Systems",
    description: "Delivered custom web applications and enterprise asset management systems for four mechanical and industrial maintenance companies in Brazil, developing solutions with C#, .NET, React, Blazor, SQL, and PostgreSQL. Built features for asset tracking, preventive maintenance, work orders, inventory, and reporting while independently managing requirements, architecture, testing, deployment, and ongoing client support."
  },
  {
    id: "005",
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
