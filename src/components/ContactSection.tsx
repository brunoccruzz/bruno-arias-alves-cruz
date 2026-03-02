import ScrollReveal from "./ScrollReveal";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="section-container text-center">
        <ScrollReveal>
          <span className="font-mono text-primary text-sm">05. Contato</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Vamos <span className="glow-text">conversar</span>?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Estou em busca de oportunidades de estágio em desenvolvimento. Sinta-se à vontade para entrar em contato!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:seu-email@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Vamos conversar
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
