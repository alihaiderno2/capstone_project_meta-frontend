import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import MainPage from './pages/MainPage';
import BookingPage from './pages/BookingPage';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
