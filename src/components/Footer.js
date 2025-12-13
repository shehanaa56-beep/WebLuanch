import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <span>W</span>
              <h3>WEBLUACH</h3>
            </div>
            <p>
              We build stunning websites that convert visitors into clients.
              Modern, fast, and designed for growth.
            </p>

            <div className="social-icons">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="GitHub">🐱</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">𝕏</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Website Design</a></li>
              <li><a href="#services">E-commerce</a></li>
              <li><a href="#services">Web Applications</a></li>
              <li><a href="#services">Website Redesign</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} WEBLUACH. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
