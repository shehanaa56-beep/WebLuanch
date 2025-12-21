import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="about-label">ABOUT US</div>
            <h2 className="about-heading">
              Who We <span className="highlight">Are</span>
            </h2>
            <p className="about-description">
              WEBLAUNCH is a modern web development brand focused on creating beautiful, fast, and scalable websites for businesses and individuals.
            </p>
            <p className="about-description">
              We don't just build websites — we build online experiences that grow brands and convert visitors into loyal customers.
            </p>
            <div className="feature-badges">
  <div className="badge">
    <div className="badge-icon">
      <i className="bi bi-people-fill"></i>
    </div>
    <span>Client-focused approach</span>
  </div>

  <div className="badge">
    <div className="badge-icon">
      <i className="bi bi-code-slash"></i>
    </div>
    <span>Clean, scalable code</span>
  </div>

  <div className="badge">
    <div className="badge-icon">
      <i className="bi bi-palette-fill"></i>
    </div>
    <span>Modern UI/UX</span>
  </div>

  <div className="badge">
    <div className="badge-icon">
      <i className="bi bi-graph-up-arrow"></i>
    </div>
    <span>Business-oriented designs</span>
  </div>
</div>

          </div>

          <div className="stats-card">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
            <button className="stats-cta">
              Design. Develop. Dominate Online.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
