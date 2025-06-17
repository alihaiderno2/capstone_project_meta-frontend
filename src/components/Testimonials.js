import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Emily R.",
    review: "Absolutely delicious food and amazing service! Will come again.",
    image: "/icons_assets/avatar3.jpeg",
    rating: 5
  },
  {
    name: "Mark T.",
    review: "Great ambiance and fresh ingredients. Highly recommended!",
    image: "/icons_assets/avatar1.jpeg",
    rating: 4
  },
  {
    name: "Sophia L.",
    review: "Loved the lemon dessert. Everything tasted homemade!",
    image: "/icons_assets/avatar2.jpeg",
    rating: 5
  },
  {
    name: "Daniel M.",
    review: "A hidden gem! Cozy place with top-notch dishes.",
    image: "/icons_assets/download (1).jpeg",
    rating: 4
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} className="avatar" />
            <h3>{item.name}</h3>
            <div className="stars">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
