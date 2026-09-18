import { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Instagram, Github } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function Contact() {
  const [showFormMessage, setShowFormMessage] = useState('');

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
        <div className="mb-12 text-center reveal">
          <span className="section-badge">Contact</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-ink sm:text-5xl">Let&apos;s Connect</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Have an idea, feedback, or simply want to get in touch? Feel free to send me a message or connect directly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal space-y-5">
            {/* Location Card */}
            <div className="rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft transition hover:border-primary/20 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Location</p>
                  <p className="mt-2 text-lg font-medium text-ink">Perinthalmanna, Malappuram, Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Email Card (tap opens email client) */}
            <a
              href="mailto:mhd.ashift@gmail.com"
              className="block rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md group"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Email</p>
                  <p className="mt-2 text-lg font-bold text-ink group-hover:text-primary transition-colors">
                    mhd.ashift@gmail.com
                  </p>
                  <p className="mt-1 text-xs text-gray-500">Click to send an email directly</p>
                </div>
              </div>
            </a>

            {/* Phone/WhatsApp Card (tap opens WhatsApp) */}
            <a
              href="https://wa.me/918848887954"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md group"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Phone & WhatsApp</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold text-green-700">
                      <MessageSquare size={10} /> Chat on WhatsApp
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-ink group-hover:text-green-700 transition-colors">
                    +91 88488 87954
                  </p>
                  <p className="mt-1 text-xs text-gray-500">Tap to open WhatsApp chat</p>
                </div>
              </div>
            </a>

            {/* Quick Social Links */}
            <div className="rounded-[30px] border border-blue-100 bg-gradient-to-br from-accent/60 via-white to-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Social Profiles</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/ashif-tk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Github size={16} /> GitHub (@ashif-tk)
                </a>
                <a
                  href="https://www.instagram.com/_a_shif_._?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Instagram size={16} /> Instagram (@_a_shif_._)
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <ContactForm setStatus={setShowFormMessage} />
            {showFormMessage && <p className="mt-4 text-sm font-medium text-primary">{showFormMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
