import React from "react";
import "../Style/Products.css";

const products = [
  {
    title: "Sunflower Seed Oil",
    description:
      "A versatile, light, and healthy cooking oil extracted from premium sunflower seeds.",
    image:
      "https://leenaoverseas.com/wp-content/uploads/2024/12/51ucq6x07rL._AC_UF10001000_QL80_-1.jpg",
  },
  {
    title: "Mustard Oil",
    description:
      "A flavorful and aromatic mustard oil known for its health-enhancing properties.",
    image:
      "https://leenaoverseas.com/wp-content/uploads/2024/12/mustard-oil-500x500-1.webp",
  },
  {
    title: "Refined Oils",
    description:
      "Premium-quality refined oils suitable for varied culinary and industrial uses.",
    image:
      "https://leenaoverseas.com/wp-content/uploads/2024/12/refined-soybean-oil-org-37474556613595313-1.webp",
  },
  {
    title: "Spices",
    description:
      "Premium-quality spices direct from farmers and in bulk and selected best.",
    image:
      "https://leenaoverseas.com/wp-content/uploads/2024/12/clipboard-5.jpg",
  },
];

const Products = () => {
  return (
    <section className="featured-section">
      <h2 className="title">Our Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.title} className="product-img" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-desc">{product.description}</p>
          </div>
        ))}
      </div>
      <button className="query-btn">Contact</button>
    </section>
  );
};

export default Products;
