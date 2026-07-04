import { motion } from "framer-motion";

const timelineItems = [
  {
    id: "01",
    year: "2022",
    label: "The Start",
    description: "Began studying computer science and software engineering. First exposure to backend systems, databases, and the fundamentals of building software that works.",
    placeholder: "EARLY YEARS / 2022"
  },
  {
    id: "02",
    year: "2023",
    label: "Building Depth",
    description: "Moved into practical projects — writing real systems, learning C# and .NET, developing tools that solve actual problems. Began cultivating a preference for maintainability over cleverness.",
    placeholder: "BUILDING / 2023"
  },
  {
    id: "03",
    year: "2024 – Present",
    label: "Professional Work",
    description: "Contributing to production systems as a Software Engineering Intern. Focused on backend engineering, security-conscious development, and building the kind of depth that makes a developer reliable.",
    placeholder: "PROFESSIONAL / 2024"
  }
];

function TimelinePhoto({ item }: { item: typeof timelineItems[0] }) {
  return (
    <div className="relative aspect-[3/4] bg-muted/30 border border-border/60 overflow-hidden w-full max-w-[240px]">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50 uppercase">
          [ {item.placeholder} ]
        </span>
        <span className="font-mono text-[9px] text-muted-foreground/30 mt-1.5 uppercase tracking-widest">
          Add photo
        </span>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">04 About</div>

        <p className="font-sans font-light text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mb-20">
          I am a software engineer focused on becoming the kind of developer people can rely on when the work needs to be clear, secure, and maintainable. I care about building systems with practical architecture, disciplined execution, and enough depth to survive real use. My work is shaped by curiosity, consistency, and a preference for long-term quality over short-term trends.
        </p>

        <div className="space-y-20">
          {timelineItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex flex-col md:flex-row items-start gap-10 md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}
              >
                <div className="flex-shrink-0">
                  <TimelinePhoto item={item} />
                </div>

                <div className="flex-1 flex flex-col justify-center pt-2">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-mono text-xs text-primary uppercase tracking-widest border-l-2 border-primary pl-2">{item.id}</span>
                    <span className="font-mono text-xs text-muted-foreground tracking-wider">{item.year}</span>
                  </div>
                  <h3 className="font-sans font-medium text-xl text-foreground mb-3">{item.label}</h3>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed max-w-sm">{item.description}</p>
                  <div className="mt-6 w-12 h-px bg-border" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
