import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../Context/ThemeContext'; // Import the context

function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Use the context

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-navbar' : 'light-navbar'}`}>
      <div className="logo">Mengi-national</div>
      <ul className="nav-links">
        <li><NavLink exact to="/">Product</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
