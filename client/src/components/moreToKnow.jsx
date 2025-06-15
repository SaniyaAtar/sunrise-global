import React from 'react';
import '../Style/MoreToKnow.css';

const data = [
  {
    title: 'Our Team',
    img: 'https://leenaoverseas.com/wp-content/uploads/2024/12/partners-2.png',
    desc: 'Our team is a diverse group of dedicated professionals committed to achieving our common goal. With a wealth of experience and expertise, we work together to deliver outstanding results. We are passionate about what we do and strive to make a positive impact in everything we undertake.'
  },
  {
    title: 'Why Us',
    img: 'https://leenaoverseas.com/wp-content/uploads/2024/12/shrug.png',
    desc: 'At our company, we pride ourselves on providing exceptional service and delivering quality results. Our team is composed of experts in their field, and we stay current with the latest technology and industry trends. We take a personalized approach to each project and strive to exceed our clients’ expectations.'
  },
  {
    title: 'Our Aim',
    img: 'https://leenaoverseas.com/wp-content/uploads/2024/12/target.png',
    desc: 'Our aim is to provide high-quality products and services that exceed customer expectations. We strive to continuously improve and innovate, while maintaining a commitment to ethical and sustainable practices.'
  },
  {
    title: 'Our Infrastructure',
    img: 'https://leenaoverseas.com/wp-content/uploads/2024/12/infrastructure.png',
    desc: 'Our state-of-the-art infrastructure, equipped with the latest technology and equipment, allows us to efficiently and effectively handle all aspects of our operations. We ensure the highest level of quality control and stay ahead of industry standards.'
  },
  {
    title: 'Our Warehouse',
    img: 'https://leenaoverseas.com/wp-content/uploads/2024/12/warehouse.png',
    desc: 'Our warehouse is designed to provide maximum efficiency and security. With advanced storage systems, our products are stored in the best conditions. Our team ensures high levels of cleanliness, organization, and accurate order fulfillment.'
  },
  {
    title: 'Quality Assurance',
    img: 'https://leenaoverseas.com/wp-content/uploads/2024/12/medal.png',
    desc: 'Quality assurance is of utmost importance. We have strict protocols to ensure our products meet the highest standards. Our team regularly conducts inspections and tests to maintain quality and provide the best customer experience.'
  }
];

const MoreToKnow = () => {
  return (
    <div className="more-to-know">
      <h2 className="section-title">More to Know</h2>
      <div className="cards-grid">
        {data.map((item, idx) => (
          <div key={idx} className="cards">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreToKnow;
