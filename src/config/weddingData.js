/**
 * ═══════════════════════════════════════════════════════════════
 *  TO'Y TAKLIFNOMASI — BARCHA MA'LUMOTLAR
 *  Shohruxbek & Umidaxon — 3-Noyabr 2026 — «Shedevr» (Yangihayot)
 * ═══════════════════════════════════════════════════════════════
 */

export const weddingData = {
  // ─── Имена молодоженов ───
  groom: "Shohruxbek",
  bride: "Umidaxon",
  monogram: "Sh & U",

  // ─── Дата и время ───
  date: "2026-11-03T18:00:00",
  year: 2026,
  month: 11, // Ноябрь
  day: 3,
  displayDate: "3-noyabr, 2026-yil",
  displayDay: "Seshanba",
  displayTime: "18:00",

  // ─── Программа свадьбы ───
  timeline: [
    { time: "18:00", label: "Mehmonlarni kutib olish va nikoh to'yi", desc: "Barcha aziz mehmonlarni kutib olish va tantanali to'y boshlanishi" },
    { time: "18:30", label: "Kelin-kuyov kirish marosimi", desc: "Farishtalar va gullar yog'dusi hamrohligida" },
    { time: "19:00", label: "Tantanali dasturxon", desc: "Lazzatli taomlar va samimiy tilaklar" },
    { time: "20:00", label: "San'at dasturi va tabriklar", desc: "Milliy va estrada kuy-qo'shiqlari, raqslar" },
    { time: "21:30", label: "To'y torti va yorqin xotiralar", desc: "Kelin-kuyov valsi va estalik suratlari" },
  ],

  // ─── Место проведения (Shedevr, Янгихаётский район) ───
  venue: {
    name: "Shedevr",
    subtitle: "Tantanalar Majmuasi",
    district: "Yangihayot tumani",
    address: "Do'stlik ko'chasi, 3-uy, Yangihayot tumani, Toshkent shahri",
    landmark: "Mo'ljal: Qipchoq metro bekati yaqinida",
    googleMapsUrl: "https://maps.google.com/?q=Shedevr+Yangihayot+Tashkent",
    yandexMapsUrl: "https://yandex.uz/maps/10335/tashkent/house/do_stlik_ko_chasi_3/YkAYdAZiQEABQFprfX14dXpjZQ==/",
    gis2Url: "https://2gis.uz/tashkent/search/Shedevr%20Yangihayot",
    phone: "+998 90 123 45 67",
  },

  // ─── Тексты приглашения ───
  invitationTitle: "Sizni to'yimizga taklif qilamiz",
  bismillah: "Bismillohir Rohmanir Rohiym",
  invitationText:
    "Alloh taoloning marhamati bilan, ikki qalbning ezgu niyatlar ila boshlanayotgan oilaviy hayot ostonasida, ota-onamizning oq fotihasi ila nishonlanayotgan nikoh to'yimizga Siz azizlarni lutfan taklif etamiz. Sizning tashrifingiz bizning quvonchimizni yanada yuksaltiradi.",
  invitationSignature: "Hurmat bilan, Bekchanovlar oilasi",

  // ─── Любовная цитата ───
  quote: "«Va U sizlar taskin topishingiz uchun o'zingizdan juftlar yaratdi va oralaringizda mehr va marhamat paydo qildi.»",
  quoteSource: "Rum surasi, 21-oyat",

  // ─── Реальные фотографии пары и ресторана ───
  photos: {
    coupleMain: "/images/couple-bouquet.png",
    coupleHands: "/images/couple-hands.png",
    coupleBouquet: "/images/couple-bouquet.png",
    coupleBw: "/images/couple-bw.png",
    venue: "/images/venue.jpg",
    seal: "/images/seal.jpg",
  },

  // ─── Музыка (Maher Zain - For The Rest Of My Life, старт с 0:20) ───
  audio: {
    src: "/audio/maher-zain-for-the-rest-of-my-life.mp3",
    title: "Maher Zain — For The Rest Of My Life",
    startTime: 20, // 20-я секунда
    volume: 0.35,  // Мягкая ненавязчивая громкость
    enabled: true,
  },

  // ─── Telegram интеграция ───
  telegram: {
    botToken: "",
    chatId: "",
    fallbackUsername: "shohruxbek_wedding",
  },
};

export default weddingData;
