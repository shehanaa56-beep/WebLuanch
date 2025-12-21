import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text:
        'WEBLAUNCH delivered a stunning website that increased our leads by 100%. The attention to detail and understanding of our business goals was exceptional.',
      name: 'Rashik',
      role: 'owner',
      initial: 'S'
    },
    {
      id: 2,
      text:
        'Working with WEBLAUNCH was a game-changer. Our e-commerce site is fast, beautiful, and converts like never before. Highly recommended!',
      name: 'Michael',
      role: 'Founder, StyleHub',
      initial: 'M'
    },
    {
      id: 3,
      text:
        'The team understood my vision perfectly and created a portfolio that truly represents my work. Professional, timely, and incredibly talented.',
      name: 'Alen',
      role: 'Creative Director',
      initial: 'E'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title">
             <span>What Clients Say</span>
          </h2>
          <p className="subtitle">
            Don't just take our word for it — hear from our satisfied clients.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(item => (
            <div key={item.id} className="testimonial-card">
              <div className="quote-icon">❝</div>

              <div className="stars">
                ★★★★★
              </div>

              <p className="testimonial-text">"{item.text}"</p>

              <div className="client">
                <div className="avatar">{item.initial}</div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
