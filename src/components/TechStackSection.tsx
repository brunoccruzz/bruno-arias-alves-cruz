import ScrollReveal from "./ScrollReveal";
import { Code2, Wrench, BookOpen } from "lucide-react";

const categories = [
  {
    title: "Linguagens",
    icon: Code2,
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "VS Code"],
  },
  {
    title: "Conceitos",
    icon: BookOpen,
    items: ["POO", "Estruturas de Dados", "APIs REST", "BD Relacional", "Versionamento"],
  },
];

const TechStackSection = () => {
  return (
    <section id="stack" className="py-24 md:py-32 bg-card/50">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Stack Tecnológica</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 150}>
              <div className="rounded-xl border border-border bg-card p-6 h-full card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/50 font-mono text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
