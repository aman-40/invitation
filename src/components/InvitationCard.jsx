import React from 'react';
import { motion } from 'framer-motion';
import weddingElephant from '../assets/wedding_elephant.png';
import indianCouple from '../assets/indian_couple.png';

export default function InvitationCard() {
  return (
    <motion.div 
      className="invitation-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Decorative Elephants */}
      <img src={weddingElephant} alt="Decorative Elephant" className="elephant-left" />
      <img src={weddingElephant} alt="Decorative Elephant" className="elephant-right" />

      {/* Couple Caricature */}
      <img src={indianCouple} alt="Indian Couple Caricature" className="couple-caricature" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ zIndex: 10, paddingBottom: '4rem' }}
      >
        <p style={{ 
          fontSize: '1rem', 
          letterSpacing: '2px', 
          textTransform: 'uppercase', 
          color: 'var(--color-text-teal)',
          fontFamily: 'var(--font-classic)',
          marginBottom: '0.5rem'
        }}>
          Join us to celebrate
        </p>

        <h1 style={{ 
          fontSize: '4.5rem', 
          color: 'var(--color-gold-dark)', 
          margin: '0',
          lineHeight: '1',
          fontFamily: 'var(--font-decorative)',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Save
        </h1>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: 'var(--color-text-teal)', 
          margin: '-10px 0 0',
          lineHeight: '1',
          fontFamily: 'var(--font-decorative)'
        }}>
          the
        </h1>
        <h1 style={{ 
          fontSize: '4.5rem', 
          color: 'var(--color-gold-dark)', 
          margin: '-5px 0 1.5rem',
          lineHeight: '1',
          fontFamily: 'var(--font-decorative)',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Date
        </h1>

        <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-gold-light)', margin: '0 auto 1.5rem' }}></div>

        <h3 style={{ 
          fontSize: '2rem', 
          color: 'var(--color-text-teal)', 
          marginBottom: '1rem',
          fontFamily: 'var(--font-classic)'
        }}>
          Sunil & Rinku
        </h3>
        
        <p style={{
          fontSize: '0.9rem',
          lineHeight: '1.6',
          color: '#555',
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          marginBottom: '2rem',
          padding: '0 15px',
          fontWeight: 600
        }}>
          "A journey of love, trust, and togetherness has completed 25 glorious years. Your presence will add joy to our happiness and turn this beautiful occasion into a memory we will cherish forever."
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div>
            <p style={{ 
              fontSize: '1.4rem', 
              fontWeight: 700, 
              color: 'var(--color-text-teal)',
              fontFamily: 'var(--font-classic)'
            }}>
              06 MAY 2026
            </p>
            <p style={{ 
              fontSize: '0.9rem', 
              color: 'var(--color-gold-dark)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 600
            }}>
              at 6 PM
            </p>
          </div>

          <div>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--color-text-teal)',
              fontFamily: 'var(--font-classic)',
              fontWeight: 600
            }}>
              Makhdumpur
            </p>
            <p style={{ 
              fontSize: '0.8rem', 
              color: 'var(--color-gold-dark)',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Venue
            </p>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
