import { Instagram, Github, Mail, MessageSquare } from 'lucide-react';

const footerNav = ['Home', 'About', 'Skills', 'Projects', 'Goals', 'Contact'];

function Footer() {
  const handleScrollTo = (e, item) => {
    e.preventDefault();
    const id = item.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
                const id = item.toLowerCase();
                return (
                  <li key={item}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleScrollTo(e, item)}
                      className="transition hover:text-primary cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:mhd.ashift@gmail.com"
                  className="inline-flex items-center gap-1.5 transition hover:text-primary font-medium"
                >
                  <Mail size={14} className="text-primary" /> mhd.ashift@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918848887954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-green-700 font-medium"
                >
                  <MessageSquare size={14} className="text-green-600" /> +91 88488 87954
                  <span className="text-[10px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded">WhatsApp</span>
                </a>
              </li>
              <li>Perinthalmanna, Malappuram, Kerala, India</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Socials</h4>
            <div className="mt-4 flex gap-3">
              {[
                {
                  label: 'Instagram',
                  Icon: Instagram,
                  href: 'https://www.instagram.com/_a_shif_._?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
                },
                {
                  label: 'GitHub',
                  Icon: Github,
                  href: 'https://github.com/ashif-tk',
                },
              ].map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-accent text-primary transition hover:-translate-y-1 hover:bg-primary hover:text-white shadow-sm"
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
