import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We serve fresh and delicious Mediterranean dishes, straight from our family recipes.</p>
        <button>Start Free Trial</button>
      </div>
      <div className="hero-image">
        <img src="/icons_assets/Mario and Adrian A.jpg" alt="Delicious dish" />
      </div>
    </section>
  );
}
