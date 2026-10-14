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

  // ─── Родители ───
  groomParents: "Baxodir va Almagul Bekchanovlar",

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
    { time: "17:30", label: "Mehmonlarni kutib olish", desc: "Tantanali musiqa va xush kelibsiz qahvaxonasi" },
    { time: "18:00", label: "Nikoh to'yi boshlanishi", desc: "Barcha aziz mehmonlar zalda jam bo'lishi" },
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
    yandexMapsUrl: "https://yandex.uz/maps/?text=Shedevr+Yangihayot+tumani+Do'stlik+3+Toshkent",
    gis2Url: "https://2gis.uz/tashkent/search/Shedevr%20Yangihayot",
    phone: "+998 90 123 45 67",
  },

  // ─── Дресс-код ───
  dressCode: {
    title: "Kiyinish uslubi (Dress-code)",
    description: "Bizning bayramimizni yanada nafis qilish uchun quyidagi mayin va oqshom ranglarini tavsiya etamiz:",
    colors: [
      { name: "Sutli oq / Ivory", hex: "#FFF9F5", border: "#E2D0A8" },
      { name: "Pudrali pushti", hex: "#F5C6CB", border: "#D4919A" },
      { name: "Shaftolirang", hex: "#FDE8E8", border: "#E8A5AE" },
      { name: "Yumshoq oltin", hex: "#C9A96E", border: "#A88C55" },
      { name: "Klassik quyuq", hex: "#4A3728", border: "#6B5B4F" },
    ],
    note: "Iltimos, butunlay oq yoki butunlay qora liboslardan saqlanishingizni so'raymiz.",
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
    startTime: 20, // Воспроизведение с 20-й секунды
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
