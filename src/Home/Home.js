import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faCloud, faBookOpen, faUpload } from '@fortawesome/free-solid-svg-icons'; // FontAwesome Icons
import Navbar from '../Navbar/Navbar'; 
import h1 from '../assets/home1.gif'; 
import './Home.css';
import Footer from '../Footer/Footer';
import azureBlobImage from '../assets/Azure1.png'; 
import azureCosmosImage from '../assets/Azure2.png'; 

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [fromLanguage, setFromLanguage] = useState(''); // State for language from
  const [toLanguage, setToLanguage] = useState(''); // State for language to
  const [isProcessing, setIsProcessing] = useState(false); 
  const [videoURL, setVideoURL] = useState(null); 
  const [showPopup, setShowPopup] = useState(false); // For Azure Services pop-up
  const [uploadedFileName, setUploadedFileName] = useState(''); // To display uploaded file name

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

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedVideo(file);
      setUploadedFileName(file.name); // Display the name of the file uploaded
    }
  };

  const handleSubmit = () => {
    if (selectedVideo && fromLanguage && toLanguage) {
      setIsProcessing(true);
      setTimeout(() => {
        const videoUrl = URL.createObjectURL(selectedVideo);
        setVideoURL(videoUrl); // Only set the video URL after processing
        setIsProcessing(false);
      }, 5000); // Simulate processing time
    } else {
      alert("Please upload a video and select both languages.");
    }
  };

  const handleAzureServicesClick = () => {
    setShowPopup(true);
    document.body.classList.add('no-scroll'); // Disable background scrolling
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.classList.remove('no-scroll'); // Enable background scrolling
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <div className="content-section">
        <div className="left-side">
          <img src={h1} alt="Home gif" className="gif" />
        </div>
        <div className="right-side">
          {isProcessing ? (
            <div className="upload-box processing">
              <div className="loader"></div>
              <p className="processing-text">Processing...</p>
            </div>
          ) : videoURL ? (
            <video width="320" height="240" controls>
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className={`upload-box ${isDarkMode ? 'dark-mode-upload-box' : 'light-mode-upload-box'}`}>
              <h2>Upload your video to play in your native language</h2>
              <label className="upload-label" htmlFor="upload-input">
                <FontAwesomeIcon icon={faUpload} className="upload-icon" />
              </label>
              <input 
                type="file" 
                id="upload-input"
                accept="video/*" 
                onChange={handleVideoUpload} 
                className="upload-input"
              />
              <p className="upload-now">Upload Now!</p>

              {/* Show file name after upload */}
              {uploadedFileName && <p className="uploaded-file-name">{uploadedFileName}</p>}

              {/* Language Selection Dropdowns */}
              <div className="language-select">
                <label>Language From:</label>
                <select value={fromLanguage} onChange={(e) => setFromLanguage(e.target.value)}>
                  <option value="">Select</option>
                  {["English", "French", "Spanish", "Hindi", "Arabic", "Tamil", "Mandarin", "Japanese", "Korean", "Tagalog"].map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>

                <label>Language To:</label>
                <select value={toLanguage} onChange={(e) => setToLanguage(e.target.value)}>
                  <option value="">Select</option>
                  {["English", "French", "Spanish", "Hindi", "Arabic", "Tamil", "Mandarin", "Japanese", "Korean", "Tagalog"].map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Key Features Section */}
      <section className="key-features sticky-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">
              <FontAwesomeIcon icon={faMicrophoneAlt} />
            </div>
            <h3>AI-Powered Voices</h3>
            <p>Transform your content with natural, lifelike speech synthesis powered by AI.</p>
          </div>
          <div className="feature-card" onClick={handleAzureServicesClick}>
            <div className="icon">
              <FontAwesomeIcon icon={faCloud} />
            </div>
            <h3>Azure Services</h3>
            <p>Leverage the power of Microsoft Azure for robust, scalable solutions.</p>
          </div>
          <div className="feature-card">
            <div className="icon">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <h3>Personalized Learning</h3>
            <p>Deliver tailored educational experiences through adaptive learning technologies.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
