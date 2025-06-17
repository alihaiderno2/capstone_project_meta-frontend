import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Specials from '../components/Specials';
export default function MainPage() {
  return (
    <>
      <Hero />
      <Specials />
      <About />
      <Testimonials />
    </>
  );
}
