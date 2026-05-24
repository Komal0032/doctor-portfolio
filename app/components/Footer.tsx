"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <h3>Dr. Krushna's Homeopathy Clinic</h3>
            <p>Restoring the deep balance of mind, body, and spirit through natural homeopathy treatments.</p>
            <div className="footer-trust-badge">
              <span>✓ 4+ Years Experience</span>
              <span>✓ 10,000+ Patients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div className="footer-hours">
            <h4>Clinic Hours</h4>
            <ul>
              <li><span>Monday - Friday:</span> <span>9am - 8pm</span></li>
              <li><span>Saturday:</span> <span>10am - 6pm</span></li>
              <li><span>Sunday:</span> <span>10am - 2pm</span></li>
              <li className="emergency"><span>Emergency:</span> <span>24/7 Available</span></li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              {/* Facebook */}
              <a 
                href="https://facebook.com/drkrushnahomeopathy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>

              {/* Instagram */}
<a 
  href="https://www.instagram.com/aarogyamhomoeopathy" 
  target="_blank" 
  rel="noopener noreferrer"
  className="social-icon instagram"
  aria-label="Instagram"
>
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://x.com/drkrushnahomeopathy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon twitter"
                aria-label="X (Twitter)"
              >
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@drkrushnahomeopathy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon youtube"
                aria-label="YouTube"
              >
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/drkrushnahomeopathy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon linkedin"
                aria-label="LinkedIn"
              >
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.203 0 22.225 0z"/>
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="footer-contact-info">
              <p><span>📞</span> +91 9764966675</p>
              <p><span>✉️</span> aarogyamhomoeopathynashik@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Dr. Krushna's Homeopathy Clinic. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}