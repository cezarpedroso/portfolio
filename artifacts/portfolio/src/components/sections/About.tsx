import { motion } from "framer-motion";
import devopsDayPath from "../../assets/devops.jpeg";
import techFusePath from "../../assets/techfuse-2026.jpg";
import honorsAwardPath from "../../assets/honors.jpeg";
import graduationPath from "../../assets/grad.jpeg";

type TimelineImage = {
  source: string;
  alt: string;
  position: string;
  badge?: string;
};

type TimelineItem = {
  id: string;
  year: string;
  label: string;
  description: string;
  images: TimelineImage[];
};

const timelineItems: TimelineItem[] = [
  {
    id: "01",
    year: "2025 - 2026",
    label: "DevOpsDays to TechFuse",
    description:
      "I attended DevOpsDays Des Moines in 2025 and returned in 2026 as the conference became TechFuse. Staying involved across both events reflects how I'm part of Iowa's technology community, connecting with engineers, learning from their experiences, and contributing to the conversations shaping what's next.",
    images: [
      {
        source: devopsDayPath,
        alt: "Cezar Pedroso at DevOpsDays Des Moines 2025",
        position: "center 30%",
        badge: "DEVOPSDAYS / 2025",
      },
      {
        source: techFusePath,
        alt: "Cezar Pedroso at TechFuse Des Moines 2026",
        position: "center 35%",
        badge: "TECHFUSE / 2026",
      },
    ],
  },
  {
    id: "02",
    year: "2026",
    label: "Academic Achievement Award",
    description:
      "Received the Academic Achievement Award in Applied Computer Science from my university honors program for excellence in academic performance.",
    images: [
      {
        source: honorsAwardPath,
        alt: "Cezar Pedroso receiving an academic achievement award",
        position: "center",
      },
    ],
  },
  {
    id: "03",
    year: "2026",
    label: "Graduated College",
    description:
      "Graduated with a B.A. in Software Engineering and a minor in Information Technology, earning a 3.7 GPA and celebrating the completion of this milestone.",
    images: [
      {
        source: graduationPath,
        alt: "Cezar Pedroso celebrating his college graduation",
        position: "center",
      },
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">
          04 About
        </div>

        <p className="font-sans font-light text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mb-16">
          I'm a software engineer with a passion for backend development,
          software architecture, and building systems that solve real-world
          problems. I enjoy understanding how software works before deciding how
          to build it, with a focus on designing clean APIs, modeling data
          effectively, and creating applications that are secure, maintainable,
          and built to last. I value writing code that is easy to understand,
          continuously improving my technical skills, and developing software
          that delivers meaningful, long-term value rather than simply following
          trends.
        </p>

        {/* Horizontal timeline — photo + text spread across section */}
        <div className="relative">
          <div className="hidden md:block absolute top-[120px] left-8 right-8 h-px bg-border/50" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className="flex flex-col"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[5/4] overflow-hidden border border-border/60 mb-6">
                  <div
                    className={`grid h-full ${
                      item.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {item.images.map((image) => (
                      <div
                        key={image.source}
                        className="relative min-w-0 overflow-hidden"
                      >
                        <img
                          src={image.source}
                          alt={image.alt}
                          className="w-full h-full object-cover opacity-80"
                          style={{ objectPosition: image.position }}
                        />
                        {image.badge && (
                          <span className="absolute bottom-2 left-2 bg-background/85 px-2 py-1 font-mono text-[9px] tracking-wider text-foreground uppercase backdrop-blur-sm">
                            {image.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40" />
                </div>

                {/* Timeline dot sits on the connecting line */}
                <div className="hidden md:flex items-center mb-5">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-primary bg-background relative z-10" />
                </div>

                <div className="font-mono text-xs tracking-widest text-primary uppercase mb-2">
                  {item.year}
                </div>
                <h3 className="font-sans font-medium text-base text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="font-sans text-sm text-foreground/65 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
