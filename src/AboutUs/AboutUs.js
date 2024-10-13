import React, { useContext, useState } from 'react';
import './AboutUs.css';
import Navbar from '../Navbar/Navbar';
import { ThemeContext } from '../Context/ThemeContext';
import SD from '../assets/SD.jpg'; // Image import
import elevenLabsIcon from '../assets/elevenlabs.png'; // Assume you have icons for each stack
import azureIcon from '../assets/azure.png';
import expressIcon from '../assets/express.png';
import reactIcon from '../assets/react.png';
import openaiIcon from '../assets/openai.png';
import wav2lipIcon from '../assets/wav2lip.png';
import blobIcon from '../assets/blob.png';

function AboutUs() {
  const { isDarkMode } = useContext(ThemeContext);
  const [flipped, setFlipped] = useState([false, false, false, false]); // Managing flip state for each box
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to track if the popup is open

  const handleFlip = (index) => {
    if (!isPopupOpen) { // Only allow flipping when the popup is not open
      const newFlippedState = [...flipped];
      newFlippedState[index] = !newFlippedState[index];
      setFlipped(newFlippedState);
    }
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };      

  return (
    <div className={`about-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Disable Navbar interaction when pop-up is open by adding a class */}
      <div className={`navbar-overlay ${isPopupOpen ? 'disabled' : ''}`}>
        <Navbar />
      </div>
      <div className="about-content">
        <div className="grid-container">
        <div className={`grid-box ${flipped[0] ? 'flipped' : ''}`} onClick={() => handleFlip(0)}>
          <div className="box-content">
            <div className="box-front">Inspiration</div>
              <div className="box-back">
                <div className="icon-and-title">
                  <i className="fas fa-lightbulb"></i>
                  <h3>Inspiration</h3>
                </div>
                <p>
                Our inspiration came from the challenges faced in multilingual educational settings, 
                where language barriers hinder understanding. We wanted to create a tool that allows 
                students to follow lectures seamlessly, regardless of the language spoken.
                </p>
              </div>
            </div>
          </div>
          <div className={`grid-box ${flipped[1] ? 'flipped' : ''}`} onClick={() => handleFlip(1)}>
          <div className="box-content">
            <div className="box-front">What it does</div>
              <div className="box-back">
                <div className="icon-and-title">
                  <i className="fas fa-crown"></i>
                  <h3>What it does</h3>
                </div>
                <p>
                Translect is a real-time speech-to-speech translator that synchronizes translated audio with 
                the speaker's lip movements. It enables users to comprehend lectures in their preferred language 
                while maintaining a natural and immersive experience.
                </p>
              </div>
            </div>
          </div>
          <div className={`grid-box ${flipped[2] ? 'flipped' : ''}`} onClick={() => handleFlip(2)}>
            <div className="box-content">
              <div className="box-front">Tech Stack</div>
              <div className="box-back tech-stack">
                <div className="tech-icons">
                  <div className="tech-item">
                    <img src={elevenLabsIcon} alt="ElevenLabs API" />
                    <p>ElevenLabs API</p>
                  </div>
                  <div className="tech-item">
                    <img src={azureIcon} alt="Azure Cosmos DB" />
                    <p>Azure Cosmos DB</p>
                  </div>
                  <div className="tech-item">
                    <img src={expressIcon} alt="Express.js" />
                    <p>Express.js (Node)</p>
                  </div>
                  <div className="tech-item">
                    <img src={reactIcon} alt="React.js" />
                    <p>React.js</p>
                  </div>
                  <div className="tech-item">
                    <img src={openaiIcon} alt="Azure OpenAI" />
                    <p>Azure OpenAI (Whisper)</p>
                  </div>
                  <div className="tech-item">
                    <img src={wav2lipIcon} alt="Wav2Lip" />
                    <p>Wav2Lip (Python)</p>
                  </div>
                  <div className="tech-item">
                    <img src={blobIcon} alt="Azure Blob Storage" />
                    <p>Azure Blob Storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`grid-box ${flipped[3] ? 'flipped' : ''}`} onClick={() => handleFlip(3)}>
          <div className="box-content">
            <div className="box-front">Challenges</div>
              <div className="box-back">
                <div className="icon-and-title">
                  <i className="fas fa-bullseye"></i>
                  <h3>Challenges we ran into</h3>
                </div>
                <p>
                One of the primary challenges was ensuring accurate lip synchronization while maintaining the 
                quality of translated speech. Another issue we faced was to find the right set of services that 
                would integrate well together to meet our project's needs efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Circular button for System Architecture */}
        <button className="center-button" onClick={handleOpenPopup}>System Architecture</button>

        {/* Pop-up for the image */}
        {isPopupOpen && (
          <>
            <div className="overlay"></div> {/* Full screen overlay to disable interaction */}
            <div className="image-popup">
              <button className="close-button" onClick={handleClosePopup}>×</button>
              <img src={SD} alt="System Architecture" className="architecture-image" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
