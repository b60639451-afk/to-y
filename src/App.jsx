import React, { useState, useEffect } from 'react';
import { Envelope } from './components/Envelope';
import { AudioPlayer } from './components/AudioPlayer';
import { Hero } from './components/Hero';
import { InvitationLetter } from './components/InvitationLetter';
import { Countdown } from './components/Countdown';
import { Program } from './components/Program';
import { PhotoGallery } from './components/PhotoGallery';
import { Venue } from './components/Venue';
import { Footer } from './components/Footer';

export const App = () => {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [audioTrigger, setAudioTrigger] = useState(false);

  // Prevent background scrolling while envelope is closed
  useEffect(() => {
    if (!isEnvelopeOpened) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isEnvelopeOpened]);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpened(true);
    setAudioTrigger(true);
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF5F0] text-walnut font-body selection:bg-blush-200 selection:text-burgundy relative overflow-x-hidden">
      {/* 1. Interactive Luxury Envelope (Only thing visible until tapped) */}
      <Envelope isOpened={isEnvelopeOpened} onOpen={handleOpenEnvelope} />

      {/* 2. Floating Romantic Audio Player (Appears with invitation) */}
      {isEnvelopeOpened && <AudioPlayer autoPlayTrigger={audioTrigger} />}

      {/* 3. Ambient Background Light Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blush-200/50 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gold/15 rounded-full blur-[110px]" />
        <div className="absolute top-2/3 -left-20 w-80 h-80 bg-blush-300/30 rounded-full blur-[120px]" />
      </div>

      {/* 4. Digital Card Frame (Revealed when envelope opens) */}
      <div
        className={`relative z-10 max-w-md sm:max-w-lg mx-auto min-h-screen bg-ivory/80 backdrop-blur-[2px] shadow-[0_0_60px_rgba(201,169,110,0.15)] border-x border-gold/25 transition-all duration-1000 ${
          isEnvelopeOpened
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-12 scale-95 pointer-events-none h-screen overflow-hidden'
        }`}
      >
        <main>
          {/* Cover Screen */}
          <Hero />

          {/* Invitation Letter & Blessings */}
          <InvitationLetter />

          {/* Calendar & Countdown */}
          <Countdown />

          {/* Wedding Day Timeline */}
          <Program />

          {/* Photo Gallery / Love Story */}
          <PhotoGallery />

          {/* Venue & Location */}
          <Venue />

          {/* Footer & Share */}
          <Footer onReopenEnvelope={handleReopenEnvelope} />
        </main>
      </div>
    </div>
  );
};

export default App;
