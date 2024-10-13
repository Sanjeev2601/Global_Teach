import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // Added 'Link' import
import './Navbar.css';

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark-navbar' : 'light-navbar'}`}>
      <div className="logo">Mengi-national</div>
      <ul className="nav-links">
        <li><a href="/">Product</a></li>
        <li><a href="/about">About</a></li>
        <li><Link to="/contact">Contact</Link></li> {/* Using Link here */}
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
