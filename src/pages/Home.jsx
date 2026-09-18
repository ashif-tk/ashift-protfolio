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

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, 'projects')}
                  className="primary-btn cursor-pointer"
                >
                  View My Projects <ArrowRight className="ml-2" size={18} />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="secondary-btn cursor-pointer"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="relative flex justify-center reveal">
              <div className="absolute -left-10 top-1/4 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
              <div className="absolute -right-10 bottom-1/4 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative">
                <div className="absolute -left-4 top-12 z-20 animate-float rounded-2xl border border-primary/20 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-lg backdrop-blur-md sm:-left-6">
                  HTML
                </div>
                <div className="absolute -right-4 top-4 z-20 animate-float rounded-2xl border border-primary/20 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-lg backdrop-blur-md [animation-delay:1s] sm:-right-6">
                  CSS
                </div>
                <div className="absolute -right-4 bottom-10 z-20 animate-float rounded-2xl border border-primary/20 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-lg backdrop-blur-md [animation-delay:2s] sm:-right-6">
                  JavaScript
                </div>

                <div className="relative rounded-[2rem] border-8 border-white bg-gradient-to-br from-white via-accent/50 to-coralLight/40 p-3 shadow-xl">
                  <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-accent via-white to-coralLight p-2">
                    <img
                      src={profileImage}
                      alt="Muhammad Ashif T."
                      className="h-[420px] w-full max-w-[380px] rounded-[1.5rem] object-cover object-top shadow-inner sm:h-[460px]"
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
