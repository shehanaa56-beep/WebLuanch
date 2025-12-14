import React, { useState } from 'react';
import './Portfolio.css';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const projects = [
  {
    id: 1,
    title: 'RyzenSports',
    category: 'E-commerce',
    description:
      'High-energy sports jersey e-commerce website with bold visuals.',
    thumbnailColor: 'purple',
    video: '/videos/ryze.mp4'
  },
  {
    id: 2,
    title: 'Memoroids',
    category: 'E-commerce',
    video: '/videos/mem.mp4'
  },
  {
    id: 3,
    title: "Doctor’s Portfolio",
    category: 'Business',
    video: '/videos/doc.mp4'
  },
  {
    id: 4,
    title: 'FlashyFilters',
    category: 'Business',
    video: '/videos/flash.mp4'
  },
  {
    id: 5,
    title: 'Jewellery Shop',
    category: 'E-commerce',
    video: '/videos/watch.mp4'
  },
  {
    id: 6,
    title: 'SFI Perinthalmanna',
    category: 'Organization',
    video: '/videos/sfi.mp4'
  }
];

  const filters = ['All Projects', 'Business', 'Portfolio', 'E-commerce'];

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <span className="portfolio-label">PORTFOLIO</span>
          <h2 className="section-title">
            Our <span className="highlight">Creations</span>
          </h2>
          <p className="portfolio-subtitle">
            Each project is crafted with precision, creativity, and business goals in mind.
          </p>
        </div>

        <div className="filter-tabs">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className={`thumbnail ${project.thumbnailColor}`}>
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                {project.video && (
                  <video
                    className="card-video"
                    muted
                    autoPlay
                    loop
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="portfolio-content">
                <span className="category-label">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
