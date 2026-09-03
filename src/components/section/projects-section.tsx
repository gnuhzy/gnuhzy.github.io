import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.025;

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="flex min-h-0 flex-col gap-y-7">
        <div className="flex flex-col gap-y-2">
          <h2 id="projects-title" className="text-xl font-bold">
            Selected projects
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Representative work across LLM product engineering, agent systems,
            and data applications.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {DATA.projects.map((project, index) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 10 + index * 0.025}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
