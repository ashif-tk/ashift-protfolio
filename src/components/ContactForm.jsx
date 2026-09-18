import { useState } from 'react';

function ContactForm({ setStatus }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSuccess('');
    if (setStatus) setStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    const whatsappUrl = `https://wa.me/918848887954?text=${whatsappMessage}`;
    const mailtoLink = `mailto:mhd.ashift@gmail.com?subject=${encodeURIComponent(
      'Portfolio Contact Form'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setSuccess('Preparing your message...');
    if (setStatus) setStatus('Preparing your message...');

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', message: '' });
    setSuccess('Your message is ready to send on WhatsApp.');
    if (setStatus) setStatus('Your message is ready to send on WhatsApp.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-ink outline-none transition focus:border-primary focus:bg-white"
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-ink outline-none transition focus:border-primary focus:bg-white"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-ink outline-none transition focus:border-primary focus:bg-white"
          placeholder="Write your message here..."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
      </div>

      {success && <p className="text-sm font-medium text-primary">{success}</p>}

      <button type="submit" className="primary-btn w-full">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
