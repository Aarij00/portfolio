import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { cover, title, description, tech, github } = project;
  
  return (
    <div className="bg-night-light p-2 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-night-lighter flex flex-col h-full">
      <div className="mb-3 overflow-hidden rounded-lg">
        <img 
          src={cover} 
          alt={title} 
          className="w-full h-40 object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
          style={{ objectPosition: 'center 20%' }}
        />
      </div>
      <h3 className="text-cyan text-xl font-semibold mb-2 transition-colors hover:text-cyan-light">{title}</h3>
      <p className="text-lightGrey text-sm mb-4 line-clamp-none text-left break-words hyphens-auto">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tech.map((tech) => (
          <span 
            key={tech} 
            className="bg-night px-2 py-0.5 rounded-full text-xs text-lightGrey transition-all duration-300 hover:bg-cyan hover:text-night cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        {github.includes('project.html') ? (
          <Link 
            to={`/projects/${title.toLowerCase()}`}
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-all duration-300 text-sm group"
          >
            Go to Project
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
            </svg>
          </Link>
        ) : (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-all duration-300 text-sm group"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Source
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectCard; 