import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingData } from '../config/weddingData';

export const AudioPlayer = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const startTime = weddingData.audio?.startTime || 20;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Pleasant, soft background volume (35%)
    audio.volume = weddingData.audio?.volume || 0.35;

    // Set starting position to 20 seconds when metadata is ready
    const handleLoadedMetadata = () => {
      try {
        audio.currentTime = startTime;
      } catch (e) {}
    };

    // If loop ends, loop back to the 20-second mark
    const handleEnded = () => {
      try {
        audio.currentTime = startTime;
        audio.play();
      } catch (e) {}
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [startTime]);

  // When user opens envelope, trigger playback gently from 0:20
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      const audio = audioRef.current;
      audio.volume = weddingData.audio?.volume || 0.35;
      try {
        if (audio.currentTime < startTime) {
          audio.currentTime = startTime;
        }
      } catch (e) {}

      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay may wait for direct interaction
      });
    }
  }, [autoPlayTrigger, startTime]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = weddingData.audio?.volume || 0.35;
      try {
        if (audio.currentTime < 1) {
          audio.currentTime = startTime;
        }
      } catch (e) {}

      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Audio play error:', err);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingData.audio.src}
        preload="auto"
      />

      {/* Floating Music Button in Top Right */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={togglePlay}
          id="music-toggle-btn"
          aria-label={isPlaying ? "Musiqani to'xtatish" : "Musiqani yoqish"}
          title={weddingData.audio?.title}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-md ${
            isPlaying
              ? 'bg-white/95 border-gold text-burgundy shadow-[0_4px_15px_rgba(201,169,110,0.35)] scale-105'
              : 'bg-white/75 border-gold/40 text-walnut-muted hover:border-gold hover:text-burgundy'
          }`}
        >
          {/* Rotating vinyl icon */}
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
              isPlaying ? 'animate-spin-slow text-burgundy' : 'text-walnut-muted'
            }`}
          >
            {isPlaying ? <Music className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </div>

          <span className="text-[11px] font-medium font-sans max-w-[120px] truncate">
            {isPlaying ? "Maher Zain" : "Musiqa"}
          </span>

          {/* Equalizer waves */}
          {isPlaying && (
            <div className="flex items-end gap-[2px] h-3 ml-0.5">
              <span className="w-[2px] bg-gold rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2"></span>
              <span className="w-[2px] bg-burgundy rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-3"></span>
              <span className="w-[2px] bg-gold rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-2.5"></span>
            </div>
          )}
        </button>
      </div>
    </>
  );
};
