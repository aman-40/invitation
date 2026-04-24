import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import ReactPlayer from 'react-player';

export default function AudioPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <ReactPlayer 
        url={src} 
        playing={isPlaying} 
        loop={true}
        volume={0.5}
        width="0" 
        height="0" 
        style={{ display: 'none' }}
      />
      <button className="audio-button" onClick={togglePlay} aria-label="Toggle Audio">
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  );
}
