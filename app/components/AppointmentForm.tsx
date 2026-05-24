"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Replace these with your EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';     // Get from EmailJS
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // Get from EmailJS
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // Get from EmailJS

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          message: formData.message,
          to_email: 'contact@drmanojhomeopathy.com', // Your clinic email
        },
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Appointment booked successfully! We will contact you shortly.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="appointment-form-container">
      <h3>Quick Appointment</h3>
      
      {submitStatus.type === 'success' && (
        <div className="alert-success">
          ✅ {submitStatus.message}
        </div>
      )}
      
      {submitStatus.type === 'error' && (
        <div className="alert-error">
          ❌ {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option>Chronic Disease Treatment</option>
          <option>Mental Wellness</option>
          <option>Pediatric Care</option>
          <option>Women's Health</option>
          <option>Online Consultation</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows={3}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Booking...' : 'Book Appointment →'}
        </button>
      </form>
    </div>
  );
}