import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Sohaib Gallery. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/sohaib.gallery/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://dot.cards/sohaib" target="_blank" rel="noopener noreferrer">
          <CgProfile  />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
