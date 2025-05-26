import React from "react";
import "../Style/About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <center> <h2 className="title">About Us</h2></center>
      <header className="about-hero">
       
        <h1>SUNRISE GLOBAL</h1>
        <p>Pure Oils. Trusted Worldwide.</p>
      </header>

      <section className="company-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Sunsire Global began with a mission: to bring the purity of nature to every kitchen and industry.
            We specialize in the production and export of 100% pure Sunflower Seed Oil, Mustard Oil, and premium Refined Oils.
            Our oils are processed with care to retain their natural benefits and meet the highest international quality standards.
          </p>
          <p>
            From the fields to the bottle, every step is guided by our core values—purity, health, and trust. Whether it's edible oils for a healthy diet or non-edible oils for industrial excellence, we deliver the best.
          </p>
        </div>
        <div className="story-image">
          <img src="https://tse4.mm.bing.net/th?id=OIP.Z6dNysEYu4WsTtVZlH4DggHaE8&pid=Api&P=0&h=180" alt="Oil Pouring" />
        </div>
      </section>

      <section className="values-section">
        <h2>Why Choose SunriseGlobal?</h2>
        <div className="value-grid">
          <div className="value-item">
            <h3>100% Natural</h3>
            <p>Cold-pressed and refined with precision to preserve the original taste and nutrition.</p>
          </div>
          <div className="value-item">
            <h3>Health First</h3>
            <p>Rich in essential fatty acids and free from harmful chemicals—perfect for modern lifestyles.</p>
          </div>
          <div className="value-item">
            <h3>Global Standards</h3>
            <p>Our operations are globally certified and meet diverse international requirements.</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <h3>Serving Quality Globally</h3>
        <p>
          With a growing footprint across continents, GoldHarvest Naturals is proud to deliver premium oils to households and industries in Asia, Europe, Africa, and beyond.
        </p>
      </footer>
    </div>
  );
};

export default About;
