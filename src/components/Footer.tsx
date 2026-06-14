import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top-border" />

      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#home" className="footer__logo" onClick={() => scrollTo('home')}>
            <span className="footer__logo-bracket">&lt;</span>
            <span className="gradient-text">MG</span>
            <span className="footer__logo-bracket">/&gt;</span>
          </a>
          <p className="footer__tagline">
            Front-End Engineer · UI Enthusiast · React/Next Specialist
          </p>
        </div>

        <div className="footer__nav">
          {['home', 'about', 'skills', 'projects', 'contact'].map((id) => (
            <button
              key={id}
              className="footer__nav-link"
              onClick={() => scrollTo(id)}
              id={`footer-nav-${id}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        <div className="footer__socials">
          <a href="https://github.com/aGoudaWebDev" target="_blank" rel="noopener noreferrer" className="footer__social" id="footer-github" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-agouda/" target="_blank" rel="noopener noreferrer" className="footer__social" id="footer-linkedin" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:muhammad.gouda.webdev@gmail.com" className="footer__social" id="footer-email" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
            &copy; {year} Muhammad Gouda. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
