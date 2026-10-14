import React from 'react';
import { weddingData } from '../config/weddingData';
import { FloralDivider } from './Decorations';

export const PhotoGallery = () => {
  const photos = [
    {
      src: weddingData.photos.coupleHands,
      title: "Bir umr birga",
      subtitle: "Qalblar bog'langan oqshom",
      aspect: "aspect-[3/4]",
    },
    {
      src: weddingData.photos.coupleBouquet,
      title: "Muhabbat gullari",
      subtitle: "Ezgu va samimiy orzular",
      aspect: "aspect-[3/4]",
    },
    {
      src: weddingData.photos.coupleBw,
      title: "Yurakdan yurakka",
      subtitle: "3-Noyabr, 2026",
      aspect: "aspect-[3/4] sm:col-span-2 sm:aspect-[16/10]",
    },
  ];

  return (
    <section className="relative px-5 py-10 max-w-lg mx-auto text-center">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.25em] text-walnut-muted font-medium block mb-1">
          Muhabbat qissasi
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-burgundy font-medium">
          Baxtli Lahzalar
        </h2>
        <p className="font-script text-2xl text-gold mt-1">
          Shohruxbek & Umidaxon
        </p>
      </div>

      {/* Photo Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {photos.map((item, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl overflow-hidden shadow-lg border border-gold/30 bg-white group ${item.aspect}`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end p-5 text-left">
              <div>
                <p className="font-script text-2xl sm:text-3xl text-ivory drop-shadow-md">
                  {item.title}
                </p>
                <p className="text-xs text-ivory/80 font-light mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FloralDivider className="w-36 mx-auto mt-8" />
    </section>
  );
};
