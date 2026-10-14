import React from 'react';
import { weddingData } from '../config/weddingData';
import { HeartIcon } from './Decorations';

export const Footer = () => {
  return (
    <footer className="relative pt-6 pb-14 px-5 text-center max-w-lg mx-auto">
      {/* Monogram emblem */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-serif font-bold text-base shadow-md mx-auto mb-4 border border-white/50">
        {weddingData.monogram}
      </div>

      <h2 className="font-script text-3xl sm:text-4xl text-burgundy tracking-wide">
        {weddingData.groom} & {weddingData.bride}
      </h2>

      <p className="text-xs text-walnut-muted tracking-widest uppercase mt-1 mb-4">
        {weddingData.displayDate} • «Shedevr»
      </p>

      <p className="text-xs sm:text-sm text-walnut/80 italic max-w-xs mx-auto mb-6">
        «Tashrifingiz bizning baxtimizni yanada cheksiz qiladi!»
      </p>

      <div className="text-[11px] text-walnut-muted/60 flex items-center justify-center gap-1 pt-2">
        <span>Muhabbat bilan tayyorlandi</span>
        <HeartIcon className="w-3 h-3 text-burgundy/60" />
      </div>
    </footer>
  );
};
