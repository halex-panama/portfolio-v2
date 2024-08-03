import { ParallaxProject } from ".";
import projects from "../utils/project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-svh text-primary-text grid place-content-center gap-8 relative py-16"
    >
      <h2 className="font-bold text-5xl text-center lg:absolute lg:top-10 lg:left-1/2 lg:-translate-x-1/2">
        PROJECTS
      </h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <ParallaxProject index={index} {...project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
