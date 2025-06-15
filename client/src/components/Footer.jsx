import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../Style/Footer.css';

const Footer = () => {
  const whatsappNumber = "919373938878";
  const whatsappMessage = "Hello%20Sunrise%20Global,%20I%20would%20like%20to%20know%20more%20about%20your%20products.";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Sunrise Global</h2>
            <p className="footer-description">
              Delivering purity, health, and trust through our premium edible & non-edible oils.
            </p>
            <div className="footer-social">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
                className="whatsapp-button"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp className="whatsapp-icon" />
              
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/products" className="footer-link">Products</a></li>
                <li><a href="/contact" className="footer-link">Contact</a></li>
                <li><a href="/careers" className="footer-link">Careers</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li className="footer-contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:solunkesuryday68@gmail.com" className="footer-link">solunkesuryday68@gmail.com</a>
                </li>
                <li className="footer-contact-item">
                  <FaPhone className="contact-icon" />
                  <a href="tel:+919373938878" className="footer-link">+91 9373938878</a>
                </li>
                <li className="footer-contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Pune, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Sunrise Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;