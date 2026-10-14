import React, { useState } from 'react';
import { weddingData } from '../config/weddingData';
import { HeartIcon, FloralDivider } from './Decorations';

export const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes', // 'yes' | 'no'
    guestCount: '1',
    wishes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setLoading(true);

    // If telegram bot credentials are provided, attempt fetch
    if (weddingData.telegram.botToken && weddingData.telegram.chatId) {
      const text = `🎉 Yangi RSVP javobi:\n\n👤 Mehmon: ${formData.name}\n✅ Holat: ${
        formData.attendance === 'yes' ? 'Boradi' : 'Borolmaydi'
      }\n👥 Mehmonlar soni: ${formData.guestCount}\n💌 Tilak: ${formData.wishes || '—'}`;

      fetch(`https://api.telegram.org/bot${weddingData.telegram.botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: weddingData.telegram.chatId,
          text,
        }),
      }).catch((err) => console.log('Telegram send error:', err));
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  // Telegram direct message URL for wishes
  const telegramDirectUrl = `https://t.me/${weddingData.telegram.fallbackUsername}?text=${encodeURIComponent(
    `Assalomu alaykum! Men ${formData.name || 'mehmoningiz'}. ${
      formData.attendance === 'yes'
        ? `To'yingizga albatta boraman (${formData.guestCount} kishi).`
        : `Afsuski, kela olmayman.`
    } ${formData.wishes ? `Tilagim: ${formData.wishes}` : ''}`
  )}`;

  return (
    <section id="rsvp" className="relative px-5 py-12 max-w-lg mx-auto text-center">
      <div className="rounded-3xl bg-white/85 backdrop-blur-sm border border-gold/30 p-6 sm:p-8 shadow-[0_15px_40px_-10px_rgba(201,169,110,0.18)]">
        {/* Header */}
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-walnut-muted font-medium block mb-1">
            Ishtirokni tasdiqlash
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-burgundy font-medium">
            RSVP
          </h2>
          <p className="text-xs text-walnut-muted mt-1 max-w-xs mx-auto">
            Iltimos, tantanada ishtirok etishingizni oldindan ma'lum qiling
          </p>
        </div>

        {submitted ? (
          <div className="py-8 px-4 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-blush-100 border border-gold/40 flex items-center justify-center mx-auto mb-4 text-burgundy shadow-inner">
              <HeartIcon className="w-8 h-8 text-burgundy animate-heartbeat" />
            </div>

            <h3 className="font-display text-2xl text-burgundy font-semibold mb-2">
              Tashakkur!
            </h3>
            <p className="text-xs sm:text-sm text-walnut leading-relaxed max-w-xs mx-auto mb-6">
              {formData.attendance === 'yes'
                ? `Rahmat, ${formData.name}! Sizning ishtirokingiz qabul qilindi. Sizni to'yimizda ko'rishdan behad baxtiyormiz!`
                : `Rahmat, ${formData.name}! Samimiy tilaklaringiz uchun minnatdormiz.`}
            </p>

            <div className="space-y-3">
              <a
                href={telegramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-[#2AABEE] to-[#229ED9] text-white text-xs font-medium shadow-md hover:opacity-95 transition-all"
              >
                <span>✈️ Telegram orqali ham yuborish</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-walnut-muted underline hover:text-burgundy pt-2"
              >
                Javobni o'zgartirish
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            {/* Guest Name */}
            <div>
              <label className="block text-xs font-medium text-walnut mb-1.5">
                Ismingiz va familiyangiz <span className="text-burgundy">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Masalan: Sardor Aliyev"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-ivory-warm/70 border border-gold/30 text-xs sm:text-sm text-walnut placeholder:text-walnut-muted/60 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
              />
            </div>

            {/* Attendance Radios */}
            <div>
              <label className="block text-xs font-medium text-walnut mb-2">
                Tantanaga tashrif buyurasizmi?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'yes' })}
                  className={`py-3 px-3 rounded-2xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                    formData.attendance === 'yes'
                      ? 'bg-burgundy text-white border-burgundy shadow-md'
                      : 'bg-ivory-warm/70 text-walnut border-gold/30 hover:border-gold'
                  }`}
                >
                  <span>💐</span>
                  <span>Albatta boraman</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'no' })}
                  className={`py-3 px-3 rounded-2xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                    formData.attendance === 'no'
                      ? 'bg-burgundy text-white border-burgundy shadow-md'
                      : 'bg-ivory-warm/70 text-walnut border-gold/30 hover:border-gold'
                  }`}
                >
                  <span>💌</span>
                  <span>Borolmayman</span>
                </button>
              </div>
            </div>

            {/* Number of guests (only if attendance === 'yes') */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="block text-xs font-medium text-walnut mb-1.5">
                  Necha kishi tashrif buyurasiz?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: '1', label: '1 kishi' },
                    { val: '2', label: '2 kishi' },
                    { val: 'oila', label: 'Oila bilan' },
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setFormData({ ...formData, guestCount: item.val })}
                      className={`py-2 px-2 rounded-xl border text-xs font-medium text-center transition-all ${
                        formData.guestCount === item.val
                          ? 'bg-gold/20 border-gold text-burgundy font-semibold'
                          : 'bg-ivory-warm/60 border-gold/20 text-walnut-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Wishes */}
            <div>
              <label className="block text-xs font-medium text-walnut mb-1.5">
                Kelin-kuyovga samimiy tilaklaringiz
              </label>
              <textarea
                rows={3}
                placeholder="Baxtli bo'linglar! Qo'shsha qaringlar..."
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-ivory-warm/70 border border-gold/30 text-xs sm:text-sm text-walnut placeholder:text-walnut-muted/60 focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              id="submit-rsvp-btn"
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy text-white font-medium text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "Yuborilmoqda..." : "Tasdiqlash va yuborish ✨"}
            </button>
          </form>
        )}
      </div>

      <FloralDivider className="w-36 mx-auto mt-8" />
    </section>
  );
};
