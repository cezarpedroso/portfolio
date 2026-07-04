import { motion } from "framer-motion";
import pfpPath from "@assets/pfp_1783130743782.png";

const timelineItems = [
  {
    id: "01",
    year: "2022",
    label: "The Start",
    description: "Began studying computer science and software engineering. First exposure to backend systems, databases, and the fundamentals of building software that actually works.",
    image: pfpPath,
  },
  {
    id: "02",
    year: "2023",
    label: "Building Depth",
    description: "Moved into practical projects — writing real systems, learning C# and .NET, developing tools that solve actual problems. Began cultivating a preference for maintainability over cleverness.",
    image: pfpPath,
  },
  {
    id: "03",
    year: "2024 – Now",
    label: "Professional Work",
    description: "Contributing to production systems as a Software Engineering Intern. Focused on backend engineering, security-conscious development, and building the kind of depth that makes a developer reliable.",
    image: pfpPath,
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
                <div className="relative w-full aspect-[4/3] overflow-hidden border border-border/60 mb-6">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover object-top opacity-80"
                  />
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40" />
                  <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/60 uppercase tracking-widest bg-black/30 px-1 py-0.5">
                    {item.year}
                  </div>
                </div>

                {/* Timeline dot sits on the connecting line */}
                <div className="hidden md:flex items-center mb-5">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-primary bg-background relative z-10" />
                </div>

                <div className="font-mono text-xs tracking-widest text-primary uppercase mb-2">{item.year}</div>
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
