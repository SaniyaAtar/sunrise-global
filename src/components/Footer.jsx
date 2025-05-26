import React from 'react';
import '../Style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Sunrise Global</h2>
          <p>Delivering purity, health, and trust through our premium edible & non-edible oils.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>Email: solunkesuryday68@gmail.com</li>
              <li>Phone: +91 9373938878</li>
              <li>Location: Pune, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Saniya Atar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
