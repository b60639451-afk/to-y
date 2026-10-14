import React from 'react';
import { weddingData } from '../config/weddingData';
import { RingsIcon, FloralDivider } from './Decorations';

export const InvitationLetter = () => {
  return (
    <section className="relative px-5 py-12 text-center max-w-xl mx-auto">
      {/* Decorative Card Container */}
      <div className="relative rounded-3xl bg-white/70 backdrop-blur-sm border border-gold/30 p-7 sm:p-9 shadow-[0_10px_35px_-10px_rgba(201,169,110,0.15)] overflow-hidden">
        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-gold/40 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-gold/40 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-gold/40 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-gold/40 rounded-br-sm pointer-events-none" />

        {/* Rings Icon */}
        <div className="flex justify-center mb-4">
          <RingsIcon className="w-14 h-14 text-gold drop-shadow-sm" />
        </div>

        {/* Section Header */}
        <h2 className="font-display text-2xl sm:text-3xl text-burgundy font-medium mb-3">
          {weddingData.invitationTitle}
        </h2>

        <p className="font-script text-2xl sm:text-3xl text-gold mb-5">
          Aziz va qadrli mehmonimiz!
        </p>

        {/* Sacred Quote */}
        <div className="my-5 px-4 py-3 rounded-2xl bg-blush-50/70 border-l-2 border-r-2 border-gold/50 text-xs sm:text-sm text-walnut italic leading-relaxed">
          {weddingData.quote}
          <div className="text-[11px] font-sans font-medium text-walnut-muted not-italic mt-1.5">
            — {weddingData.quoteSource}
          </div>
        </div>

        {/* Main invitation body */}
        <p className="text-walnut/90 text-sm sm:text-base leading-relaxed my-5 font-light">
          {weddingData.invitationText}
        </p>

        <FloralDivider className="w-36 mx-auto my-6" />

        {/* Parents section (Groom's parents only) */}
        {weddingData.groomParents && (
          <div className="max-w-sm mx-auto mt-6 text-center">
            <div className="p-4 rounded-2xl bg-ivory-warm/80 border border-gold/30 shadow-sm">
              <span className="text-[11px] tracking-widest uppercase text-walnut-muted block mb-1">
                To'y egalari (Ota-onasi)
              </span>
              <p className="font-display text-base sm:text-lg text-burgundy font-semibold">
                {weddingData.groomParents}
              </p>
            </div>
          </div>
        )}

        {/* Signature */}
        <p className="font-script text-2xl sm:text-3xl text-burgundy mt-7">
          {weddingData.invitationSignature}
        </p>
      </div>
    </section>
  );
};
