import { projects } from '../assets/data';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col px-4 md:px-24">
      <h1 className="text-center text-2xl md:text-left md:text-5xl mb-8 mt-20">
        <span className="text-lightGrey">/arij/portfolio/</span>
        <span className="text-cyan">projects</span>
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
