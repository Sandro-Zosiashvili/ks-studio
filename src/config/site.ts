// ============================================================================
// KS STUDIO — CENTRAL BRAND CONFIG
// ============================================================================
// CLIENT: Swap any image URL below for your own studio photography.
// All tattoo photos, artist portraits, and brand details live here.
// ============================================================================

export type Category =
  | "Fine Line"
  | "Botanical"
  | "Minimal"
  | "Blackwork"
  | "Lettering"
  | "Geometric";

export interface TattooItem {
  id: number;
  imageUrl: string;
  title: string;
  category: Category;
  artistName: string;
}

export interface Artist {
  id: string;
  name: string;
  specialty: string;
  specialtyKa: string;
  bio: string;
  bioKa: string;
  instagram: string;
  portraitUrl: string;
  workingUrl: string;
}

// ----------------------------------------------------------------------------
// BRAND
// ----------------------------------------------------------------------------
export const SITE = {
  name: "KS STUDIO",
  shortName: "KS",
  email: "hello@ksstudio.ge",
  phone: "+995 322 00 11 22",
  whatsapp: "+995577001122",
  address: {
    en: "7 Tandzia St, Tbilisi, Georgia",
    ka: "7 ტანძიის ქუჩა, თბილისი, საქართველო",
  },
  hours: {
    en: "Tue–Sun · 11:00 – 20:00 · Mon closed",
    ka: "სამშ–კვ · 11:00 – 20:00 · ორშ დახურულია",
  },
  mapUrl: "https://maps.app.goo.gl/fuWTWEiHpF7rVwu69",
  social: {
    instagram: "https://instagram.com/ksstudio.tbilisi",
    facebook: "https://facebook.com/ksstudio.tbilisi",
    tiktok: "https://tiktok.com/@ksstudio.tbilisi",
    whatsapp: "https://wa.me/995577001122",
  },
} as const;

// ----------------------------------------------------------------------------
// HERO SLIDESHOW IMAGES (real tattoo photography)
// ----------------------------------------------------------------------------
export const HERO_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1561377455-190afb395ed7?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1516008684536-605574d804ce?auto=format&fit=crop&w=1920&q=80",
];

// ----------------------------------------------------------------------------
// ARTISTS
// ----------------------------------------------------------------------------
export const ARTISTS: Artist[] = [
  {
    id: "nino-k",
    name: "Nino K.",
    specialty: "Fine Line & Botanical",
    specialtyKa: "წვრილი ხაზი და ბოტანიკა",
    bio: "Nino draws like she's whispering — delicate florals and single-needle line work that feels almost weightless on the skin.",
    bioKa: "ნინო ხატავს ისე, თითქოს ჩურჩულებს — ნატიფი ყვავილები და ერთნემსიანი ხაზები, რომლებიც კანზე თითქმის უწონოა.",
    instagram: "@nino.kfineline",
    portraitUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    workingUrl:
      "https://images.unsplash.com/photo-1564426622559-5af68da63b96?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "saba-m",
    name: "Saba M.",
    specialty: "Blackwork & Geometric",
    specialtyKa: "ბლექვორქი და გეომეტრია",
    bio: "Bold, architectural, uncompromising. Saba builds tattoos with the patience of a stonemason and the eye of a graphic designer.",
    bioKa: "თამამი, არქიტექტურული, უკომპრომისო. საბა ქმნის ტატუს მქისე მოთმინებითა და დიზაინერის თვალით.",
    instagram: "@saba.blackwork",
    portraitUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    workingUrl:
      "https://images.unsplash.com/photo-1552627019-947c3789ffb5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lika-t",
    name: "Lika T.",
    specialty: "Minimal & Lettering",
    specialtyKa: "მინიმალიზმი და შრიფტი",
    bio: "Lika believes in the power of less. Her micro-script and tiny symbols carry whole stories in a few millimeters.",
    bioKa: "ლიკას სჯერა ნაკლების ძალის. მისი მიკრო-შრიფტი და პატარა სიმბოლოები რამდენიმე მილიმეტრში მთელ ისტორიას ატარებს.",
    instagram: "@lika.minimal",
    portraitUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    workingUrl:
      "https://images.unsplash.com/photo-1627458514257-41d0ea46e326?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "data-g",
    name: "Data G.",
    specialty: "Geometric & Fine Line",
    specialtyKa: "გეომეტრია და წვრილი ხაზი",
    bio: "Sacred geometry meets surgical precision. Data maps the body and lets the lines follow where they belong.",
    bioKa: "საკრალური გეომეტრია ხვდება ქირურგიულ სიზუსტეს. დატა კითხულობს სხეულს და ხაზებს იქ მიჰყავს, სადაც მათ ადგილია.",
    instagram: "@data.geo",
    portraitUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    workingUrl:
      "https://images.unsplash.com/photo-1643513456892-437e82e06f4a?auto=format&fit=crop&w=800&q=80",
  },
];

// ----------------------------------------------------------------------------
// PORTFOLIO / TATTOO GALLERY (20 items, real photography)
// ----------------------------------------------------------------------------
export const TATTOOS: TattooItem[] = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1561491040-14a86bca9106?auto=format&fit=crop&w=800&q=80", title: "Obsidian Spine", category: "Geometric", artistName: "Saba M." },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80", title: "Peony Sleeve", category: "Botanical", artistName: "Nino K." },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80", title: "Folklore Back", category: "Blackwork", artistName: "Saba M." },
  { id: 4, imageUrl: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=800&q=80", title: "Olive Vine", category: "Fine Line", artistName: "Nino K." },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1607382007937-fe3a9d196b7a?auto=format&fit=crop&w=800&q=80", title: "Wild Peony", category: "Botanical", artistName: "Nino K." },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?auto=format&fit=crop&w=800&q=80", title: "Mandala Spine", category: "Geometric", artistName: "Data G." },
  { id: 7, imageUrl: "https://images.unsplash.com/photo-1570168983832-8989dae1522e?auto=format&fit=crop&w=800&q=80", title: "Love, Cursive", category: "Lettering", artistName: "Lika T." },
  { id: 8, imageUrl: "https://images.unsplash.com/photo-1561377455-190afb395ed7?auto=format&fit=crop&w=800&q=80", title: "Ornamental Back", category: "Blackwork", artistName: "Saba M." },
  { id: 9, imageUrl: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80", title: "Garden Forearm", category: "Botanical", artistName: "Nino K." },
  { id: 10, imageUrl: "https://images.unsplash.com/photo-1562379825-415aea84ebcf?auto=format&fit=crop&w=800&q=80", title: "Inked Nape", category: "Blackwork", artistName: "Saba M." },
  { id: 11, imageUrl: "https://images.unsplash.com/photo-1595862645152-2f32bd80ce1d?auto=format&fit=crop&w=800&q=80", title: "Wanderlust", category: "Fine Line", artistName: "Data G." },
  { id: 12, imageUrl: "https://images.unsplash.com/photo-1736594635582-7f60e14604cc?auto=format&fit=crop&w=800&q=80", title: "Tiny Mark", category: "Minimal", artistName: "Lika T." },
  { id: 13, imageUrl: "https://images.unsplash.com/photo-1557130641-1b14718f096a?auto=format&fit=crop&w=800&q=80", title: "Black Geometry", category: "Blackwork", artistName: "Saba M." },
  { id: 14, imageUrl: "https://images.unsplash.com/photo-1704345911745-f2524e8b76f6?auto=format&fit=crop&w=800&q=80", title: "Wildflower", category: "Botanical", artistName: "Nino K." },
  { id: 15, imageUrl: "https://images.unsplash.com/photo-1531951829979-d658d7e5e8a6?auto=format&fit=crop&w=800&q=80", title: "River Tribal", category: "Geometric", artistName: "Data G." },
  { id: 16, imageUrl: "https://images.unsplash.com/photo-1547754145-ef9ff306e3f3?auto=format&fit=crop&w=800&q=80", title: "One Word", category: "Minimal", artistName: "Lika T." },
  { id: 17, imageUrl: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=800&q=80", title: "Studio Session", category: "Fine Line", artistName: "Nino K." },
  { id: 18, imageUrl: "https://images.unsplash.com/photo-1679621551579-8f7a24b467c2?auto=format&fit=crop&w=800&q=80", title: "Reaper Line", category: "Fine Line", artistName: "Data G." },
  { id: 19, imageUrl: "https://images.unsplash.com/photo-1607281503082-f01fedd97a5b?auto=format&fit=crop&w=800&q=80", title: "Carved Script", category: "Lettering", artistName: "Lika T." },
  { id: 20, imageUrl: "https://images.unsplash.com/photo-1651692883249-ed36b3523419?auto=format&fit=crop&w=800&q=80", title: "Wear the Crown", category: "Lettering", artistName: "Lika T." },
];

// ----------------------------------------------------------------------------
// BOOKING OPTIONS
// ----------------------------------------------------------------------------
export const TIME_SLOTS = ["11:00", "13:00", "15:00", "17:00", "19:00"] as const;

export const BODY_PARTS = [
  { en: "Forearm", ka: "წინამხარი" },
  { en: "Upper Arm", ka: "მხარი" },
  { en: "Back", ka: "ზურგი" },
  { en: "Chest", ka: "მკერდი" },
  { en: "Leg", ka: "ფეხი" },
  { en: "Hand / Finger", ka: "ხელი / თითი" },
  { en: "Neck", ka: "კისერი" },
  { en: "Ribs", ka: "ნეკნები" },
] as const;

export const TATTOO_SIZES = [
  { en: "Small (under 5cm)", ka: "პატარა (5სმ-მდე)" },
  { en: "Medium (5–15cm)", ka: "საშუალო (5–15სმ)" },
  { en: "Large (15cm+)", ka: "დიდი (15სმ+)" },
] as const;

export const STYLE_CHIPS: Category[] = [
  "Fine Line",
  "Botanical",
  "Minimal",
  "Blackwork",
  "Lettering",
  "Geometric",
];
