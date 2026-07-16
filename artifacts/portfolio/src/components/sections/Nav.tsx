import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  {
    number: "01",
    label: "Projects",
    href: "#projects",
    testId: "nav-projects",
  },
  {
    number: "02",
    label: "Experience",
    href: "#experience",
    testId: "nav-experience",
  },
  { number: "03", label: "Skills", href: "#skills", testId: "nav-skills" },
  { number: "04", label: "About", href: "#about", testId: "nav-about" },
  { number: "05", label: "Contact", href: "#contact", testId: "nav-contact" },
];

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          data-testid="theme-toggle"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          title={`Switch to ${isDark ? "light" : "dark"} mode`}
          className="shrink-0 inline-flex h-8 w-8 items-center justify-center border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
        >
          {isDark ? (
            <Sun className="h-3.5 w-3.5" />
          ) : (
            <Moon className="h-3.5 w-3.5" />
          )}
        </button>

        <div className="flex items-center gap-3 sm:gap-6 font-mono text-xs tracking-widest uppercase text-muted-foreground">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={item.testId}
              className="whitespace-nowrap hover:text-primary transition-colors"
            >
              <span className="sm:hidden">{item.number}</span>
              <span className="hidden sm:inline">
                {item.number} {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
