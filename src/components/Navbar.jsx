import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Goals', path: '/goals' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-[#f8f5ef]/90 backdrop-blur-md">
      <nav className="container-shell flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-black tracking-tight text-primary sm:text-2xl" onClick={closeMenu}>
          Muhammad Ashif
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="primary-btn">
            Let&apos;s Connect
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm transition hover:bg-accent lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-blue-100 bg-white/95 lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            {navItems.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-accent hover:text-primary'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={closeMenu} className="primary-btn mt-2 w-full">
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
