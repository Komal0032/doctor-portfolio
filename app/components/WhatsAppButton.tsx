"use client";

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Hide button when scrolling down (optional)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "919764966675"; // India format: 91 + 9764966675
  const defaultMessage = "Hello Dr. Krushna, I want to book an appointment";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${!isVisible ? 'hidden' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-icon">
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.588 2.014.896 3.149.896h.002c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.768-5.766-5.768zm2.392 8.24c-.129.363-.767.712-1.047.748-.28.037-.618.057-1.003-.06-.38-.116-.868-.34-1.58-.978-.882-.784-1.48-1.73-1.654-2.023-.173-.293-.416-.78-.183-1.2.19-.342.494-.408.663-.456.17-.048.34-.046.466.008.126.054.253.216.38.472.127.256.43.87.494.952.064.081.108.18.024.332-.084.153-.124.223-.248.34-.124.117-.256.219-.166.351.09.132.4.66.858 1.066.59.524.96.711 1.147.784.124.048.266.038.358-.042.092-.08.295-.344.375-.467.08-.123.16-.099.27-.057.11.042.708.334.83.394.122.061.202.091.232.144.03.053.03.303-.099.666z"/>
        </svg>
      </div>
      <span className="whatsapp-text">
        Chat on WhatsApp
      </span>
      <div className="whatsapp-tooltip">
        👋 Get instant reply!
      </div>
    </a>
  );
}