import React from 'react';
import './Specials.css';

const specials = [
  {
    title: 'Greek Salad',
    image: '/icons_assets/greek salad.jpg',
    price: '$12.99',
    description: 'Crispy lettuce, peppers, olives, and our Chicago-style feta cheese.',
  },
  {
    title: 'Bruschetta',
    image: '/icons_assets/bruchetta.svg',
    price: '$7.99',
    description: 'Grilled bread with garlic, salt, tomatoes, and olive oil.',
  },
  {
    title: 'Lemon Dessert',
    image: '/icons_assets/lemon dessert.jpg',
    price: '$5.99',
    description: 'A sweet and tangy lemon cake served with whipped cream.',
  },
];

export default function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="special-card-content">
              <div className="special-card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <a href="/" className="order-link">Order Delivery →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
