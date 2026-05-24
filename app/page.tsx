import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=600&fit=crop" 
          alt="Homeopathy Healing" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <h2 className="hero-title">
  "Lasting Health Blooms by <span className="hero-highlight">Healing the Source Within</span>"
</h2>
<p className="hero-subtitle">
  Welcome to personalized healing at Dr. Krushna's Homeopathy Clinic. 
  Realigning your life's natural balance for an enduring sense of well-being.
</p>
          <div className="hero-buttons">
            <a href="/appointment" className="btn-get-started">
    Book Appointment
</a>
            <a href="#video" className="btn-watch-video">
              <span className="play-icon">▶</span>
              Watch Video
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      
      
      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive Homeopathy Treatments</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌿</div>
              <h3>Chronic Disease Treatment</h3>
              <p>Effective treatment for arthritis, asthma, diabetes, and other chronic conditions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💆</div>
              <h3>Mental Wellness</h3>
              <p>Treatment for anxiety, depression, stress, and sleep disorders.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👶</div>
              <h3>Pediatric Care</h3>
              <p>Gentle and safe homeopathy treatments for children of all ages.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👩</div>
              <h3>Women's Health</h3>
              <p>Specialized care for hormonal issues, PCOS, and menstrual problems.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>Online Consultation</h3>
              <p>Convenient video consultations from the comfort of your home.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🍃</div>
              <h3>Skin Care</h3>
              <p>Natural treatment for eczema, psoriasis, acne, and allergies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle">What Makes Dr. Krushna's Clinic Special</p>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Treatment</h3>
              <p>Every patient receives a customized treatment plan based on their unique symptoms and constitution.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <h3>100% Natural Remedies</h3>
              <p>All medicines are natural, safe, and free from side effects.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💯</div>
              <h3>Proven Results</h3>
              <p>Thousands of satisfied patients with long-lasting results.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Expert Practitioner</h3>
              <p>Dr. Krushna is a certified and experienced homeopathy specialist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">Real Stories, Real Results</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Dr. Krushna treated my chronic migraine when nothing else worked. Within 3 months, my headaches reduced by 90%!"
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">⭐</div>
                <div>
                  <h4>Priya Sharma</h4>
                  <p>Migraine Patient</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "The online consultation was very convenient. Dr. Krushna's treatment for my son's allergies was gentle and effective."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">⭐</div>
                <div>
                  <h4>Rajesh Kumar</h4>
                  <p>Parent of Patient</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "After years of suffering from arthritis, I finally found relief with Dr. Krushna's homeopathy treatment."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">⭐</div>
                <div>
                  <h4>Sunita Mehta</h4>
                  <p>Arthritis Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="appointment-section">
        <div className="container">
          <div className="appointment-grid">
            <div className="appointment-info">
              <h2>Book Your Appointment Today</h2>
              <p>Take the first step towards natural healing. Schedule a consultation with Dr. Krushna.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 9764966675</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <h4>Email</h4>
                    <p>aarogyamhomoeopathynashik@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>Arogyam Homeopathy clinic Kiran Apartment, Gangotri Vihar, Amrutdham, Nashik -422006</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="appointment-form">
              <h3>Quick Appointment</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Phone Number" required />
                <select required>
                  <option value="">Select Service</option>
                  <option>Chronic Disease Treatment</option>
                  <option>Mental Wellness</option>
                  <option>Pediatric Care</option>
                  <option>Women's Health</option>
                  <option>Online Consultation</option>
                </select>
                <input type="date" required />
                <textarea rows={3} placeholder="Your Message"></textarea>
                <button type="submit" className="submit-btn">Book Appointment →</button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}