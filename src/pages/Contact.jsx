import { useEffect, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
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
            Have an idea, feedback, or simply want to get in touch? Feel free to send me a message.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal space-y-5">
            <div className="rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Location</p>
                  <p className="mt-2 text-lg text-ink">Perinthalmanna, Malappuram, Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Email</p>
                  <a href="mailto:mhd.ashift@gmail.com" className="mt-2 block text-lg text-ink hover:text-primary">
                    mhd.ashift@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Phone</p>
                  <p className="mt-2 text-lg text-ink">+91 88488 87954</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <ContactForm setStatus={setShowFormMessage} />
            {showFormMessage && <p className="mt-4 text-sm text-primary">{showFormMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
