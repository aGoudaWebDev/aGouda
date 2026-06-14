import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  gradient: string;
  emoji: string;
}

const projects: Project[] = [
  {
    id: 'sup-solutions',
    title: 'SUP Solutions',
    description: 'A comprehensive corporate website for a software solutions company. Features a modern design with service showcases, portfolio sections, and lead generation forms. Built with performance and SEO in mind.',
    tags: ['Next.js', 'TypeScript', 'CSS3', 'Responsive'],
    liveUrl: 'https://sup-solutions.com',
    featured: true,
    gradient: 'linear-gradient(135deg, #00D4FF22, #7C3AED22)',
    emoji: '💼',
  },
  {
    id: 'tonexus',
    title: 'Tonexus',
    description: 'A cutting-edge platform with a sleek, modern interface. Engineered for high engagement with smooth animations, a polished UI, and optimized user flows that convert visitors into customers.',
    tags: ['React', 'JavaScript', 'Bootstrap', 'API Integration'],
    liveUrl: 'https://tonexus.co',
    featured: true,
    gradient: 'linear-gradient(135deg, #7C3AED22, #F472B622)',
    emoji: '🚀',
  },
  {
    id: 'sup-crm',
    title: 'SUP CRM Dashboard',
    description: 'A full-featured CRM web application with complex data tables, interactive charts, real-time updates, and a robust state management system. Designed for enterprise-scale workflows.',
    tags: ['React', 'TypeScript', 'State Management', 'Data Visualization'],
    liveUrl: 'https://crm.sup-solutions.com',
    gradient: 'linear-gradient(135deg, #10B98122, #00D4FF22)',
    emoji: '📊',
  },
  {
    id: 'mousa-photography',
    title: 'Mousa Photography',
    description: 'A visually stunning photography portfolio website with smooth gallery transitions, lightbox functionality, and an elegant aesthetic that lets the artwork speak for itself.',
    tags: ['Next.js', 'CSS Animations', 'Gallery', 'Vercel'],
    liveUrl: 'https://mousa-photography.vercel.app',
    gradient: 'linear-gradient(135deg, #F59E0B22, #EF444422)',
    emoji: '📸',
  },
  {
    id: 'salonate',
    title: 'Salonate',
    description: 'A modern salon booking and management platform with a beautiful consumer-facing interface, appointment scheduling, and a seamless booking experience designed to drive conversions.',
    tags: ['React', 'Next.js', 'Responsive', 'Booking System'],
    liveUrl: 'https://salonate.com',
    gradient: 'linear-gradient(135deg, #F472B622, #7C3AED22)',
    emoji: '💅',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="projects__bg-orb" />

      <div className="container">
        <div className="projects__header reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc">
            A selection of projects I've built — from corporate platforms to creative portfolios and enterprise dashboards.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className={`projects__card glass-card reveal ${project.featured ? 'projects__card--featured' : ''}`}
              style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              {/* Card header visual */}
              <div className="projects__card-header" style={{ background: project.gradient }}>
                <span className="projects__emoji">{project.emoji}</span>
                {project.featured && (
                  <span className="projects__featured-badge">Featured</span>
                )}
              </div>

              {/* Card content */}
              <div className="projects__card-body">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>

                <div className="projects__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Card footer links */}
              <div className="projects__card-footer">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link projects__link--primary"
                  id={`project-${project.id}-live`}
                >
                  <ExternalLink size={15} />
                  Live Site
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link projects__link--secondary"
                    id={`project-${project.id}-github`}
                  >
                    <GithubIcon size={15} />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View more CTA */}
        <div className="projects__more reveal">
          <a
            href="https://github.com/aGoudaWebDev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="projects-view-github-btn"
          >
            <GithubIcon size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
