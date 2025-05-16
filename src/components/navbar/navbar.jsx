import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/OfficalLogo2Real.png';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close the menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>

      <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.path} className="navbar-item">
            <Link to={item.path} className={`navbar-link ${location.pathname === item.path ? 'navbar-link-active' : ''}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-contact">
        <p className="contact-text">Call: 0239493443</p>
        <p className="contact-text">Email: maintenanceman@gmail.com</p>
      </div>

      <button className="navbar-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {menuOpen && (
        <div className="navbar-overlay">
          <ul className="overlay-links">
            {navItems.map((item) => (
              <li key={item.path} className="overlay-item">
                <Link to={item.path} className="overlay-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="overlay-close-button" onClick={() => setMenuOpen(false)}>
            Close ✕
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
