import React from 'react';
import './homepage.css';
import Navbar from './Navbar';

function Homepage() {
    return (
      <div className="homepage">
        <Navbar />
        <div className="homepage-center-content">
          <h1 className="homepage-title">Sohaib Gallery</h1>
          <p className="homepage-tagline">Capturing Moments, Creating Memories</p>
        </div>
        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">Follow Us</p>
            <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram social-icon"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f social-icon"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter social-icon"></i>
            </a>
            </div>

          </div>
        </footer>
      </div>
    );
  }
  

export default Homepage;
