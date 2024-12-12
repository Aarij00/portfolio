import { useParams, Link } from 'react-router-dom';
import { projects } from '../assets/data';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.title.toLowerCase() === id.toLowerCase());

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="min-h-screen flex flex-col px-4 md:px-24">
      <h1 className="text-center text-2xl md:text-5xl mb-8 mt-20">
        <Link to="/" className="text-lightGrey hover:text-cyan transition-colors underline">/portfolio</Link>
        <span className="text-lightGrey">/projects/</span>
        <span className="text-cyan">{project.title.toLowerCase()}</span>
      </h1>

      <div className="max-w-4xl mx-auto w-full">
        {/* Introduction */}
        <div className="mb-20">
          <p className="text-darkGrey text-left max-w-lg mx-auto">{project.introduction}</p>
        </div>

        {/* Concept Development */}
        <div className="mb-20">
          <h2 className="text-xl md:text-3xl mb-6 text-lightGrey text-center">Concept Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.conceptDevelopment.images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={image.src} 
                  alt={`Concept ${index + 1}`} 
                  className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Video Interaction */}
        <div className="mb-20">
          <h2 className="text-xl md:text-3xl mb-6 text-lightGrey text-center">Video Interaction</h2>
          <div className="max-w-xl mx-auto">
            <div className="aspect-video relative">
              <video 
                controls 
                className="w-full h-full rounded-lg absolute inset-0 object-contain"
                poster={project.cover}
                playsInline
                preload="metadata"
              >
                <source src={project.videoInteraction.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Arduino Code */}
        <div className="mb-20">
          <h2 className="text-xl md:text-3xl mb-6 text-lightGrey text-center">Arduino Code</h2>
          <div className="max-h-96 text-left overflow-y-auto bg-night-light p-4 rounded-lg max-w-xl mx-auto">
            <pre className="text-sm">
              <code className="text-lightGrey whitespace-pre text-left">
                {project.arduinoCode}
              </code>
            </pre>
          </div>
        </div>

        {/* Circuit Schematic */}
        <div className="mb-20">
          <h2 className="text-xl md:text-3xl mb-6 text-lightGrey text-center">Circuit Schematic</h2>
          <div className="max-w-xl mx-auto">
            <img 
              src={project.circuitSchematic.src} 
              alt="Circuit Schematic" 
              className="w-full rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        {/* References */}
        <div className="mb-20">
          <h2 className="text-xl md:text-3xl mb-6 text-lightGrey text-center">References</h2>
          <div className="max-w-xl mx-auto px-4">
            <ul className="space-y-2">
              {project.references.map((reference, index) => (
                <li key={index} className="flex">
                  <span className="text-cyan mr-2">•</span>
                  <a 
                    href={reference} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan hover:underline break-all transition-colors"
                  >
                    {reference}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;