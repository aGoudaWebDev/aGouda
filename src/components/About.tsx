import { Code2, Zap, Users } from 'lucide-react';
import './About.css';

const highlights = [
  {
    icon: <Code2 size={22} />,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable, and well-structured code is a core value in everything I build.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Performance First',
    desc: 'Obsessed with bundle size, load times, and Core Web Vitals — fast apps are better apps.',
  },
  {
    icon: <Users size={22} />,
    title: 'User-Centered',
    desc: "Every pixel, every interaction is crafted with the end user's experience at the forefront.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        {/* Avatar column */}
        <div className="about__image-col reveal-left">
          <div className="about__image-frame">
            <img src="/avatar.png" alt="Muhammad Gouda" className="about__image" />
            <div className="about__image-glow" />
          </div>

          {/* Experience badge */}
          <div className="about__exp-badge glass-card">
            <span className="about__exp-num gradient-text">3+</span>
            <span className="about__exp-label">Years of<br/>Experience</span>
          </div>
        </div>

        {/* Content column */}
        <div className="about__content">
          <div className="reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Building digital experiences{' '}
              <span className="gradient-text">that matter</span>
            </h2>
          </div>

          <div className="reveal delay-1">
            <p className="about__bio">
              I'm <strong>Muhammad Gouda</strong>, a passionate Front-End Engineer based in Egypt, with over 3 years of experience crafting high-performance, visually compelling web applications. I thrive at the intersection of engineering and design — where clean code meets stunning UI.
            </p>
            <p className="about__bio">
              From architecting scalable component systems to fine-tuning performance bottlenecks, I bring a holistic approach to front-end development. Whether working on a pixel-perfect landing page or a complex CRM dashboard, I pour the same level of care and craftsmanship into every project.
            </p>
          </div>

          {/* Highlights */}
          <div className="about__highlights reveal delay-2">
            {highlights.map((h, i) => (
              <div key={i} className="about__highlight glass-card">
                <div className="about__highlight-icon">{h.icon}</div>
                <div>
                  <h4 className="about__highlight-title">{h.title}</h4>
                  <p className="about__highlight-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick info */}
          <div className="about__info reveal delay-3">
            <div className="about__info-item">
              <span className="about__info-label">Location</span>
              <span className="about__info-val">Egypt 🇪🇬</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">Email</span>
              <a href="mailto:muhammad.gouda.webdev@gmail.com" className="about__info-val about__info-link">
                muhammad.gouda.webdev@gmail.com
              </a>
            </div>
            <div className="about__info-item">
              <span className="about__info-label">Availability</span>
              <span className="about__info-val about__info-available">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
