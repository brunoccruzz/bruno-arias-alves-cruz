import ScrollReveal from "./ScrollReveal";

const highlights = ["Backend", "APIs", "Banco de Dados", "Estruturas de Dados", "Lógica de Programação"];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Sobre Mim</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 mt-10">
          <div className="md:col-span-3 space-y-5">
            <ScrollReveal delay={100}>
              <p className="text-muted-foreground leading-relaxed">
                Atualmente cursando <span className="text-foreground font-medium">Engenharia de Software</span>, 
                venho construindo uma base sólida em lógica de programação, algoritmos e princípios de engenharia 
                de software que me permitem resolver problemas com clareza e eficiência.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                Meus interesses técnicos estão voltados para o <span className="text-foreground font-medium">desenvolvimento backend</span>, 
                construção de <span className="text-foreground font-medium">APIs REST</span>, modelagem de 
                <span className="text-foreground font-medium"> bancos de dados relacionais</span> e compreensão 
                de arquiteturas de software escaláveis. Gosto de entender como os sistemas funcionam por baixo 
                dos panos e transformar requisitos em código limpo e funcional.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-muted-foreground leading-relaxed">
                Meu objetivo atual é ingressar como <span className="text-foreground font-medium">estagiário na área de desenvolvimento</span>, 
                onde possa aplicar meus conhecimentos, aprender com profissionais experientes e contribuir 
                para projetos reais que gerem impacto.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-2">
            <ScrollReveal delay={200}>
              <div className="rounded-xl border border-border bg-card p-6 glow-border">
                <p className="font-mono text-sm text-primary mb-4">{"// áreas de interesse"}</p>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md bg-primary/10 text-primary text-sm font-mono border border-primary/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
