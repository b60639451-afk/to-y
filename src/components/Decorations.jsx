import React from 'react';

/* ── Thin floral ornament line (horizontal) ─── */
export const FloralDivider = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-2 my-6 ${className}`}>
    <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold/50" />
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gold opacity-80">
      <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M14 4 C16 8 18 10 14 14 C10 10 12 8 14 4Z" fill="currentColor" opacity=".5" />
      <path d="M14 24 C16 20 18 18 14 14 C10 18 12 20 14 24Z" fill="currentColor" opacity=".5" />
      <path d="M4 14 C8 12 10 10 14 14 C10 18 8 16 4 14Z" fill="currentColor" opacity=".5" />
      <path d="M24 14 C20 12 18 10 14 14 C18 18 20 16 24 14Z" fill="currentColor" opacity=".5" />
    </svg>
    <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold/50" />
  </div>
);

/* ── Wedding rings illustration ─── */
export const RingsIcon = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="22" cy="32" r="12" stroke="#C9A96E" strokeWidth="2" fill="none" />
    <circle cx="42" cy="32" r="12" stroke="#C9A96E" strokeWidth="2" fill="none" />
    <circle cx="22" cy="32" r="9" stroke="#E2D0A8" strokeWidth="1" fill="none" strokeDasharray="2 3" />
    <circle cx="42" cy="32" r="9" stroke="#E2D0A8" strokeWidth="1" fill="none" strokeDasharray="2 3" />
    <path d="M20 21 L22 17 L24 21" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </svg>
);

/* ── Heart icon ─── */
export const HeartIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

/* ── Floral corner decoration (top-left, rotate for other corners) ─── */
export const FloralCorner = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" fill="none" className={`w-20 h-20 ${className}`}>
    <path d="M10 110 C10 60 20 30 50 15 C35 35 25 65 20 110" stroke="#D4919A" strokeWidth="1" fill="none" opacity=".4" />
    <path d="M5 100 C15 55 30 25 65 10 C45 30 30 60 25 100" stroke="#C9A96E" strokeWidth="1" fill="none" opacity=".3" />
    <circle cx="50" cy="15" r="4" fill="#E8A5AE" opacity=".35" />
    <circle cx="30" cy="35" r="3" fill="#C9A96E" opacity=".25" />
    <circle cx="15" cy="60" r="2.5" fill="#E8A5AE" opacity=".3" />
    <path d="M48 12 C52 8 56 12 52 16 C48 20 44 16 48 12Z" fill="#D4919A" opacity=".25" />
    <path d="M28 32 C31 29 34 32 31 35 C28 38 25 35 28 32Z" fill="#E8A5AE" opacity=".2" />
  </svg>
);

/* ── Ornamental Uzbek border pattern (thin) ─── */
export const UzbekBorder = ({ className = '' }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <svg width="200" height="12" viewBox="0 0 200 12" fill="none" className="opacity-40">
      {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180].map(x => (
        <g key={x}>
          <diamond x={x+5} y="1" width="10" height="10" />
          <rect x={x+3} y={3} width="4" height="4" rx="1" transform={`rotate(45 ${x+5} 5)`} stroke="#C9A96E" strokeWidth=".8" fill="none" />
          <line x1={x+10} y1="6" x2={x+20} y2="6" stroke="#C9A96E" strokeWidth=".5" />
        </g>
      ))}
    </svg>
  </div>
);

/* ── Envelope icon for cover ─── */
export const EnvelopeIcon = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 5l10 8 10-8" />
  </svg>
);
