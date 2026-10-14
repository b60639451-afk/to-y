import React from 'react';
import { weddingData } from '../config/weddingData';
import { FloralDivider } from './Decorations';

export const Countdown = () => {
  // November 2026 calendar days
  // 1 Nov 2026 is Sunday. If week starts on Monday (Du, Se, Ch, Pa, Ju, Sh, Ya):
  // Empty offset: 6 cells.
  const weekDays = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
  const calendarDays = [];
  for (let i = 0; i < 6; i++) calendarDays.push(null);
  for (let d = 1; d <= 30; d++) calendarDays.push(d);

  // Google Calendar URL
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `Shohruxbek & Umidaxon — To'y oqshomi`
  )}&dates=20261103T130000Z/20261103T180000Z&details=${encodeURIComponent(
    `Shohruxbek va Umidaxonning visol to'yi. Manzil: Shedevr Tantanalar Majmuasi (Yangihayot tumani)`
  )}&location=${encodeURIComponent(weddingData.venue.address)}`;

  return (
    <section className="relative px-4 py-10 max-w-lg mx-auto text-center">
      {/* Mini Calendar Card */}
      <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-gold/30 p-6 sm:p-7 shadow-[0_10px_35px_-10px_rgba(201,169,110,0.15)]">
        <span className="text-[11px] uppercase tracking-[0.25em] text-walnut-muted font-medium block mb-1">
          Kutilayotgan qutlug' kun
        </span>
        <h3 className="font-display text-2xl text-burgundy font-medium mb-4">
          Noyabr 2026
        </h3>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-3">
          {weekDays.map((wd, idx) => (
            <div key={idx} className="font-semibold text-walnut-muted py-1">
              {wd}
            </div>
          ))}
          {calendarDays.map((day, idx) => {
            if (!day) {
              return <div key={`empty-${idx}`} className="py-2" />;
            }
            const isWeddingDay = day === 3;
            return (
              <div
                key={`day-${day}`}
                className="relative flex items-center justify-center py-2"
              >
                {isWeddingDay ? (
                  <div className="relative flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center font-bold shadow-md animate-pulse">
                      {day}
                    </div>
                    <div className="absolute -bottom-4 text-[9px] font-bold text-burgundy whitespace-nowrap">
                      To'y kuni
                    </div>
                  </div>
                ) : (
                  <span className="text-walnut/80 font-medium">
                    {day}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Add to Calendar button */}
        <div className="mt-7 pt-4 border-t border-gold/20 flex justify-center">
          <a
            href={gcalUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="add-to-calendar-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory-warm border border-gold/40 text-burgundy text-xs font-medium hover:bg-gold/10 hover:border-gold transition-all duration-300 shadow-sm"
          >
            <span>📅</span>
            <span>Taqvimga saqlash (Google Calendar)</span>
          </a>
        </div>
      </div>

      <FloralDivider className="w-36 mx-auto mt-8" />
    </section>
  );
};
