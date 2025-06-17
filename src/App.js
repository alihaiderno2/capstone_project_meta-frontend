import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Specials from './Specials';
import About from './About';
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
      </main>
      <footer>
              <Footer />
      </footer>
    </div>
  );
}

export default App;
