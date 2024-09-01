import React from 'react';
import './homepage.css';
import Navbar from './Navbar';
import { FaInstagram } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";


function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepage-center-content">
        <h1 className="homepage-title">Sohaib Gallery</h1>
        <p className="homepage-tagline">Capturing Moments, Creating Memories</p>
      </div>
      <footer className="homepage-footer">
        <p>© 2024 Sohaib Gallery. All rights reserved.</p>
        <div className="homepage-footer-icons">
          <a href="https://www.instagram.com/sohaib.gallery/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://dot.cards/sohaib" target="_blank" rel="noopener noreferrer">
            <CgProfile  />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
