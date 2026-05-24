"use client";

import { useState } from 'react';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment booked:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="appointment-hero">
        <div className="appointment-hero-content">
          <h1>Book Your Appointment</h1>
          <p>Take the first step towards natural healing</p>
        </div>
      </section>

      <div className="appointment-page-container">
        <div className="appointment-page-grid">
          {/* Appointment Form */}
          <div className="appointment-form-container">
            <h2>Schedule a Consultation</h2>
            {submitted && (
              <div className="success-message">
                ✅ Appointment request sent successfully! We'll contact you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="appointment-form-page">
              <div className="form-row">
                <div className="form-input-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-input-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-input-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-input-group">
                  <label>Select Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="chronic">Chronic Disease Treatment</option>
                    <option value="mental">Mental Wellness</option>
                    <option value="pediatric">Pediatric Care</option>
                    <option value="women">Women's Health</option>
                    <option value="online">Online Consultation</option>
                    <option value="skin">Skin Care</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-input-group">
                  <label>Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-input-group">
                  <label>Preferred Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-input-group">
                <label>Additional Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your health concerns..."
                ></textarea>
              </div>

              <button type="submit" className="submit-appointment-btn">
                Book Appointment →
              </button>
            </form>
          </div>

          {/* Information Sidebar */}
          <div className="appointment-info-sidebar">
            <div className="info-card">
              <h3>📋 Before Your Visit</h3>
              <ul>
                <li>✓ Bring your medical history</li>
                <li>✓ List of current medications</li>
                <li>✓ Any previous test reports</li>
                <li>✓ Arrive 10 minutes early</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>💰 Consultation Fees</h3>
              <div className="fee-item">
                <span>First Consultation</span>
                <span className="fee-price">₹500</span>
              </div>
              <div className="fee-item">
                <span>Follow-up Visit</span>
                <span className="fee-price">₹300</span>
              </div>
              <div className="fee-item">
                <span>Online Consultation</span>
                <span className="fee-price">₹400</span>
              </div>
            </div>

            <div className="info-card">
              <h3>🕐 Clinic Hours</h3>
              <div className="hours-item">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
            </div>

            <div className="info-card">
              <h3>📞 Need Help?</h3>
              <p>Call us directly to book an appointment</p>
              <div className="help-phone">+91 98765 43210</div>
              <div className="help-email">contact@drmanojhomeopathy.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}