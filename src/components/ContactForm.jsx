import { useState } from 'react';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6WjBHK-f5XvC_4mWVE4EMrAxNS28Ds7vlFA8KjSW3xL9f1Q/formResponse';

function ContactForm({ setStatus }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    // Map entry names back to local state keys
    const fieldMap = {
      'entry.112139233': 'name',
      'entry.2107402483': 'email',
      'entry.1707840009': 'message',
    };
    const key = fieldMap[name] || name;
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
    setSubmitted(false);
    if (setStatus) setStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    if (setStatus) setStatus('Sending your message...');

    try {
      const formParams = new URLSearchParams();
      formParams.append('entry.112139233', formData.name);
      formParams.append('entry.2107402483', formData.email);
      formParams.append('entry.1707840009', formData.message);
      formParams.append('fvv', '1');
      formParams.append('partialResponse', '[null,null,"7623275366068213079"]');
      formParams.append('pageHistory', '0');
      formParams.append('fbzx', '7623275366068213079');
      formParams.append('submissionTimestamp', '-1');

      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString(),
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      const successMsg = 'Thank you! Your message has been sent successfully.';
      if (setStatus) setStatus(successMsg);
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback submit via form target
      event.target.submit();
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <iframe
        name="google_form_target"
        id="google_form_target"
        style={{ display: 'none' }}
        title="Google Form Response Target"
      />
      <form
        action={GOOGLE_FORM_ACTION}
        method="POST"
        target="google_form_target"
        onSubmit={handleSubmit}
        className="space-y-5 rounded-[30px] border border-blue-100 bg-white p-6 shadow-soft sm:p-8"
      >
        <input type="hidden" name="fvv" value="1" />
        <input
          type="hidden"
          name="partialResponse"
          value='[null,null,"7623275366068213079"]'
        />
        <input type="hidden" name="pageHistory" value="0" />
        <input type="hidden" name="fbzx" value="7623275366068213079" />
        <input type="hidden" name="submissionTimestamp" value="-1" />

        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="name"
            name="entry.112139233"
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
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            name="entry.2107402483"
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
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="entry.1707840009"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-ink outline-none transition focus:border-primary focus:bg-white"
            placeholder="Write your message here..."
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
        </div>

        {submitted && (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="primary-btn w-full disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
}

export default ContactForm;
