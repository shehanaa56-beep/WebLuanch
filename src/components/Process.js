import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      id: '01',
      title: 'Understand Your Business',
      description:
        'We learn about your goals, audience, and vision to create the perfect strategy.'
    },
    {
      id: '02',
      title: 'Design & Planning',
      description:
        'Creating wireframes and designs that align with your brand identity.'
    },
    {
      id: '03',
      title: 'Development',
      description:
        'Building your website with clean, scalable code and modern technologies.'
    },
    {
      id: '04',
      title: 'Testing & Optimization',
      description:
        'Rigorous testing across devices and optimization for performance.'
    },
    {
      id: '05',
      title: 'Launch & Support',
      description:
        'Deploying your website and providing ongoing support and maintenance.'
    }
  ];

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="process-header">
          <span className="process-label">OUR PROCESS</span>
          <h2 className="section-title">
            How We <span className="highlight">Work</span>
          </h2>
          <p className="process-subtitle">
            A streamlined process designed to deliver exceptional results efficiently.
          </p>
        </div>

        <div className="process-steps">
          {steps.map(step => (
            <div key={step.id} className="process-step">
              <div className="icon-box">
                <span className="step-badge">{step.id}</span>
                <div className="icon-placeholder"></div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
