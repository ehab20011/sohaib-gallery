import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo.png" alt="Homepage Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/aboutme">About Me</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
