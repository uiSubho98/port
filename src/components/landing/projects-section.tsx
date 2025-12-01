import { PROJECTS } from "@/app/lib/data";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A selection of my work. See something you like? Let's talk.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              animationDelay={`${0.4 + index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
