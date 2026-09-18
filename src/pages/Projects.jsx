import { useEffect, useState } from 'react';
import { X, ExternalLink, Code2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'CAR WORKSHOP BOOKING',
    category: 'Web Development',
    description: 'An interactive car workshop website designed to present services and provide a simple booking experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    projectLink: '#',
    sourceCodeUrl: 'https://github.com/ashif-tk/autocare-booking-system',
    features: [
      'Service selection',
      'Booking form',
      'Customer information',
      'Service details',
      'Navigation',
      'Responsive layout',
      'JavaScript interactions',
    ],
    whatILearned: 'I practiced building a service-oriented interface, handling user inputs, and making a responsive booking flow with simple front-end interactivity.',
  },
  {
    title: 'SMART CALCULATOR',
    category: 'JavaScript Project',
    description: 'An interactive calculator created to practice JavaScript programming, user input and basic logic.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    projectLink: '#',
    sourceCodeUrl: '#',
    features: [
      'Addition',
      'Subtraction',
      'Multiplication',
      'Division',
      'Clear',
      'User input',
      'Basic error handling',
      'Responsive interface',
    ],
    whatILearned: 'This project helped me improve my understanding of JavaScript logic, event handling, and building user-friendly calculator interactions.',
  },
  {
    title: 'PERSONAL PORTFOLIO',
    category: 'Personal Portfolio',
    description: 'A personal portfolio website created to introduce myself, showcase my projects and share my learning journey.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    projectLink: '#',
    sourceCodeUrl: 'https://github.com/ashif-tk/ashift-protfolio',
    features: [
      'Responsive design',
      'Personal introduction',
      'Project showcase',
      'Skills section',
      'About section',
      'Goals',
      'Contact section',
      'Continuous vertical scrolling',
      'Interactive UI',
    ],
    whatILearned: 'This portfolio helped me practice React components, smooth vertical scrolling, Tailwind styling, and assembling a clean presentation for my work and goals.',
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-padding">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Projects"
          title="Selected Work"
          description="These are a few beginner-focused projects that reflect my learning process and growing skills."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="reveal">
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
              <h3 className="text-2xl font-black text-ink">{selectedProject.title}</h3>
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-accent text-primary transition hover:bg-primary hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-6">
              <img src={selectedProject.image} alt={selectedProject.title} className="h-64 w-full rounded-[24px] object-cover sm:h-72" />

              <p className="mt-6 text-base leading-7 text-gray-700">{selectedProject.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-primary/10 bg-accent px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-lg font-bold text-ink">Features</h4>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-ink">What I learned</h4>
                  <p className="mt-3 text-sm leading-7 text-gray-700">{selectedProject.whatILearned}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={selectedProject.projectLink} className="primary-btn gap-2" target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> View Project
                </a>
                <a href={selectedProject.sourceCodeUrl} className="secondary-btn gap-2" target="_blank" rel="noreferrer">
                  <Code2 size={16} /> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
