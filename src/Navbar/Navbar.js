// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">Mengi-national</div>
      <ul className="nav-links">
        <li><a href="/">Product</a></li>
        <li><a href="/about">About</a></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <Link to="/aboutus">About</Link>
        <Link to="/contact">Contact</Link> */}
      </ul>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
