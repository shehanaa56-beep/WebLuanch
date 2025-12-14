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
        'High-energy sports jersey e-commerce website with bold visuals, smooth navigation, and a fast, mobile-first shopping experience.',
      thumbnailColor: 'purple',
      video: '/videos/ryze.mp4'
    },
    {
      id: 2,
      title: 'Memoroids',
      category: 'E-commerce',
      description:
        'Personalized gifts and memory products store featuring an elegant design, product-focused layouts, and a seamless user experience.',
      thumbnailColor: 'pink',
      video: '/videos/mem.mp4'
    },
    {
      id: 3,
      title: "Doctor’s Portfolio",
      category: 'Business',
      description:
        'Professional medical portfolio website showcasing services, expertise, and patient-focused care with a clean, modern interface.',
      thumbnailColor: 'blue',
       video: "https://res.cloudinary.com/dp3g9pr0n/video/upload/doc_at8fke.mp4"
    },
    {
      id: 4,
      title: 'FlashyFilters',
      category: 'Business',
      description:
        'Photography portfolio website featuring stunning visuals, easy navigation, and a focus on showcasing creative work.',
      thumbnailColor: 'green',
      video: '/videos/flash.mp4'
    },
    {
      id: 5,
      title: 'Jewellery Shop',
      category: 'E-commerce',
      description:
        'Luxury jewellery store website with elegant product displays, smooth browsing, and a refined shopping experience.',
      thumbnailColor: 'orange',
      video: '/videos/watch.mp4'
    },
    {
      id: 6,
      title: 'SFI Perinthalmanna',
      category: 'Organization',
      description:
        'Informational website designed for a student organization, highlighting activities, initiatives, and community engagement.',
      thumbnailColor: 'indigo',
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
                    <source
                      src={project.video}
                      type="video/mp4"
                    />
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
