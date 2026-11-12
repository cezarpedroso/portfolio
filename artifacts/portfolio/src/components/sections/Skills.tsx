import { motion } from "framer-motion";
import {
  Braces,
  CloudCog,
  Code2,
  Database,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
  primary?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    icon: Code2,
    primary: true,
    skills: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "Node.js", "Express"],
  },
  {
    title: "Frontend",
    icon: Braces,
    skills: ["React", "TypeScript", "JavaScript", "Blazor", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
    skills: ["Azure", "Docker", "GitHub Actions", "Azure DevOps", "Git"],
  },
  {
    title: "Testing & Security",
    icon: ShieldCheck,
    skills: ["xUnit", "Vitest", "Playwright", "Postman", "OAuth 2.0", "Entra ID", "JWT", "RBAC", "Serilog"],
  },
  {
    title: "Additional",
    icon: Wrench,
    skills: ["Python", "AWS", "Linux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="mb-10 font-mono text-base tracking-widest text-primary uppercase">
          03 Skills
        </h2>

        <div className="grid grid-cols-1 gap-px border border-border/60 bg-border/60 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className={`bg-background p-6 sm:p-7 ${
                  group.primary ? "shadow-[inset_3px_0_0_hsl(var(--primary))]" : ""
                }`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-mono text-base tracking-widest text-foreground uppercase">
                    {group.title}
                  </h3>
                  {group.primary && (
                    <span className="border border-primary/40 px-2.5 py-1 font-mono text-[10px] tracking-wider text-primary uppercase">
                      Core Focus
                    </span>
                  )}
                </div>

                <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border border-border/70 bg-muted/20 px-3 py-2 font-mono text-sm tracking-wide text-foreground/80"
                      data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
