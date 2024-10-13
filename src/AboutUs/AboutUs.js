import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import Navbar from '../Navbar/Navbar';
import avatar from '../assets/avatars/avatar.jpg';

function AboutUs() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="about-container">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our innovative platform that revolutionizes communication through advanced speech-to-speech conversion technology. Our system features an avatar with lip-sync capabilities that can translate speech into any language, making global communication seamless and effective.
        </p>
        <div className="avatar-section">
          <img src={avatar} alt="Avatar" className="avatar_img" />
          <p className="avatar-description">
            Our avatar not only translates speech but also lip-syncs to provide a more engaging and realistic experience. Whether you're communicating with someone across the globe or learning a new language, our technology ensures that language is no longer a barrier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
