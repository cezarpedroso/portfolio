import { useEffect } from "react";
import { Download, FileText, X } from "lucide-react";

const resumeUrl = `${import.meta.env.BASE_URL}Cezar_Pedroso_Resume.pdf`;

type ResumeViewerProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeViewer({ open, onClose }: ResumeViewerProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 p-2 backdrop-blur-md sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-viewer-title"
    >
      <div className="flex h-full min-h-0 flex-col border border-border bg-background shadow-2xl">
        <header className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <FileText className="h-4 w-4 text-primary" />
            <div>
              <h2
                id="resume-viewer-title"
                className="font-sans text-sm font-medium text-foreground"
              >
                Cezar Pedroso - Resume
              </h2>
              <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
                Secure local document preview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              download="Cezar_Pedroso_Resume.pdf"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-primary uppercase transition-colors hover:text-secondary"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
            <button
              type="button"
              onClick={onClose}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close resume viewer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 bg-muted/20 p-2 sm:p-3">
          <iframe
            src={`${resumeUrl}#page=1&view=FitH&toolbar=1&navpanes=0`}
            title="Cezar Pedroso resume"
            className="h-full w-full border-0 bg-white"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
