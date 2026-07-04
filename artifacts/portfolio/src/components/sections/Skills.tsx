import { motion } from "framer-motion";
import {
  SiPython,
  SiSharp,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiPostgresql,
  SiMysql,
  SiDotnet,
  SiLinux,
  SiDocker,
  SiReact,
  SiNodedotjs,
  SiGithub,
  SiTailwindcss,
  SiSqlite,
} from "react-icons/si";
import { Cloud, Server } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type Skill =
  | { type: "si"; icon: IconType; label: string }
  | { type: "lucide"; icon: LucideIcon; label: string };

const skills: Skill[] = [
  { type: "si", icon: SiSharp, label: "C#" },
  { type: "si", icon: SiDotnet, label: ".NET" },
  { type: "si", icon: SiPython, label: "Python" },
  { type: "si", icon: SiJavascript, label: "JavaScript" },
  { type: "si", icon: SiTypescript, label: "TypeScript" },
  { type: "lucide", icon: Server, label: "SQL Server" },
  { type: "si", icon: SiPostgresql, label: "PostgreSQL" },
  { type: "si", icon: SiMysql, label: "MySQL" },
  { type: "lucide", icon: Cloud, label: "Azure" },
  { type: "lucide", icon: Cloud, label: "AWS" },
  { type: "si", icon: SiDocker, label: "Docker" },
  { type: "si", icon: SiReact, label: "React" },
  { type: "si", icon: SiNodedotjs, label: "Node.js" },
  { type: "si", icon: SiTailwindcss, label: "Tailwind" },
  { type: "si", icon: SiGit, label: "Git" },
  { type: "si", icon: SiGithub, label: "GitHub" },
  { type: "si", icon: SiLinux, label: "Linux" },
  { type: "si", icon: SiSqlite, label: "SQLite" },
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
        <div className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">03 Skills</div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-px border border-border/60 bg-border/60">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="bg-background flex flex-col items-center justify-center gap-2 py-5 px-3 group hover:bg-muted/40 transition-colors"
              data-testid={`skill-${skill.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            >
              {skill.type === "si" ? (
                <skill.icon className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors" />
              ) : (
                <skill.icon className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors" />
              )}
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase group-hover:text-foreground transition-colors text-center leading-tight">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
