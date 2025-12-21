import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <span className="section-label">CONTACT US</span>
          <h2 className="section-title">
            Let’s Build Your <span>Website</span>
          </h2>
          <p className="subtitle">
            Ready to start your project? Get in touch and let's create something amazing together.
          </p>
        </div>

        {/* Content */}
        <div className="contact-wrapper">
          {/* Left Card */}
          <div className="contact-info">
            <h3>Get in Touch</h3>

           <div className="info-item">
  <span className="icon">
    <i className="bi bi-envelope-fill"></i>
  </span>
  <div>
    <strong>Email</strong>
    <p>shehanaa56@gmail.com</p>
  </div>
</div>

<div className="info-item">
  <span className="icon">
    <i className="bi bi-telephone-fill"></i>
  </span>
  <div>
    <strong>Phone</strong>
    <p>+91 9037258541</p>
  </div>
</div>

<div className="info-item">
  <span className="icon">
    <i className="bi bi-geo-alt-fill"></i>
  </span>
  <div>
    <strong>Location</strong>
    <p>Available Worldwide</p>
  </div>
</div>


          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
