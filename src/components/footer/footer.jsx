import React from 'react';
import './Footer.css';
import manateeicon from '../../assets/TeamManateeLogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={manateeicon} alt="Manatee Icon" className="footer-icon" />
      <span>Created by Manatee Web Creation</span>
    </footer>
  );
};

export default Footer;
