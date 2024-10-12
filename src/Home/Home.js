import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';  // Adjust path based on your project structure
import h1 from '../assets/home1.gif';   // Importing the gif
import './Home.css';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);  // State for selected video
  const [isProcessing, setIsProcessing] = useState(false);   // State for processing
  const [videoURL, setVideoURL] = useState(null);            // State to store video URL

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
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

  // Function to handle video upload
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedVideo(file);
      setIsProcessing(true);

      // Simulate processing time of 8 seconds
      setTimeout(() => {
        const videoUrl = URL.createObjectURL(file);
        setVideoURL(videoUrl);  // Set video URL to play the uploaded video
        setIsProcessing(false);  // Stop processing state
      }, 8000);
    }
  };

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <main className="content-section">
        {/* Left side: GIF */}
        <div className="left-side">
          <img src={h1} alt="Home gif" className="gif" />
        </div>

        {/* Right side: Video Upload Section */}
        <div className="right-side">
          <h2>Upload your video to play in your native language</h2>
          <input 
            type="file" 
            accept="video/*" 
            onChange={handleVideoUpload} 
            className="upload-btn"
          />

          {/* Show processing message */}
          {isProcessing && <p className="processing">Processing...</p>}

          {/* Show video player after processing */}
          {videoURL && !isProcessing && (
            <video width="320" height="240" controls>
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
