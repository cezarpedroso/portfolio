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

export function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">03 About</div>

        <p className="font-sans font-light text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mb-16">
          I am a software engineer focused on becoming the kind of developer people can rely on when the work needs to be clear, secure, and maintainable. I care about building systems with practical architecture, disciplined execution, and enough depth to survive real use. My work is shaped by curiosity, consistency, and a preference for long-term quality over short-term trends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border/60 bg-border/60">
          {timelineItems.map((item) => (
            <div key={item.id} className="bg-background flex flex-col">
              <div className="aspect-[4/3] bg-muted/30 relative overflow-hidden border-b border-border/60">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground/60 uppercase">
                    [ {item.placeholder} ]
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground/40 mt-2 uppercase tracking-widest">
                    Add photo here
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-xs text-primary uppercase tracking-widest">{item.id}</span>
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">{item.year}</span>
                </div>
                <h3 className="font-sans font-medium text-base text-foreground mb-2">{item.label}</h3>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
