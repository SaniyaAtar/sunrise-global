import React, { useState, useEffect } from "react";
import "../Style/HeroSection.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/img1.jpeg",
      title: "Welcome to Our Store",
      subtitle: "Sunrise Global",
     
    },
    {
      image: "/img2.jpeg",
      title: "Summer Collection",
      subtitle: "New arrivals every week",
      
    },
    {
      image: "/img3.jpeg",
      title: "Special Discounts",
      subtitle: "Up to 50% off selected items",
      
    }
  ];

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={index === currentSlide ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;