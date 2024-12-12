import { projects } from '../assets/data';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // Assuming first 3 projects are software and last 3 are hardware
  const softwareProjects = projects.slice(0, 3);
  const hardwareProjects = projects.slice(3);

  return (
    <section id="projects" className="min-h-screen flex flex-col px-4 md:px-24">
      <h1 className="text-center text-2xl md:text-left md:text-5xl mb-8 mt-20">
        <span className="text-lightGrey">/arij/portfolio/</span>
        <span className="text-cyan">projects</span>
      </h1>

      {/* Software Section */}
      <div className="mb-12">
        <h2 className="text-xl md:text-3xl mb-6 flex items-center gap-2">
          <span className="text-cyan">└─</span>
          <span className="text-lightGrey">software</span>
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {softwareProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* HCI Section */}
      <div>
        <h2 className="text-xl md:text-3xl mb-6 flex items-center gap-2">
          <span className="text-cyan">└─</span>
          <span className="text-lightGrey">human-computer interaction (hci)</span>
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hardwareProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
