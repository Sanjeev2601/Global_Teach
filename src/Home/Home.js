import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Mengi-national</div>
        <ul className="nav-links">
          <li><a href="/">Product</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>

      <main className="hero-section">
        <h1>Websites</h1>
        <h2>The leader in website design</h2>
        <button className="hero-btn">Get Started</button>
      </main>
    </div>
  );
}

export default Home;
