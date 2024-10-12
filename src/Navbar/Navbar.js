// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">Mengi-national</div>
      <ul className="nav-links">
        <li><a href="/">Product</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
