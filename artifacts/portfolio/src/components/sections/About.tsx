import { motion } from "framer-motion";

const timelineItems = [
  {
    id: "01",
    year: "2022",
    label: "The Start",
    description: "Began studying computer science and software engineering. First exposure to backend systems, databases, and the fundamentals of building software that actually works.",
  },
  {
    id: "02",
    year: "2023",
    label: "Building Depth",
    description: "Moved into practical projects — writing real systems, learning C# and .NET, developing tools that solve actual problems. Began cultivating a preference for maintainability over cleverness.",
  },
  {
    id: "03",
    year: "2024 – Now",
    label: "Professional Work",
    description: "Contributing to production systems as a Software Engineering Intern. Focused on backend engineering, security-conscious development, and building the kind of depth that makes a developer reliable.",
  }
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
        <div className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">04 About</div>

        <p className="font-sans font-light text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mb-16">
          I am a software engineer focused on becoming the kind of developer people can rely on when the work needs to be clear, secure, and maintainable. I care about building systems with practical architecture, disciplined execution, and enough depth to survive real use.
        </p>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line across all 3 items */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border/60" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative flex flex-col"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center mb-8">
                  <div className="w-3 h-3 rounded-full border-2 border-primary bg-background relative z-10" />
                </div>

                {/* Year badge */}
                <div className="font-mono text-xs tracking-widest text-primary uppercase mb-3 flex items-center gap-3">
                  <span className="md:hidden w-2 h-2 rounded-full bg-primary/60 inline-block" />
                  {item.year}
                </div>

                {/* Large decorative number */}
                <div className="font-mono text-6xl font-medium text-border/60 leading-none mb-3 select-none">
                  {item.id}
                </div>

                <h3 className="font-sans font-medium text-base text-foreground mb-2">{item.label}</h3>
                <p className="font-sans text-sm text-foreground/65 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
