import React from 'react';
import './About.css';
export default function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails
          in a lively but casual environment. The restaurant features locally-sourced ingredients and a
          seasonal menu inspired by Mediterranean flavors.
        </p>
      </div>
      <div className="about-images">
        <img src="/icons_assets/restaurant chef B.jpg" alt="Chef Mario" className="img1" />
        <img src="/icons_assets/Mario and Adrian b.jpg" alt="Chef Adrian" className="img2" />
      </div>
    </section>
  );
}
