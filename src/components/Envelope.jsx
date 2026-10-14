import React, { useState } from 'react';
import { weddingData } from '../config/weddingData';
import { RingsIcon } from './Decorations';

/* ── Realistic Royal Wax Seal SVG ─── */
const RoyalWaxSeal = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-20 h-20 sm:w-22 sm:h-22 ${className}`}
    style={{ filter: 'drop-shadow(0 8px 18px rgba(90, 15, 30, 0.45))' }}
  >
    <defs>
      {/* Wax radial gradient for 3D depth */}
      <radialGradient id="waxGradient" cx="35%" cy="32%" r="65%">
        <stop offset="0%" stopColor="#A82845" />
        <stop offset="50%" stopColor="#7D1830" />
        <stop offset="85%" stopColor="#5B1022" />
        <stop offset="100%" stopColor="#3E0815" />
      </radialGradient>

      {/* Gold gradient for monogram */}
      <linearGradient id="sealGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2D6" />
        <stop offset="30%" stopColor="#E5C788" />
        <stop offset="70%" stopColor="#C9A96E" />
        <stop offset="100%" stopColor="#9E7D42" />
      </linearGradient>

      <linearGradient id="innerBevel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#000" stopOpacity="0.35" />
      </linearGradient>
    </defs>

    {/* Organic melted wax edge path (scalloped royal wax seal) */}
    <path
      d="M50 4 
         C58 4, 63 8, 70 8 
         C77 8, 83 12, 88 18 
         C93 24, 94 31, 96 38 
         C98 45, 96 52, 94 59 
         C92 66, 91 73, 85 79 
         C79 85, 73 89, 66 92 
         C59 95, 52 96, 45 96 
         C38 96, 31 93, 24 90 
         C17 87, 11 81, 7 74 
         C3 67, 4 60, 4 53 
         C4 46, 5 39, 9 32 
         C13 25, 18 20, 25 15 
         C32 10, 42 4, 50 4 Z"
      fill="url(#waxGradient)"
    />

    {/* Inner debossed ring */}
    <circle
      cx="50"
      cy="50"
      r="38"
      fill="none"
      stroke="#5A0F20"
      strokeWidth="2.5"
      opacity="0.6"
    />
    <circle
      cx="50"
      cy="50"
      r="37"
      fill="none"
      stroke="url(#sealGold)"
      strokeWidth="1.2"
      opacity="0.85"
    />

    {/* Fine beaded pearl ring */}
    <circle
      cx="50"
      cy="50"
      r="33"
      fill="none"
      stroke="url(#sealGold)"
      strokeWidth="0.8"
      strokeDasharray="2 3"
      opacity="0.65"
    />

    {/* Tiny royal crown at top */}
    <path
      d="M44 26 L46 29 L50 25 L54 29 L56 26 L55 31 L45 31 Z"
      fill="url(#sealGold)"
      opacity="0.9"
    />
    <circle cx="50" cy="23.5" r="1" fill="url(#sealGold)" />
    <circle cx="44" cy="24.5" r="0.8" fill="url(#sealGold)" />
    <circle cx="56" cy="24.5" r="0.8" fill="url(#sealGold)" />

    {/* Royal Monogram "Sh & U" in elegant calligraphy */}
    <text
      x="50"
      y="54"
      textAnchor="middle"
      fontFamily="'Great Vibes', cursive, 'Playfair Display', serif"
      fontSize="24"
      fontWeight="bold"
      fill="url(#sealGold)"
      style={{
        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.45))',
        letterSpacing: '1px',
      }}
    >
      Sh &amp; U
    </text>

    {/* Delicate floral flourish beneath monogram */}
    <path
      d="M36 65 C43 62, 47 67, 50 64 C53 67, 57 62, 64 65"
      fill="none"
      stroke="url(#sealGold)"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.75"
    />
    <circle cx="50" cy="64" r="1.5" fill="url(#sealGold)" />
  </svg>
);

export const Envelope = ({ onOpen, isOpened }) => {
  const [stage, setStage] = useState('closed'); // 'closed' | 'opening' | 'opened'

  const handleOpenClick = () => {
    if (stage !== 'closed') return;
    setStage('opening');

    setTimeout(() => {
      onOpen();
      setStage('opened');
    }, 1500);
  };

  if (isOpened && stage === 'opened') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-4 transition-all duration-1000 ${
        stage === 'opened' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      } bg-gradient-to-br from-[#2D1A23] via-[#1A0E14] to-[#24131B]`}
    >
      {/* Ambient background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blush-400/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/15 rounded-full blur-[120px]" />
      </div>

      {/* Header Prompt */}
      <div className="relative z-10 text-center mb-5 max-w-xs animate-fade-in">
        <p className="font-serif italic text-gold text-xs sm:text-sm tracking-widest uppercase mb-1">
          {weddingData.bismillah}
        </p>
        <p className="text-[11px] text-ivory/70 tracking-widest uppercase">
          Sizga maxsus taklifnoma yuborildi
        </p>
      </div>

      {/* 3D Envelope Wrapper */}
      <div
        onClick={handleOpenClick}
        className="envelope-3d-scene relative w-full max-w-[360px] sm:max-w-[410px] aspect-[1.42/1] cursor-pointer group select-none"
      >
        <div className="envelope-box relative w-full h-full rounded-2xl animate-gentle-float">
          {/* 1. Envelope Back Plate */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#EFE5DB] to-[#DFD3C6] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-gold/40 z-0 overflow-hidden" />

          {/* 2. Inner Letter Card that slides up */}
          <div
            className={`envelope-card-inner absolute inset-x-4 top-4 bottom-4 rounded-xl bg-white border border-gold/40 p-5 flex flex-col items-center justify-center text-center shadow-md z-10 transition-all ${
              stage === 'opening' ? 'is-sliding' : ''
            }`}
          >
            <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-gold/40" />
            <div className="absolute top-1 right-1 w-4 h-4 border-t border-r border-gold/40" />
            <div className="absolute bottom-1 left-1 w-4 h-4 border-b border-l border-gold/40" />
            <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-gold/40" />

            <div className="mb-1">
              <RingsIcon className="w-8 h-8 text-gold drop-shadow-sm" />
            </div>

            <p className="font-serif text-[10px] text-burgundy tracking-wider uppercase mb-0.5">
              To'y Taklifnomasi
            </p>

            <h2 className="font-script text-3xl sm:text-4xl text-burgundy leading-tight">
              {weddingData.groom} & {weddingData.bride}
            </h2>

            <div className="flex items-center gap-2 mt-1.5">
              <span className="h-px w-6 bg-gold/50" />
              <span className="text-[11px] text-walnut font-medium tracking-wide">
                {weddingData.displayDate}
              </span>
              <span className="h-px w-6 bg-gold/50" />
            </div>

            <p className="font-serif italic text-[11px] text-gold mt-1">
              «{weddingData.venue.name}»
            </p>
          </div>

          {/* 3. Envelope Front Triangular Pockets (smoothly clipped within rounded-2xl) */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden">
            {/* Left fold */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#E6D9CC] to-[#F2EAE1] border-l border-b border-gold/30"
              style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}
            />
            {/* Right fold */}
            <div
              className="absolute inset-0 bg-gradient-to-tl from-[#DECFBF] to-[#EBE0D5] border-r border-b border-gold/30"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }}
            />
            {/* Bottom fold */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#D6C5B3] via-[#E2D4C6] to-transparent border-b border-gold/40 shadow-inner"
              style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }}
            >
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gold/70 text-[10px] uppercase tracking-[0.25em] font-medium whitespace-nowrap">
                <span>✦</span>
                <span>Shohruxbek & Umidaxon</span>
                <span>✦</span>
              </div>
            </div>
          </div>

          {/* 4. Envelope Top Flap (Triangular flap, perfectly rounded corners, no bar artifact) */}
          <div
            className={`envelope-flap-top absolute inset-x-0 top-0 h-1/2 rounded-t-2xl z-30 transition-all ${
              stage === 'opening' ? 'is-open' : ''
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background: 'linear-gradient(180deg, #F3EAE0 0%, #E5DACD 100%)',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.12))',
            }}
          >
            {/* Soft inner gold gradient line */}
            <div
              className="absolute inset-0 border-b border-gold/30"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />
          </div>

          {/* 5. Royal Wax Seal Button in center */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
              stage === 'opening' ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100'
            }`}
          >
            <button
              id="wax-seal-btn"
              type="button"
              className="transform hover:scale-108 active:scale-95 transition-transform duration-300 cursor-pointer focus:outline-none"
              title="Taklifnomani ochish"
            >
              <RoyalWaxSeal />
            </button>
          </div>
        </div>
      </div>

      {/* Action Prompt below envelope */}
      <div className="relative z-10 mt-7 text-center animate-fade-in">
        <button
          onClick={handleOpenClick}
          id="open-envelope-caption-btn"
          className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-gold/40 text-ivory text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md transition-all duration-300 shadow-lg hover:border-gold hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span>Taklifnomani ochish uchun bosing</span>
          <span className="text-gold group-hover:translate-x-1 transition-transform">
            ✉️
          </span>
        </button>
        <p className="text-[11px] text-ivory/50 mt-1.5">
          Muhtaram mehmonimiz uchun maxsus tayyorlandi
        </p>
      </div>
    </div>
  );
};
