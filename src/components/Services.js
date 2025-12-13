import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Website Design & Development',
      description: 'Modern, responsive, and SEO-friendly websites tailored to your business needs.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Business & Portfolio Websites',
      description: 'Professional websites to showcase your brand, services, and achievements.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21L21 21M19 21H14M5 21L3 21M5 21H10M9 9H15M9 13H15M9 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'E-commerce Websites',
      description: 'High-performance online stores with secure payment integration.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H21L19 13H7L5 21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
          <circle cx="15" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'React / Modern Web Apps',
      description: 'Fast, scalable applications using cutting-edge frameworks and technologies.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1C16.9706 1 21 5.92487 21 12C21 18.0751 16.9706 23 12 23" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1C7.02944 1 3 5.92487 3 12C3 18.0751 7.02944 23 12 23" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Website Redesign',
      description: 'Transform outdated websites into premium, high-converting experiences.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 3L12 12L9 9L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 3H15M21 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <span className="services-label">OUR SERVICES</span>
          <h2 className="section-title">
            What We Do <span className="highlight">Best</span>
          </h2>
          <p className="services-subtitle">
            We offer a comprehensive range of web development services to help your business thrive online.
          </p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
