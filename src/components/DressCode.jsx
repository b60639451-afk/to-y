import React from 'react';
import { weddingData } from '../config/weddingData';
import { FloralDivider } from './Decorations';

export const DressCode = () => {
  const { dressCode } = weddingData;
  if (!dressCode) return null;

  return (
    <section className="relative px-5 py-10 max-w-lg mx-auto text-center">
      <div className="rounded-3xl bg-white/75 backdrop-blur-sm border border-gold/30 p-6 sm:p-7 shadow-[0_10px_35px_-10px_rgba(201,169,110,0.15)]">
        {/* Title */}
        <span className="text-[11px] uppercase tracking-[0.25em] text-walnut-muted font-medium block mb-1">
          Kiyinish uslubi
        </span>
        <h2 className="font-display text-2xl text-burgundy font-medium mb-3">
          Dress-code
        </h2>

        <p className="text-xs sm:text-sm text-walnut/80 max-w-sm mx-auto mb-6 leading-relaxed">
          {dressCode.description}
        </p>

        {/* Color Palette Dots */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-4">
          {dressCode.colors.map((color, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-md border-2 transform hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: color.hex, borderColor: color.border }}
                title={color.name}
              />
              <span className="text-[10px] text-walnut-muted max-w-[70px] leading-tight text-center">
                {color.name}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        {dressCode.note && (
          <div className="mt-6 pt-4 border-t border-gold/20 text-[11px] text-walnut-muted italic">
            💡 {dressCode.note}
          </div>
        )}
      </div>

      <FloralDivider className="w-36 mx-auto mt-8" />
    </section>
  );
};
