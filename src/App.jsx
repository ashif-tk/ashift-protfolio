import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Goals from './pages/Goals';
import Contact from './pages/Contact';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.title = 'Muhammad Ashif T. | Aspiring Graphic Designer & Beginner Web Developer';

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute(
      'content',
      'Personal portfolio of Muhammad Ashif T., an aspiring graphic designer and beginner web developer interested in web development, programming and technology.'
    );

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main className="overflow-x-hidden pt-16 sm:pt-20">
        <section id="home" className="scroll-mt-28">
          <Home />
        </section>
        <section id="about" className="scroll-mt-28">
          <About />
        </section>
        <section id="skills" className="scroll-mt-28">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-28">
          <Projects />
        </section>
        <section id="goals" className="scroll-mt-28">
          <Goals />
        </section>
        <section id="contact" className="scroll-mt-28">
          <Contact />
        </section>
      </main>
      <Footer />

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
