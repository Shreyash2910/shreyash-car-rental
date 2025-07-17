import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import TopRentals from './pages/TopRentals';
import LuxuryCars from './pages/LuxuryCars';
import AffordableCars from './pages/AffordableCars';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<TopRentals />} />
        <Route path="/luxury" element={<LuxuryCars />} />
        <Route path="/affordable" element={<AffordableCars />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
