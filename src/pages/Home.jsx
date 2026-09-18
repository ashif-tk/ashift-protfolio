import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette, MonitorSmartphone } from 'lucide-react';
import { useEffect } from 'react';
import profileImage from '../assets/profile.jpg';

function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.14 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="section-padding relative">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal">
              <span className="section-badge">STUDENT • LEARNING • BUILDING</span>
              <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
                Learning. Creating. Building.
              </h1>
              <h2 className="mt-4 text-xl font-semibold text-primary sm:text-2xl">
                Aspiring Graphic Designer &amp; Beginner Web Developer
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
                I&apos;m Muhammad Ashif T., a student interested in Graphic Design, Web Development,
                Programming and Technology. I&apos;m currently learning web development while beginning my
                journey into Graphic Design.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/projects" className="primary-btn">
                  View My Projects <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link to="/contact" className="secondary-btn">
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center reveal">
              <div className="absolute -left-6 top-10 h-20 w-20 rounded-full bg-secondary/15 blur-2xl" />
              <div className="absolute -right-4 bottom-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative">
                <div className="absolute -left-8 top-12 animate-float rounded-2xl border border-primary/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-soft">
                  HTML
                </div>
                <div className="absolute -right-8 top-4 animate-float rounded-2xl border border-primary/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-soft [animation-delay:1s]">
                  CSS
                </div>
                <div className="absolute -right-10 bottom-10 animate-float rounded-2xl border border-primary/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-soft [animation-delay:2s]">
                  JavaScript
                </div>

                <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-gradient-to-br from-white to-accent p-4 shadow-soft">
                  <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-accent via-white to-coralLight p-2">
                    <img
                      src={profileImage}
                      alt="Muhammad Ashif T."
                      className="h-[460px] w-[400px] rounded-[1.5rem] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3 reveal">
            {[
              { value: '3+ Projects', label: 'Started building' },
              { value: 'Currently Learning', label: 'Web & design basics' },
              { value: 'Always Improving', label: 'Practice and growth' },
            ].map((item) => (
              <div key={item.value} className="rounded-3xl border border-blue-100 bg-white p-6 text-center shadow-soft">
                <p className="text-2xl font-black text-primary sm:text-3xl">{item.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-16 reveal">
        <div className="grid gap-5 rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl bg-accent p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
              <Code2 size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Currently learning</p>
              <p className="font-bold text-ink">Web Development</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-coralLight p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-secondary">
              <Palette size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Beginning design</p>
              <p className="font-bold text-ink">Graphic Design</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-accent p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
              <MonitorSmartphone size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Focus</p>
              <p className="font-bold text-ink">Responsive UI</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
