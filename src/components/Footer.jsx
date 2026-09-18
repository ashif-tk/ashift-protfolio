import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Github, BriefcaseBusiness } from 'lucide-react';

const footerNav = ['Home', 'About', 'Skills', 'Projects', 'Goals', 'Contact'];

function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white/80">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black text-primary">Muhammad Ashif T.</h3>
            <p className="mt-4 text-lg font-semibold text-ink">Learning. Creating. Building.</p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Navigation</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {footerNav.map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link to={path} className="transition hover:text-primary">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>mhd.ashift@gmail.com</li>
              <li>+91 88488 87954</li>
              <li>Perinthalmanna, Malappuram, Kerala, India</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Socials</h4>
            <div className="mt-4 flex gap-3">
              {[
                { label: 'Instagram', Icon: Instagram, href: '#' },
                { label: 'LinkedIn', Icon: Linkedin, href: '#' },
                { label: 'GitHub', Icon: Github, href: '#' },
                { label: 'Behance', Icon: BriefcaseBusiness, href: '#' },
              ].map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-accent text-primary transition hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-100 pt-6 text-center text-sm text-gray-600">
          © 2026 Muhammad Ashif T. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
