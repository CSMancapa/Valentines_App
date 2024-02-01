import React, { useState } from 'react';
import './ValentinePage.css'; // Import CSS for styling
import AudioPlayer from './AudioPlayer'; // Import the AudioPlayer component
import ElGato from './el gato.jpeg'; // Import the original cat image
import ElGatoHappy from './el_gato_happy.jpeg'; // Import the happy cat image for "Yes" response
import ElGatoAngry from './el_gato_angry.jpeg';

const ValentinePage = () => {
  const [response, setResponse] = useState(null);
  const [catImage, setCatImage] = useState(ElGato); // Set initial image to original cat image
  const [message, setMessage] = useState("");

  const handleYesClick = () => {
    setResponse('Yes');
    setCatImage(ElGatoHappy); // Change the image to the happy cat image for "Yes" response
    setMessage("Yay! Can't wait for our date baby!");
  };

  const handleNoClick = () => {
    setResponse('No');
    setCatImage(ElGatoAngry);
    setMessage("Don't play stupid games...");
  };

  return (
    <div className="valentine-page">
      <div className="background">
        {/* Night sky background with hearts */}
      </div>
      <div className="content">
        <AudioPlayer /> {/* Render the AudioPlayer component */}
        <img src={catImage} alt="Cat" className="cat-image" /> {/* Render the cat image */}
        <div className="text">
          <p>Humi, will you be my valentine?</p> {/* Display text */}
        </div>
        <div className="buttons">
          <button className="yes-button" onClick={handleYesClick}>Yes</button> {/* Yes button with click handler */}
          <button className="no-button" onClick={handleNoClick}>No</button> {/* No button with click handler */}
        </div>
        {response && <p>You clicked "{response}"</p>} {/* Display response if available */}
      </div>
    </div>
  );
};

export default ValentinePage;
