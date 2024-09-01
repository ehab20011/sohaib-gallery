import React from 'react';
import { Link } from 'react-router-dom';
import './work.css';

function Work() {
  return (
    <div className="work-page">
      <div className="work-sections">
        <Link to="/photos" className="work-section">
          <div className="section-content">
            <img src="/khaleds/18.jpg" alt="Photos" className="section-image" />
            <div className="overlay-text">PHOTOS</div>
          </div>
        </Link>
        <Link to="/videos" className="work-section">
          <div className="section-content">
            <video src="/workvideo.mp4" className="section-video" autoPlay loop muted></video>
            <div className="overlay-text">VIDEOS</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Work;
