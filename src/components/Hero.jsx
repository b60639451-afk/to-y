import React from 'react';
import { weddingData } from '../config/weddingData';
import { FloralDivider, HeartIcon } from './Decorations';

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-12 pb-16 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-blush-200/40 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. Bismillah */}
      <div className="animate-fade-in relative z-10 mb-4">
        <p className="font-serif italic text-burgundy/80 text-sm sm:text-base tracking-widest">
          {weddingData.bismillah}
        </p>
      </div>

      {/* 2. Badge / Subtitle */}
      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-gold/30 text-burgundy text-xs uppercase tracking-[0.25em] font-medium mb-5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        Nikoh to'yi taklifnomasi
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
      </div>

      {/* 3. Names */}
      <div className="relative z-10 my-2">
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-burgundy leading-none tracking-wide drop-shadow-sm">
          {weddingData.groom}
        </h1>
        <div className="flex items-center justify-center gap-4 my-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="font-display italic text-gold text-2xl sm:text-3xl">&</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
        </div>
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-burgundy leading-none tracking-wide drop-shadow-sm">
          {weddingData.bride}
        </h1>
      </div>

      {/* 4. Couple Photo in Arch Frame */}
      <div className="relative z-10 my-7 w-64 sm:w-72 aspect-[3/4] max-w-[85vw] mx-auto">
        {/* Decorative Golden Outline Ring */}
        <div className="absolute -inset-2.5 rounded-[120px] border border-gold/40 pointer-events-none" />
        <div className="absolute -inset-1 rounded-[115px] border border-blush-300/50 pointer-events-none" />

        {/* Photo Container */}
        <div className="relative w-full h-full rounded-[110px] overflow-hidden shadow-2xl bg-ivory-warm">
          <img
            src={weddingData.photos.coupleMain}
            alt={`${weddingData.groom} va ${weddingData.bride}`}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            loading="eager"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Heart Badge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white shadow-md border border-gold/30 flex items-center gap-1.5 text-xs text-burgundy font-medium whitespace-nowrap">
          <HeartIcon className="w-3.5 h-3.5 text-burgundy animate-heartbeat" />
          <span>3.11.2026</span>
        </div>
      </div>

      {/* 5. Date & Venue Announcement */}
      <div className="relative z-10 mt-3 text-center">
        <p className="font-display text-xl sm:text-2xl text-walnut font-medium tracking-wide">
          {weddingData.displayDate}
        </p>
        <p className="text-xs sm:text-sm text-walnut-muted tracking-widest uppercase mt-1">
          {weddingData.displayDay} • Soat {weddingData.displayTime}
        </p>
        <p className="font-display italic text-burgundy text-base mt-2">
          «{weddingData.venue.name}» {weddingData.venue.subtitle}
        </p>
      </div>

      <FloralDivider className="w-48 mx-auto mt-6" />

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center gap-1 mt-2 text-walnut-muted/70 text-xs">
        <span>Pastga suring</span>
        <span className="animate-bounce text-gold text-base">↓</span>
      </div>
    </section>
  );
};
