import ScrollReveal from "./ScrollReveal";
import { Brain, Zap, FolderKanban, Users, MessageSquare } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Raciocínio Analítico",
    desc: "Capacidade de estruturar problemas complexos de forma lógica, identificando padrões e propondo soluções eficientes.",
  },
  {
    icon: Zap,
    title: "Aprendizado Contínuo",
    desc: "Facilidade em assimilar novas tecnologias e aplicar rapidamente o conhecimento em projetos práticos.",
  },
  {
    icon: FolderKanban,
    title: "Organização e Arquitetura",
    desc: "Foco em código limpo, modularização e separação clara de responsabilidades.",
  },
  {
    icon: Users,
    title: "Colaboração",
    desc: "Experiência em projetos em equipe, com comunicação clara e contribuição ativa nas decisões técnicas.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Técnica",
    desc: "Clareza ao explicar conceitos técnicos para diferentes níveis de conhecimento.",
  },
];
const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-card/50">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Diferenciais</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="flex gap-4 p-5 rounded-xl border border-border bg-card card-hover">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
