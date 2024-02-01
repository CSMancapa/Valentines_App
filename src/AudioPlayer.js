import React, { useState, useRef } from 'react';
import WhatYouHeard from './WhatYouHeard.mp3'; // Import the audio file

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => setIsPlaying(true));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <audio ref={audioRef} src={WhatYouHeard} onEnded={handleEnded} />
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default AudioPlayer;
