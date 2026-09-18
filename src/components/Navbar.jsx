import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Goals', id: 'goals' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto max-w-6xl rounded-full transition-all duration-300 ${
          isScrolled
            ? 'border border-white/80 bg-white/90 p-2 shadow-2xl shadow-primary/10 backdrop-blur-xl'
            : 'border border-white/60 bg-white/75 p-2.5 shadow-xl shadow-primary/5 backdrop-blur-lg'
        }`}
      >
        <nav className="flex items-center justify-between px-2 sm:px-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 text-lg font-black tracking-tight text-primary transition hover:opacity-90 sm:text-xl"
          >
            <span>Muhammad Ashif</span>
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
          </a>

          {/* Desktop Nav Items Pills */}
          <div className="hidden items-center gap-1 rounded-full border border-gray-200/60 bg-gray-100/70 p-1.5 lg:flex">
            {navItems.map(({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'text-gray-600 hover:bg-white/80 hover:text-primary'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* CTA Action Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="primary-btn inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold sm:text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Sparkles size={14} /> Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm transition hover:bg-accent lg:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="mt-3 overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1.5">
              {navItems.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-700 hover:bg-accent hover:text-primary'
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="primary-btn mt-2 w-full text-center text-sm py-3 rounded-2xl"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
