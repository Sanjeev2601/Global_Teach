import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import ContactUs from './ContactUs/ContactUs';
import AboutUs from './AboutUs/AboutUs';
import ThemeProvider from './Context/ThemeContext'; // Import the ThemeContext

function App() {
  return (
    <ThemeProvider> {/* Wrap the entire app with ThemeProvider */}
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
