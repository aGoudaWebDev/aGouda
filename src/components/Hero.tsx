import { useEffect, useState } from 'react';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

const PHRASES = [
  'Front-End Engineer',
  'UI Enthusiast',
  'React Specialist',
  'Next.js Developer',
  'Performance Optimizer',
];

export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = PHRASES[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIdx]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Animated background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid overlay */}
      <div className="hero__grid" />

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Status badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for work
          </div>

          {/* Main heading */}
          <h1 className="hero__title">
            Hi, I'm{' '}
            <span className="gradient-text">Muhammad Gouda</span>
          </h1>

          {/* Typewriter subtitle */}
          <div className="hero__typewriter">
            <span>{displayed}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__desc">
            I craft pixel-perfect, lightning-fast web experiences that users love. 
            Specializing in React, Next.js and modern JavaScript ecosystems — 
            turning complex ideas into elegant, scalable interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button
              className="btn btn-primary"
              id="hero-view-work-btn"
              onClick={() => scrollToSection('projects')}
            >
              View My Work <ArrowRight size={16} />
            </button>
            <button
              className="btn btn-outline"
              id="hero-contact-btn"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="hero__socials">
            <a
              href="https://github.com/aGoudaWebDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              id="hero-github-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-agouda/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              id="hero-linkedin-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:muhammad.gouda.webdev@gmail.com"
              className="hero__social-link"
              id="hero-email-link"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <span className="hero__social-divider" />
            <span className="hero__social-text">Let's connect</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero__visual">
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring hero__avatar-ring--outer" />
            <div className="hero__avatar-ring hero__avatar-ring--inner" />
            <div className="hero__avatar-frame">
              <img src="/avatar.png" alt="Muhammad Gouda" className="hero__avatar-img" />
            </div>
            {/* Floating badges */}
            <div className="hero__badge-float hero__badge-float--react">
              <span>⚛️</span> React
            </div>
            <div className="hero__badge-float hero__badge-float--next">
              <span>▲</span> Next.js
            </div>
            <div className="hero__badge-float hero__badge-float--ts">
              <span>TS</span>
            </div>
          </div>

          {/* Stats cards */}
          <div className="hero__stats">
            <div className="hero__stat glass-card">
              <span className="hero__stat-num gradient-text">3+</span>
              <span className="hero__stat-label">Years Exp.</span>
            </div>
            <div className="hero__stat glass-card">
              <span className="hero__stat-num gradient-text">20+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat glass-card">
              <span className="hero__stat-num gradient-text">10+</span>
              <span className="hero__stat-label">Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero__scroll-indicator"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
      >
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
