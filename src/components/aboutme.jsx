import React from 'react';
import './aboutme.css';

function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-content">
        <div className="aboutme-text">
          <h1>My Story</h1>
          <p>
            As an Algerian-American photographer, my passion for capturing the world through my lens is deeply rooted in my 
            diverse cultural heritage and unique perspective. With years of experience, I’ve honed my skills in creating visually 
            compelling stories that resonate with authenticity and emotion. My journey began with a simple love for photography, 
            but it has grown into a profound career where I specialize in working with small and medium-sized businesses to elevate their brand presence. 
            Whether it's through striking portraits, dynamic lifestyle shots, or captivating product photography, my mission is to help businesses build a strong, 
            recognizable brand that speaks to their audience. I believe that photography is more than just taking pictures—it's about creating a visual narrative that 
            can connect people, evoke emotions, and build lasting impressions. Through my work, I aim to bridge the gap between the digital and real worlds, helping businesses 
            and individuals alike to create connections that transcend beyond the internet, leaving a lasting impact.
          </p>

          <button className="contact-button">
            <a href="mohammed.guessoum14@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>Contact me</a>
          </button>
        </div>
        <div className="aboutme-image">
          <img src="/aboutmephoto.jpg" alt="About Me" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
