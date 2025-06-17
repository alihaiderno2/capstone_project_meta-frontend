import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/icons_assets/Logo .svg" alt="Little Lemon Logo" />
      </div>
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/reservations">Reservations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>123 Lemon St, Chicago</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">X (Twitter)</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
