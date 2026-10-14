import React from 'react';
import { weddingData } from '../config/weddingData';
import { FloralDivider } from './Decorations';

export const Program = () => {
  return (
    <section className="relative px-5 py-12 max-w-lg mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-[11px] uppercase tracking-[0.25em] text-walnut-muted font-medium block mb-1">
          Tantana rejasi
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-burgundy font-medium">
          To'y Dasturi
        </h2>
        <p className="text-xs text-walnut-muted mt-1">
          Quvonchli onlarning rejalashtirilgan tartibi
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-gold/30 before:via-gold/70 before:to-gold/30">
        <div className="space-y-6">
          {weddingData.timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Marker Dot */}
              <div className="absolute -left-[19px] top-3 w-4 h-4 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-sm group-hover:scale-125 group-hover:bg-gold transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-burgundy" />
              </div>

              {/* Event Card */}
              <div className="p-4 rounded-2xl bg-white/75 backdrop-blur-sm border border-gold/25 shadow-sm hover:shadow-md hover:border-gold/50 transition-all duration-300">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-sm sm:text-base font-semibold text-burgundy">
                    {item.label}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-blush-100 border border-gold/30 text-xs font-semibold text-burgundy font-mono">
                    {item.time}
                  </span>
                </div>
                {item.desc && (
                  <p className="text-xs text-walnut/80 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <FloralDivider className="w-36 mx-auto mt-10" />
    </section>
  );
};
