import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';

const timeline = [
  'Started exploring computers',
  'Started learning HTML & CSS',
  'Started learning JavaScript',
  'Built small web projects',
  'Started exploring Graphic Design',
  'Continuing to learn and improve',
];

function About() {
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
          eyebrow="About"
          title="About Me"
          description="A student-focused introduction to my learning journey in web development and design."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="reveal rounded-[30px] border border-blue-100 bg-white p-7 shadow-soft sm:p-8">
            <p className="text-lg leading-8 text-gray-700">
              Hi, I&apos;m Muhammad Ashif T., a student and aspiring graphic designer &amp; beginner web
              developer.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              My interest in computers and technology grew during the lockdown period, when I started
              exploring computers and learning programming independently.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              I began my web development journey with HTML and CSS and later started learning
              JavaScript and basic programming concepts. Building small projects has helped me understand
              programming and improve my problem-solving skills.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              I have also recently started exploring Graphic Design. I&apos;m currently learning the
              fundamentals of design such as layout, typography, colors and visual presentation.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              I&apos;m still at the beginning of my design journey, and my goal is to improve through
              practice, experimentation and real projects.
            </p>
          </div>

          <div className="reveal rounded-[30px] border border-blue-100 bg-gradient-to-br from-accent to-white p-6 shadow-soft sm:p-8">
            <h3 className="text-2xl font-black text-ink">My learning journey</h3>
            <div className="mt-6 space-y-4">
              {timeline.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-primary/10 bg-white/80 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-black text-white">
                    0{index + 1}
                  </div>
                  <p className="flex items-center text-base font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
