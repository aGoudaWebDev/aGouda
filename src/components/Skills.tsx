import { useState } from 'react';
import './Skills.css';

type SkillCategory = 'all' | 'frontend' | 'styling' | 'architecture' | 'tools' | 'testing';

const categories: { key: SkillCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Core Frontend' },
  { key: 'styling', label: 'Styling & UI' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'tools', label: 'Tools' },
  { key: 'testing', label: 'Testing' },
];

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: SkillCategory;
  color: string;
}

const skills: Skill[] = [
  // Core Frontend
  { name: 'React.js', icon: '⚛️', level: 95, category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: '▲', level: 90, category: 'frontend', color: '#ffffff' },
  { name: 'TypeScript', icon: 'TS', level: 88, category: 'frontend', color: '#3B82F6' },
  { name: 'JavaScript ES6+', icon: 'JS', level: 95, category: 'frontend', color: '#F7DF1E' },
  { name: 'HTML5', icon: '🌐', level: 98, category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: '🎨', level: 95, category: 'frontend', color: '#1572B6' },
  { name: 'Async Logic', icon: '⚡', level: 85, category: 'frontend', color: '#00D4FF' },
  // Styling & UI
  { name: 'Bootstrap', icon: '🅱', level: 88, category: 'styling', color: '#7952B3' },
  { name: 'Responsive Design', icon: '📱', level: 95, category: 'styling', color: '#4ADE80' },
  { name: 'EJS Templates', icon: '📄', level: 80, category: 'styling', color: '#A78BFA' },
  { name: 'Digital Branding', icon: '✨', level: 82, category: 'styling', color: '#F472B6' },
  // Architecture
  { name: 'Component-Based', icon: '🧩', level: 94, category: 'architecture', color: '#00D4FF' },
  { name: 'State Management', icon: '🗃️', level: 88, category: 'architecture', color: '#7C3AED' },
  { name: 'MVVM / MVC', icon: '🏗️', level: 85, category: 'architecture', color: '#F59E0B' },
  { name: 'Performance Opt.', icon: '🚀', level: 90, category: 'architecture', color: '#10B981' },
  { name: 'Bundle Reduction', icon: '📦', level: 85, category: 'architecture', color: '#EF4444' },
  // Tools
  { name: 'Git', icon: '🔀', level: 92, category: 'tools', color: '#F05032' },
  { name: 'Webpack', icon: '📦', level: 80, category: 'tools', color: '#8DD6F9' },
  { name: 'Vite', icon: '⚡', level: 88, category: 'tools', color: '#646CFF' },
  { name: 'Shopify', icon: '🛒', level: 78, category: 'tools', color: '#7AB55C' },
  // Testing
  { name: 'Unit Testing', icon: '🧪', level: 82, category: 'testing', color: '#00D4FF' },
  { name: 'Integration Testing', icon: '🔗', level: 78, category: 'testing', color: '#A78BFA' },
  { name: 'Agile / Scrum', icon: '🔄', level: 88, category: 'testing', color: '#F59E0B' },
  { name: 'Code Reviews', icon: '👁️', level: 90, category: 'testing', color: '#4ADE80' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section skills">
      {/* Background decoration */}
      <div className="skills__bg-orb" />

      <div className="container">
        <div className="skills__header reveal">
          <span className="section-label">My Expertise</span>
          <h2 className="section-title">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-desc">
            A curated set of technologies and methodologies I use to build world-class web applications.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="skills__filters reveal delay-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`skills-filter-${cat.key}`}
              className={`skills__filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills__grid">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className={`skills__card glass-card reveal`}
              style={{ transitionDelay: `${(i % 8) * 0.07}s` }}
            >
              <div className="skills__card-top">
                <div className="skills__icon" style={{ backgroundColor: `${skill.color}18`, border: `1px solid ${skill.color}30` }}>
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                </div>
                <span className="skills__level-num" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>
              <h4 className="skills__name">{skill.name}</h4>
              <div className="skills__bar">
                <div
                  className="skills__bar-fill"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
