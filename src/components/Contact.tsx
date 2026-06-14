import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { Mail, MapPin, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Contact.css';

// ─────────────────────────────────────────────────────────────────────────────
// 1. Go to https://web3forms.com
// 2. Enter your email → click "Create Access Key"
// 3. Copy the key from the email they send you and paste it below
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = 'e411f81d-46b8-4b4a-9a8e-1273b22c9c63';

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const { submit } = useWeb3Forms({
    access_key: WEB3FORMS_KEY,
    settings: {
      from_name: 'Muhammad Gouda Portfolio',
      subject: 'New Contact Message from your Portfolio',
    },
    onSuccess: (msg) => {
      setSuccess(true);
      setErrorMsg('');
      reset();
    },
    onError: (msg) => {
      setErrorMsg(msg || 'Something went wrong. Please try again.');
    },
  });

  const socials = [
    {
      id: 'contact-github',
      label: 'GitHub',
      handle: 'github.com/aGoudaWebDev',
      href: 'https://github.com/aGoudaWebDev',
      icon: <GithubIcon size={20} />,
      color: '#6e5494',
      bg: 'rgba(110,84,148,0.15)',
    },
    {
      id: 'contact-linkedin',
      label: 'LinkedIn',
      handle: 'linkedin.com/in/muhammad-agouda',
      href: 'https://www.linkedin.com/in/muhammad-agouda/',
      icon: <LinkedinIcon size={20} />,
      color: '#0a66c2',
      bg: 'rgba(10,102,194,0.15)',
    },
    {
      id: 'contact-email',
      label: 'Email',
      handle: 'muhammad.gouda.webdev@gmail.com',
      href: 'mailto:muhammad.gouda.webdev@gmail.com',
      icon: <Mail size={20} />,
      color: 'var(--color-cyan)',
      bg: 'rgba(0,212,255,0.12)',
    },
  ];

  const onSubmit = async (data: any) => {
    // Graceful fallback if key is not added yet
    if (WEB3FORMS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      const mailto = `mailto:muhammad.gouda.webdev@gmail.com` +
        `?subject=${encodeURIComponent(data.subject || `Portfolio Contact from ${data.name}`)}` +
        `&body=${encodeURIComponent(`From: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
      window.open(mailto, '_blank');
      setSuccess(true);
      reset();
      return;
    }

    // Official web3forms submit
    await submit(data);
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact__bg-orb" aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <header className="contact__header reveal">
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
        </header>

        <div className="contact__inner">
          {/* Info column */}
          <aside className="contact__info reveal">
            {/* Location */}
            <div className="contact__location glass-card">
              <MapPin size={22} color="var(--color-cyan)" aria-hidden="true" />
              <div>
                <span className="contact__info-label">Location</span>
                <span className="contact__info-val">Egypt · Available remotely worldwide</span>
              </div>
            </div>

            {/* Socials */}
            <p className="contact__socials-title">Connect with me</p>
            <div className="contact__socials">
              {socials.map(({ id, label, handle, href, icon, color, bg }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact__social-card glass-card"
                  aria-label={label}
                >
                  <span
                    className="contact__social-icon"
                    style={{ background: bg, color }}
                  >
                    {icon}
                  </span>
                  <span>
                    <span className="contact__social-label">{label}</span>
                    <span className="contact__social-handle">{handle}</span>
                  </span>
                  <ArrowRight size={16} className="contact__social-arrow" aria-hidden="true" />
                </a>
              ))}
            </div>
          </aside>

          {/* Form */}
          <div className="contact__form-card glass-card reveal">
            {success ? (
              <div className="contact__success">
                <CheckCircle size={52} color="var(--color-cyan)" />
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible —
                  usually within 24 hours.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => setSuccess(false)}
                  id="contact-send-another"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Send a message</h3>

                {errorMsg && (
                  <div className="contact__error-banner" role="alert">
                    <AlertCircle size={18} aria-hidden="true" />
                    {errorMsg}
                  </div>
                )}

                <form
                  className="contact__form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Contact form"
                >
                  <div className="contact__fields">
                    <div className="contact__field">
                      <label htmlFor="contact-name" className="contact__label">
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className="contact__input"
                        placeholder="Your name"
                        autoComplete="name"
                        {...register('name', { required: true })}
                      />
                    </div>

                    <div className="contact__field">
                      <label htmlFor="contact-email" className="contact__label">
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className="contact__input"
                        placeholder="your@email.com"
                        autoComplete="email"
                        {...register('email', { required: true })}
                      />
                    </div>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-subject" className="contact__label">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      className="contact__input"
                      placeholder="Project inquiry, collaboration…"
                      {...register('subject')}
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-message" className="contact__label">
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      className="contact__input contact__textarea"
                      placeholder="Tell me about your project or idea…"
                      {...register('message', { required: true })}
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    className={`btn btn-primary contact__submit${isSubmitting ? ' loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="contact__spinner" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={17} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
