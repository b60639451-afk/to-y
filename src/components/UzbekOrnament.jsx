import React from 'react';

// Bismillahir Rohmanir Rohiym Calligraphic Art in Gold
export const Bismillah = ({ className = "w-64 h-auto text-gold" }) => (
  <div className={`flex justify-center items-center my-3 ${className}`}>
    <svg viewBox="0 0 500 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
      <defs>
        <linearGradient id="goldGradientCalligraphy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9E8B8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A67B18" />
        </linearGradient>
      </defs>
      {/* Traditional Arabic Calligraphy of Bismillah */}
      <path
        d="M250 18 C256 18 261 22 263 28 C267 21 274 18 282 18 C294 18 303 26 305 39 C314 26 329 18 344 18 C366 18 382 34 382 58 C382 82 363 100 338 100 C316 100 300 87 294 68 C290 84 278 96 261 98 C258 98 255 98 250 98 C245 98 242 98 239 98 C222 96 210 84 206 68 C200 87 184 100 162 100 C137 100 118 82 118 58 C118 34 134 18 156 18 C171 18 186 26 195 39 C197 26 206 18 218 18 C226 18 233 21 237 28 C239 22 244 18 250 18 Z"
        fill="url(#goldGradientCalligraphy)"
        opacity="0.1"
      />
      <text
        x="250"
        y="70"
        textAnchor="middle"
        fontFamily="'Amiri', 'Traditional Arabic', 'Scheherazade New', 'Cinzel', serif"
        fontSize="38"
        fontWeight="bold"
        fill="url(#goldGradientCalligraphy)"
        letterSpacing="2"
      >
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </text>
    </svg>
  </div>
);

// Deluxe Uzbek Royal Arch Frame (Registan / Gur-e-Amir inspired arch)
export const UzbekArchFrame = ({ children, className = "" }) => (
  <div className={`relative p-5 sm:p-8 rounded-t-[50px] border border-gold/30 bg-gradient-to-b from-espresso/60 via-obsidian/90 to-obsidian backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.6)] ${className}`}>
    {/* Top decorative arch crown */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
      <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
        <path d="M0 30 C30 30 45 10 60 2 C75 10 90 30 120 30" stroke="url(#goldGradBorder)" strokeWidth="1.5" fill="none"/>
        <circle cx="60" cy="5" r="3" fill="#D4AF37" className="animate-pulse-subtle" />
        <circle cx="40" cy="18" r="1.5" fill="#D4AF37" />
        <circle cx="80" cy="18" r="1.5" fill="#D4AF37" />
        <defs>
          <linearGradient id="goldGradBorder" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0"/>
            <stop offset="50%" stopColor="#F8E9C0"/>
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* Ornamental 4 corners */}
    <div className="absolute top-2 left-2 text-gold/40">
      <UzbekCornerPattern />
    </div>
    <div className="absolute top-2 right-2 rotate-90 text-gold/40">
      <UzbekCornerPattern />
    </div>
    <div className="absolute bottom-2 left-2 -rotate-90 text-gold/40">
      <UzbekCornerPattern />
    </div>
    <div className="absolute bottom-2 right-2 rotate-180 text-gold/40">
      <UzbekCornerPattern />
    </div>

    {/* Content */}
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

// Traditional Girih / Islimi Corner Ornament
export const UzbekCornerPattern = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 38V14C2 7.37258 7.37258 2 14 2H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 38V17C7 11.4772 11.4772 7 17 7H38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    <circle cx="14" cy="14" r="3" fill="currentColor" />
    <path d="M14 24C19.5228 24 24 19.5228 24 14" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Deluxe Gold Ornamental Section Divider
export const UzbekDivider = ({ className = "my-6", title = "" }) => (
  <div className={`flex items-center justify-center gap-3 w-full max-w-sm mx-auto ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/50 to-gold"></div>
    <div className="flex items-center gap-1.5 px-2 text-gold">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-45">
        <rect x="5" y="5" width="14" height="14" stroke="#D4AF37" strokeWidth="1.2" fill="rgba(212,175,55,0.1)"/>
        <rect x="8" y="8" width="8" height="8" fill="#F8E9C0" />
      </svg>
      {title && (
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-light font-semibold">
          {title}
        </span>
      )}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-45">
        <rect x="5" y="5" width="14" height="14" stroke="#D4AF37" strokeWidth="1.2" fill="rgba(212,175,55,0.1)"/>
        <rect x="8" y="8" width="8" height="8" fill="#F8E9C0" />
      </svg>
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold/50 to-gold"></div>
  </div>
);

// Traditional Uzbek 8-Point Star Medallion (Sitorai Mohi Xosa / Registan star)
export const UzbekStar = ({ className = "w-6 h-6 text-gold" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <polygon points="12,0 15,9 24,12 15,15 12,24 9,15 0,12 9,9" />
    <polygon points="12,3 14,10 21,12 14,14 12,21 10,14 3,12 10,10" fill="#FFF3D1" opacity="0.6"/>
    <circle cx="12" cy="12" r="2.5" fill="#251E18" />
  </svg>
);
