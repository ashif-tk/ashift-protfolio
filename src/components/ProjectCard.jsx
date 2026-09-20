import { ExternalLink } from 'lucide-react';

function ProjectCard({ project, onSelect }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-primary/10 bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => onSelect(project)} className="primary-btn px-4 py-2.5 text-xs sm:text-sm">
            View Project
          </button>
          {project.projectLink !== '#' && (
            <a href={project.projectLink} target="_blank" rel="noreferrer" className="secondary-btn gap-2 px-4 py-2.5 text-xs sm:text-sm">
              <ExternalLink size={15} /> View This Page
            </a>
          )}
          <a href={project.sourceCodeUrl} target="_blank" rel="noreferrer" className="secondary-btn px-4 py-2.5 text-xs sm:text-sm">
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
