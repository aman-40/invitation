import React from 'react';
import { useWindowSize } from 'react-use';
import { motion } from 'framer-motion';

export default function ConfettiScreen({ onOpen }) {
  const { width, height } = useWindowSize();

  return (
    <motion.div 
      className="entry-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="entry-content"
      >
        <h1 style={{ fontSize: 'var(--fs-p)', marginBottom: '0.5rem', color: 'var(--color-gold-light)', fontFamily: 'var(--font-classic)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Invitation for
        </h1>
        <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '1rem', color: 'var(--color-gold-light)', fontFamily: 'var(--font-decorative)', lineHeight: '1', fontWeight: 'normal' }}>
          25th Anniversary
        </h2>
        <p style={{ fontSize: 'var(--fs-p)', marginBottom: '3rem', color: 'var(--color-card-cream)', letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
          Silver Jubilee
        </p>
        <button className="open-button" onClick={onOpen}>
          Tap to Unveil ✨
        </button>
      </motion.div>
    </motion.div>
  );
}
