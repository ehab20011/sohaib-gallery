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
      
    </div>
  );
}

export default Homepage;
