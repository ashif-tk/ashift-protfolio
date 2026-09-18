import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';

const skills = [
  {
    name: 'HTML5',
    description: 'Building structured web pages using semantic HTML.',
    level: 'Learning',
  },
  {
    name: 'CSS3',
    description: 'Learning responsive layouts, styling and modern UI techniques.',
    level: 'Learning',
  },
  {
    name: 'JavaScript',
    description: 'Learning interactivity, logic and DOM-based web experiences.',
    level: 'Practicing',
  },
  {
    name: 'React.js',
    description: 'Learning component-based web development and reusable interfaces.',
    level: 'Currently exploring',
  },
  {
    name: 'Tailwind CSS',
    description: 'Using utility-first styling to create responsive interfaces.',
    level: 'Practicing',
  },
  {
    name: 'React Router DOM',
    description: 'Learning page navigation and routing in React applications.',
    level: 'Learning',
  },
];

function Skills() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-padding">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Skills"
          title="My Learning Stack"
          description="I am still building my foundations, and these are the tools I am currently learning and practicing."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <div className="reveal" key={skill.name}>
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
