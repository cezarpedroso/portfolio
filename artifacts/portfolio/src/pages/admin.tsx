export default function Admin() {
  return (
    <main className="min-h-[100dvh] bg-background text-foreground flex items-center px-6 py-16">
      <section className="w-full max-w-3xl mx-auto">
        <div className="mb-6 font-mono text-xs tracking-[0.25em] text-primary uppercase">
          403 / Admin
        </div>

        <div className="relative border border-border bg-muted/20 px-6 py-10 sm:px-10 sm:py-14">
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/60" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/60" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/60" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/60" />

          <p className="mb-5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Access denied
          </p>
          <h1 className="max-w-2xl font-sans text-3xl sm:text-5xl font-medium leading-tight tracking-tight">
            Are you really trying to hack me? Do better next time
          </h1>

          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex mt-10 font-mono text-xs tracking-widest text-primary uppercase hover:text-secondary hover:underline underline-offset-4 transition-colors"
          >
            Return to portfolio
          </a>
        </div>
      </section>
    </main>
  );
}
