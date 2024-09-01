import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="/logo.png" alt="Homepage Logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#booking">Booking</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
