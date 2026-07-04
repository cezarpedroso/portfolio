export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border/60">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-end">
        <div className="flex items-center gap-6 font-mono text-xs tracking-widest uppercase text-muted-foreground">
          <a href="#work" data-testid="nav-work" className="hover:text-primary transition-colors">01 Work</a>
          <a href="#experience" data-testid="nav-experience" className="hover:text-primary transition-colors">02 Experience</a>
          <a href="#skills" data-testid="nav-skills" className="hover:text-primary transition-colors">03 Skills</a>
          <a href="#about" data-testid="nav-about" className="hover:text-primary transition-colors">04 About</a>
          <a href="#contact" data-testid="nav-contact" className="hover:text-primary transition-colors">05 Contact</a>
        </div>
      </div>
    </nav>
  );
}
