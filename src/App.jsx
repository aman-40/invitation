import React, { useState } from 'react';
import ConfettiScreen from './components/ConfettiScreen';
import InvitationCard from './components/InvitationCard';
import AudioPlayer from './components/AudioPlayer';
import { AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <>
      <div className="background" />

      {/* Continuous Confetti falling behind the card */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
        <Confetti 
          width={width} 
          height={height} 
          numberOfPieces={150} 
          colors={['#DFB86C', '#A67C00', '#FAF3E0', '#2C6B6F', '#1A4D51']} 
          recycle={true} 
        />
      </div>

      <div className="app-container">

        <AnimatePresence>
          {!isOpen && <ConfettiScreen onOpen={() => setIsOpen(true)} />}
        </AnimatePresence>

        {isOpen && (
          <>
            <InvitationCard />
            <AudioPlayer src="https://www.youtube.com/watch?v=4wASrKoZZVY" />
          </>
        )}
      </div>
    </>
  );
}

export default App;
