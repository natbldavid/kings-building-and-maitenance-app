import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HomeScreen from '../components/maincontent/homescreen/homescreen';
import AboutUsScreen from '../components/maincontent/aboutusscreen/aboutusscreen';
import './Layout.css';

const Layout = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutUsScreen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
