import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
         <div className="logo">
  <img
    src="/images/2.jpg"
    alt="WEBLUANCH Logo"
    className="logo-image"
  />
</div>
          <div className="brand-name">
            <span className="brand-web">WEB</span>
            <span className="brand-luach">LUACH</span>
          </div>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
            <li><a href="#portfolio" onClick={closeMobileMenu}>Portfolio</a></li>
            <li><a href="#process" onClick={closeMobileMenu}>Process</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
        </nav>

        <div className="cta-container">
          <button className="cta-button">Get in touch</button>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
