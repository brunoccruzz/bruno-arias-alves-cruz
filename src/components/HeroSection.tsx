import { ArrowDown, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center tech-grid-bg overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="section-container text-center relative z-10">
        {/* Terminal-style tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="font-mono text-sm text-muted-foreground">
            open_to_work<span className="text-primary">()</span>
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Bruno Arias{" "}
          <span className="glow-text">Alves Cruz</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up font-light" style={{ animationDelay: "0.2s" }}>
          Estudante de Engenharia de Software | Desenvolvedor em Formação
        </p>

        <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Apaixonado por tecnologia, desenvolvimento backend e construção de soluções eficientes e escaláveis.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:scale-105"
          >
            Ver Projetos
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium card-hover"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium card-hover"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary/60 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
