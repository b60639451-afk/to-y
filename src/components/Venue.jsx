import React, { useState } from 'react';
import { weddingData } from '../config/weddingData';
import { FloralDivider } from './Decorations';

/* ── Official Brand Map Icons ─── */
const GoogleMapsLogo = () => (
  <svg viewBox="0 0 48 48" className="w-5 h-5 shrink-0" fill="none">
    <path
      d="M24 4C15.16 4 8 11.16 8 20c0 10.96 14.24 22.84 15.15 23.6a1.27 1.27 0 001.7 0C25.76 42.84 40 30.96 40 20c0-8.84-7.16-16-16-16z"
      fill="#EA4335"
    />
    <path
      d="M24 12a8 8 0 100 16 8 8 0 000-16z"
      fill="#4285F4"
    />
    <path
      d="M24 16a4 4 0 100 8 4 4 0 000-8z"
      fill="#FBBC04"
    />
    <path
      d="M24 18a2 2 0 100 4 2 2 0 000-4z"
      fill="#34A853"
    />
  </svg>
);

const YandexMapsLogo = () => (
  <svg viewBox="0 0 48 48" className="w-5 h-5 shrink-0" fill="none">
    <circle cx="24" cy="24" r="20" fill="#FC3F1D" />
    <path
      d="M27.5 35h-3.8V17.8L18.8 35h-3.6l5.7-18.7H17V13h8.2v18.2l4.8-16.2h3.8L27.5 35z"
      fill="#FFFFFF"
    />
  </svg>
);

const Gis2Logo = () => (
  <svg viewBox="0 0 48 48" className="w-5 h-5 shrink-0" fill="none">
    <circle cx="24" cy="24" r="20" fill="#24B351" />
    <path
      d="M17 19a7 7 0 1114 0c0 4.5-7 14-7 14s-7-9.5-7-14zm7 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
      fill="#FFFFFF"
    />
  </svg>
);

export const Venue = () => {
  const [copied, setCopied] = useState(false);
  const { venue } = weddingData;

  const copyAddress = () => {
    navigator.clipboard?.writeText(venue.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="relative px-5 py-12 max-w-lg mx-auto text-center">
      {/* Header */}
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.25em] text-walnut-muted font-medium block mb-1">
          To'yxona manzili
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-burgundy font-medium">
          Manzilimiz
        </h2>
        <p className="text-xs text-walnut-muted mt-1">
          Sizni qutlug' tantanamizda intizorlik bilan kutamiz
        </p>
      </div>

      {/* Venue Card */}
      <div className="rounded-3xl bg-white/85 backdrop-blur-sm border border-gold/30 overflow-hidden shadow-[0_15px_40px_-10px_rgba(201,169,110,0.2)]">
        {/* Venue Photo */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <img
            src={weddingData.photos.venue}
            alt={venue.name}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gold/40 text-[11px] font-semibold text-burgundy shadow-sm">
            ✨ {venue.district || "Yangihayot tumani"}
          </div>
        </div>

        {/* Venue Info */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-burgundy font-semibold">
              «{venue.name}»
            </h3>
            <p className="text-xs text-walnut-muted tracking-widest uppercase mt-0.5">
              {venue.subtitle} • {venue.district}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-ivory-warm/80 border border-gold/25 flex flex-col items-center gap-2 text-xs text-walnut">
            <span className="text-xl">📍</span>
            <p className="font-semibold text-sm max-w-xs text-burgundy">{venue.address}</p>
            {venue.landmark && (
              <p className="text-[11px] text-walnut-muted italic bg-white/70 px-3.5 py-1 rounded-full border border-gold/20">
                🚇 {venue.landmark}
              </p>
            )}
            <button
              onClick={copyAddress}
              id="copy-address-btn"
              className="text-[11px] text-burgundy underline hover:text-burgundy-light mt-1 font-medium cursor-pointer"
            >
              {copied ? '✅ Manzil nusxalandi!' : '📋 Manzilni nusxalash'}
            </button>
          </div>

          {/* Embedded Interactive Map Preview */}
          <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-gold/30 shadow-inner my-3">
            <iframe
              title="Shedevr Yangihayot Xaritasi"
              src="https://yandex.uz/map-widget/v1/?text=Toshkent+Yangihayot+Do%27stlik+3&z=16"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              className="w-full h-full"
            />
            {/* Quick click-through overlay to open exact link */}
            <div className="absolute bottom-2 right-2">
              <a
                href={venue.yandexMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gold/40 text-[11px] font-semibold text-burgundy shadow-md hover:bg-gold/10 transition-all"
              >
                <span>Yandex'da ochish ↗</span>
              </a>
            </div>
          </div>

          {/* Map Link Buttons with Official Brand Logos */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            {/* Google Maps Button */}
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="google-maps-btn"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-gold/40 text-walnut text-xs font-semibold shadow-sm hover:shadow-md hover:bg-blush-50/70 hover:border-gold transition-all duration-300"
            >
              <GoogleMapsLogo />
              <span className="text-walnut font-medium">Google Maps</span>
            </a>

            {/* Yandex Maps Button (direct user link) */}
            <a
              href={venue.yandexMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="yandex-maps-btn"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-gold/40 text-walnut text-xs font-semibold shadow-sm hover:shadow-md hover:bg-blush-50/70 hover:border-gold transition-all duration-300"
            >
              <YandexMapsLogo />
              <span className="text-walnut font-medium">Yandex Xarita</span>
            </a>

            {/* 2GIS Button */}
            <a
              href={venue.gis2Url}
              target="_blank"
              rel="noopener noreferrer"
              id="gis2-btn"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-gold/40 text-walnut text-xs font-semibold shadow-sm hover:shadow-md hover:bg-blush-50/70 hover:border-gold transition-all duration-300"
            >
              <Gis2Logo />
              <span className="text-walnut font-medium">2GIS</span>
            </a>
          </div>
        </div>
      </div>

      <FloralDivider className="w-36 mx-auto mt-8" />
    </section>
  );
};
