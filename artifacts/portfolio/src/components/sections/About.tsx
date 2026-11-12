import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import devopsDayPath from "../../assets/devops.jpeg";
import techFusePath from "../../assets/techfuse-2026.jpg";
import honorsAwardPath from "../../assets/honors.jpeg";
import graduationPath from "../../assets/grad.jpeg";

type AboutSlide = {
  id: string;
  year: string;
  label: string;
  description: string;
  source: string;
  alt: string;
};

const aboutSlides: AboutSlide[] = [
  {
    id: "01",
    year: "2025",
    label: "DevOpsDays Des Moines",
    description:
      "Attended DevOpsDays Des Moines to learn from engineers working across cloud, infrastructure, and software delivery and to connect with Iowa's technology community.",
    source: devopsDayPath,
    alt: "Cezar Pedroso at DevOpsDays Des Moines 2025",
  },
  {
    id: "02",
    year: "2026",
    label: "TechFuse Des Moines",
    description:
      "Returned in 2026 as the conference became TechFuse, continuing the same focus on professional development, new ideas, and conversations with local practitioners.",
    source: techFusePath,
    alt: "Cezar Pedroso at TechFuse Des Moines 2026",
  },
  {
    id: "03",
    year: "2026",
    label: "Academic Achievement Award",
    description:
      "Received the Academic Achievement Award in Applied Computer Science from my university honors program for excellence in academic performance.",
    source: honorsAwardPath,
    alt: "Cezar Pedroso receiving an academic achievement award",
  },
  {
    id: "04",
    year: "2026",
    label: "B.A. in Software Engineering",
    description:
      "Graduated with a B.A. in Software Engineering and a minor in Information Technology, earning a 3.7 GPA and celebrating the completion of this milestone.",
    source: graduationPath,
    alt: "Cezar Pedroso celebrating his college graduation",
  },
];

export function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = aboutSlides[currentSlide];

  const showPrevious = () => {
    setCurrentSlide((current) =>
      current === 0 ? aboutSlides.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setCurrentSlide((current) =>
      current === aboutSlides.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="mb-10 font-mono text-sm tracking-widest text-primary uppercase">
          04 About
        </h2>

        <div className="mb-16 max-w-3xl">
          <h3 className="mb-6 font-sans text-2xl font-medium text-foreground md:text-3xl">
            A little about me
          </h3>
          <div className="space-y-5 font-sans text-base font-light leading-relaxed text-foreground/85 md:text-lg">
            <p>
              I'm a software engineer originally from Curitiba, Brazil, now
              based in Iowa. I enjoy building software that solves real
              problems, especially when it involves backend systems, software
              architecture, and figuring out how things work under the hood.
            </p>
            <p>
              Outside of programming, I'm usually fueled by coffee, playing
              volleyball, or reading about history and philosophy. I've always
              been curious about not just how things work, but why they work the
              way they do. That curiosity naturally finds its way into how I
              approach software engineering.
            </p>
            <p>
              I graduated with a B.A. in Software Engineering and a minor in
              Information Technology. Whether I'm building something new,
              exploring an unfamiliar subject, or getting into a good
              conversation about history over coffee, I'm always looking for
              something new to learn.
            </p>
          </div>
        </div>

        <div
          className="overflow-hidden border border-border/70 bg-muted/10"
          aria-label="About Cezar photo gallery"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={slide.id}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.75fr)]"
              aria-live="polite"
            >
              <div className="relative flex h-[24rem] items-center justify-center overflow-hidden bg-black/20 sm:h-[34rem] lg:h-[32rem]">
                <img
                  src={slide.source}
                  alt={slide.alt}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-primary/50" />
                <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-primary/50" />
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-primary/50" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-primary/50" />
              </div>

              <div className="flex min-h-64 flex-col justify-between border-t border-border/70 p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4 font-mono text-[10px] tracking-widest uppercase">
                    <span className="text-primary">Archive {slide.id}</span>
                    <span className="text-muted-foreground">{slide.year}</span>
                  </div>
                  <h3 className="mb-4 font-sans text-2xl font-medium text-foreground">
                    {slide.label}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-foreground/70">
                    {slide.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between gap-4">
                  <div className="flex gap-2" aria-label="Choose gallery slide">
                    {aboutSlides.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 w-6 transition-colors ${
                          index === currentSlide ? "bg-primary" : "bg-border"
                        }`}
                        aria-label={`Show ${item.label}`}
                        aria-current={index === currentSlide ? "true" : undefined}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPrevious}
                      className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label="Previous about photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label="Next about photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
