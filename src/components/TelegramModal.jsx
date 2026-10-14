import React, { useState } from 'react';
import { AlertCircle, Check, Copy, ExternalLink, X, Send } from 'lucide-react';
import { weddingData } from '../config/weddingData';

export const TelegramModal = ({ isOpen, onClose, formData }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const formattedResponseText = `💍 TO'Y TAKLIFNOMASIGA JAVOB:\n` +
    `👤 Mehmon: ${formData.guestName || "Ko'rsatilmagan"}\n` +
    `📌 Holati: ${formData.attending === 'yes' ? "✅ Ha, albatta kelaman!" : "❌ Afsuski, kela olmayman"}\n` +
    `👥 Mehmonlar soni: ${formData.guestCount} kishi\n` +
    `💬 Tilak/Izoh: ${formData.wishes || "Yo'q"}\n` +
    `📅 Yuborilgan vaqt: ${new Date().toLocaleString('uz-UZ')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedResponseText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDirectTelegram = () => {
    const encoded = encodeURIComponent(formattedResponseText);
    const hostUser = weddingData.telegram?.hostTelegramUsername;
    if (hostUser) {
      window.open(`https://t.me/${hostUser}?text=${encoded}`, '_blank');
    } else {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encoded}`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl border border-gold/50 bg-gradient-to-b from-espresso/95 via-obsidian/95 to-obsidian p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-cream-warm">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-cream/50 hover:text-gold transition-colors p-1"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Notice Header */}
        <div className="flex items-center gap-3 text-amber-400 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="font-playfair text-lg sm:text-xl font-bold text-cream-warm">
              Telegram-bot hali ulanmagan
            </h3>
            <p className="text-[11px] font-sans text-amber-300/80">
              Telegram bot integratsiyasi sozlanmagan
            </p>
          </div>
        </div>

        {/* Explanation */}
        <div className="space-y-3 text-xs sm:text-sm text-cream/80 font-sans leading-relaxed">
          <p>
            Sayt javobni avtomatik qabul qilishi uchun Telegram-bot sozlanishi kerak. Hozirda <code className="px-1.5 py-0.5 rounded bg-gold/10 text-gold text-xs">src/config/weddingData.js</code> faylida bot tokeni kiritilmagan.
          </p>

          <div className="p-3.5 rounded-xl border border-gold/20 bg-obsidian-card space-y-1.5 text-xs">
            <p className="font-semibold text-gold-light">🛠 Qanday sozlanadi (1 daqiqa):</p>
            <ol className="list-decimal list-inside space-y-1 text-cream/75">
              <li>Telegramda <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer" className="text-gold underline">@BotFather</a> orqali yangi bot yarating va <b>Token</b> oling.</li>
              <li><a href="https://t.me/userinfobot" target="_blank" rel="noopener noreferrer" className="text-gold underline">@userinfobot</a> orqali o‘z <b>Chat ID</b> raqamingizni oling.</li>
              <li>Ularni <code className="text-gold">weddingData.js</code> faylidagi <code className="text-gold">telegram.botToken</code> va <code className="text-gold">chatId</code> qatoriga qo‘ying.</li>
            </ol>
          </div>

          <p className="text-xs text-cream/70">
            Hozircha esa quyidagi tugma orqali to‘y egasiga javobingizni Telegramdan yuborishingiz yoki nusxalab olishingiz mumkin:
          </p>
        </div>

        {/* Buttons: Direct Telegram & Copy */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDirectTelegram}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gold text-obsidian font-sans font-bold text-xs sm:text-sm shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:bg-gold-light transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Telegramda yuborish</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gold/40 bg-obsidian-card text-gold font-sans text-xs sm:text-sm hover:border-gold transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Nusxalandi!" : "Nusxalash"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
