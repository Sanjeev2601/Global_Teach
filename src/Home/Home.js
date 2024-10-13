import React, { useContext, useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faCloud, faBookOpen, faUpload } from '@fortawesome/free-solid-svg-icons'; 
import Navbar from '../Navbar/Navbar'; 
import h1 from '../assets/home1.gif'; 
import './Home.css';
import Footer from '../Footer/Footer';
import azureBlobImage from '../assets/Azure1.png'; 
import azureCosmosImage from '../assets/Azure2.png'; 
import { ThemeContext } from '../Context/ThemeContext'; 

function Home() {
  const { isDarkMode } = useContext(ThemeContext); 
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [fromLanguage, setFromLanguage] = useState(''); 
  const [toLanguage, setToLanguage] = useState(''); 
  const [isProcessing, setIsProcessing] = useState(false); 
  const [videoURL, setVideoURL] = useState(null); 
  const [showPopup, setShowPopup] = useState(false); 
  const [uploadedFileName, setUploadedFileName] = useState(''); 

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedVideo(file);
      setUploadedFileName(file.name); 
      console.log(`${file.name.split('.')[0]} is uploaded (file name is ${file.name})`);
    }
  };

  const handleSubmit = () => {
    if (selectedVideo && fromLanguage && toLanguage) {
      setIsProcessing(true);

      // Placeholder for backend integration
      sendFileNameToBackend(uploadedFileName);

      setTimeout(() => {
        const videoUrl = URL.createObjectURL(selectedVideo);
        setVideoURL(videoUrl);
        setIsProcessing(false);
      }, 5000); 
    } else {
      alert("Please upload a video and select both languages.");
    }
  };

  // Placeholder function for sending the file name to the backend
  const sendFileNameToBackend = (fileName) => {
    console.log(`Sending file name ${fileName} to backend...`);
  };

  // Placeholder function for downloading notes for selected languages
  const handleDownloadNotes = (language) => {
    console.log(`Downloading ${language} notes for file: ${uploadedFileName}`);
    // Replace with actual backend call for downloading notes
  };

  const handleAzureServicesClick = () => {
    setShowPopup(true);
    document.body.classList.add('no-scroll');
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar />
      
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
            <>
              <div className="video-container">
                <video width="320" height="240" controls>
                  <source src={videoURL} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Buttons below the video */}
                <div className="notes-buttons">
                  <button 
                    className="download-btn" 
                    onClick={() => handleDownloadNotes(fromLanguage)}
                  >
                    {fromLanguage} Notes
                  </button>
                  <button 
                    className="download-btn" 
                    onClick={() => handleDownloadNotes(toLanguage)}
                  >
                    {toLanguage} Notes
                  </button>
                </div>
              </div>
            </>
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

              {uploadedFileName && <p className="uploaded-file-name">{uploadedFileName}</p>}

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

              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>

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

      {showPopup && (
        <>
          <div className="overlay"></div>
          <div className="popup">
            <div className="popup-header">
              <div className="window-buttons">
                <span className="window-button close" onClick={closePopup}></span>
                <span className="window-button minimize" onClick={closePopup}></span>
                <span className="window-button maximize" onClick={closePopup}></span>
              </div>
              <h2>Azure Services</h2>
            </div>
            <div className="popup-content">
              <h3>Azure Blob Storage</h3>
              <div className="azure-services-grid">
                <p>Azure Blob Storage is used for storing large amounts of unstructured data such as text or binary data.</p>
                <img src={azureBlobImage} alt="Azure Blob Storage" className="popup-image" />
              </div>
              <h3>Azure Cosmos DB</h3>
              <div className="azure-services-grid">
                <img src={azureCosmosImage} alt="Azure Cosmos DB" className="popup-image" />
                <p>Azure Cosmos DB is a fully managed NoSQL database service for building highly responsive and globally distributed applications.</p>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Home;
