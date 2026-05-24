"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Send form data to Netlify
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      });
      
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero-new">
        <div className="contact-hero-content-new">
          <h1># Dr Krushna's Homeopathy</h1>
        </div>
      </section>

      <div className="contact-page-new">
        <div className="contact-grid-new">
          {/* Left Side - Address & Info */}
          <div className="contact-info-new">
            <div className="info-card-new">
              <h2>Address</h2>
              <p>
                Arogyam Homeopathy clinic Kiran Apartment, Gangotri Vihar, Amrutdham, Nashik -422006
              </p>
              <a href="#" className="share-location">Share Location →</a>
            </div>

            <div className="info-card-new">
              <h2>EMAIL</h2>
              <p>aarogyamhomoeopathynashik@gmail.com</p>
            </div>

            <div className="info-card-new">
              <h2>PHONE</h2>
              <p>Call / WhatsApp: 9764966675</p>
              <p>Landline: </p>
            </div>

            <div className="info-card-new">
              <div className="keyboard-shortcuts">
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="contact-map-new">
            <div className="map-container-new">
              <iframe  
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3748.8866857581183!2d73.82297317522936!3d20.01326998139403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDAwJzQ3LjgiTiA3M8KwNDknMzIuMCJF!5e0!3m2!1sen!2sin!4v1779624548868!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Section - NETLIFY READY */}
        <div className="contact-form-section-new">
          <div className="form-container-new">
            <h2>Get in Touch</h2>
            {submitted && (
              <div className="success-message-new">
                ✅ Thank you! We'll get back to you soon.
              </div>
            )}
            
            {/* IMPORTANT: Added Netlify form attributes */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="contact-form-new"
            >
              {/* Netlify required hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <input name="bot-field" />
              </div>

              <div className="form-row-new">
                <div className="form-group-new">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group-new">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>

              <div className="form-row-new">
                <div className="form-group-new">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div className="form-group-new">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your address"
                  />
                </div>
              </div>

              <div className="form-group-new">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="submit-btn-new"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: loading ? '#94a3b8' : '#059669',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  marginTop: '1rem'
                }}
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>

              <div className="we-are-here">
                <p>WE'RE HERE FOR YOU</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}