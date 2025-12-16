import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Premium Web Development Agency
        </div>

        <h1 className="hero-headline">
          We Build Stunning Websites That <span className="highlight">Turn</span> <span className="highlight">Attention</span> into Action
        </h1>

        <p className="hero-subheadline">
          WEBLUANCH helps businesses grow online with modern, fast, and high-converting websites that leave a lasting impression.
        </p>

        <div className="hero-ctas">
          <button className="cta-primary">
            Get in touch
            <span className="arrow">→</span>
          </button>
        </div>

        <div className="trust-indicators">
          <p className="trust-text">Trusted by businesses worldwide</p>
          <div className="trust-features">
            <div className="feature">
              <span className="feature-dot"></span>
              100% Satisfaction
            </div>
            <div className="feature">
              <span className="feature-dot"></span>
              24/7 Support
            </div>
            <div className="feature">
              <span className="feature-dot"></span>
              Fast Delivery
            </div>
            <div className="feature">
  <span className="feature-dot"></span>
  Quality-Development
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
