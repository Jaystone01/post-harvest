import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import AboutUs from './components/AboutUs';
import StorageTips from './components/StorageTips';
import StorageLocations from './components/StorageLocations';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register'


// Detail pages
import TomatoDetails from './pages/TomatoDetails';
import YamsDetails from './pages/YamsDetails';
import OnionDetail from './pages/OnionDetail';
import MaizeDetails from './pages/MaizeDetails';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickLinks />
      <AboutUs />
      <StorageTips />
      <StorageLocations />
      <Testimonial />
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tomato" element={<TomatoDetails />} />
        <Route path="/maize" element={<MaizeDetails />} />
        <Route path="/onion" element={<OnionDetail />} />
        <Route path="/yams" element={<YamsDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
