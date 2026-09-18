import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';

const goals = [
  'Improve JavaScript',
  'Learn advanced web development',
  'Build real-world projects',
  'Improve UI/UX knowledge',
  'Learn Graphic Design properly',
  'Improve typography, color and layout knowledge',
  'Build useful websites and applications',
  'Develop a professional portfolio',
  'Continue learning new technologies',
];

function Goals() {
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
          eyebrow="Goals"
          title="My Goals"
          description="My goal is to become a skilled Web Developer and Graphic Designer."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {goals.map((goal, index) => (
            <div key={goal} className="reveal">
              <article className="h-full rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-black text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-ink">{goal}</h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Goals;
