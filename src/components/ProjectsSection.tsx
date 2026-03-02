import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  techs: string[];
  github?: string;
}

const projects: Project[] = [
  {
    name: "OrganizaPy",
    description:
      "Sistema de organização de tarefas desenvolvido em Python com foco em lógica e persistência de dados.",
    techs: ["Python", "SQLite", "CLI"],
    github: "#",
  },
  {
    name: "Em breve...",
    description:
      "Novos projetos estão sendo desenvolvidos. Acompanhe meu GitHub para atualizações.",
    techs: ["???"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projetos</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 150}>
              <div className="rounded-xl border border-border bg-card p-6 h-full flex flex-col card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                  >
                    Ver no GitHub <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Using inline icon to avoid extra import
const Code = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default ProjectsSection;
