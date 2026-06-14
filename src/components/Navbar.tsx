import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Scroll tracking + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <a href="#home" className="navbar__logo" onClick={(e) => { e.preventDefault(); handleLink('#home'); }}>
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="gradient-text">MG</span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar__link ${active === link.href.replace('#', '') ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="mailto:muhammad.gouda.webdev@gmail.com" className="btn btn-primary navbar__cta">
            Hire Me
          </a>

          {/* Burger */}
          <button
            className={`navbar__burger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            id="navbar-burger-btn"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`navbar__overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'open' : ''}`} role="dialog" aria-label="Navigation menu">
        <div className="navbar__drawer-header">
          <span className="navbar__logo">
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="gradient-text">MG</span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </span>
          <button
            className="navbar__drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="navbar__drawer-nav">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__drawer-link ${active === link.href.replace('#', '') ? 'active' : ''}`}
              style={{ animationDelay: menuOpen ? `${i * 0.07}s` : '0s' }}
              onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
            >
              <span className="navbar__drawer-link-num">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__drawer-footer">
          <a
            href="mailto:muhammad.gouda.webdev@gmail.com"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Hire Me
          </a>
          <p className="navbar__drawer-email">muhammad.gouda.webdev@gmail.com</p>
        </div>
      </div>
    </>
  );
}
