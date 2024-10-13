import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark-navbar' : 'light-navbar'}`}>
      <div className="logo">Mengi-national</div>
      <ul className="nav-links">
        <li>
          <NavLink 
            exact
            to="/" 
            activeClassName="active-link"
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            activeClassName="active-link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            activeClassName="active-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
