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
    en: "12 Erekle II St, Old Tbilisi, Tbilisi 0105, Georgia",
    ka: "ერეკლე II-ის ქ. 12, ძველი თბილისი, თბილისი 0105, საქართველო",
  },
  hours: {
    en: "Tue–Sun · 11:00 – 20:00 · Mon closed",
    ka: "სამშ–კვ · 11:00 – 20:00 · ორშ დახურულია",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=41.6938,44.8083",
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
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1633933037027-26e8b5e36e4e?auto=format&fit=crop&w=1920&q=80",
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
      "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
  },
];

// ----------------------------------------------------------------------------
// PORTFOLIO / TATTOO GALLERY (20 items, real photography)
// ----------------------------------------------------------------------------
export const TATTOOS: TattooItem[] = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80", title: "Wild Stem", category: "Botanical", artistName: "Nino K." },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=800&q=80", title: "Quiet Line", category: "Fine Line", artistName: "Lika T." },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80", title: "Black Sun", category: "Blackwork", artistName: "Saba M." },
  { id: 4, imageUrl: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80", title: "Sparrow", category: "Fine Line", artistName: "Nino K." },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1633933037027-26e8b5e36e4e?auto=format&fit=crop&w=800&q=80", title: "Sacred Grid", category: "Geometric", artistName: "Data G." },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&w=800&q=80", title: "Olive Branch", category: "Botanical", artistName: "Nino K." },
  { id: 7, imageUrl: "https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&w=800&q=80", title: "Mono Dot", category: "Minimal", artistName: "Lika T." },
  { id: 8, imageUrl: "https://images.unsplash.com/photo-1571689936114-b16146c9570a?auto=format&fit=crop&w=800&q=80", title: "Ink Serif", category: "Lettering", artistName: "Lika T." },
  { id: 9, imageUrl: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80", title: "Heavy Fill", category: "Blackwork", artistName: "Saba M." },
  { id: 10, imageUrl: "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&w=800&q=80", title: "Hexline", category: "Geometric", artistName: "Data G." },
  { id: 11, imageUrl: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80", title: "Fern", category: "Botanical", artistName: "Nino K." },
  { id: 12, imageUrl: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=800&q=80", title: "Hairline", category: "Fine Line", artistName: "Data G." },
  { id: 13, imageUrl: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=801&q=80", title: "Single Bloom", category: "Botanical", artistName: "Nino K." },
  { id: 14, imageUrl: "https://images.unsplash.com/photo-1564131072-bcc7d6516d2e?auto=format&fit=crop&w=800&q=80", title: "Solid Band", category: "Blackwork", artistName: "Saba M." },
  { id: 15, imageUrl: "https://images.unsplash.com/photo-1551892589-865f69869476?auto=format&fit=crop&w=800&q=80", title: "Small Word", category: "Lettering", artistName: "Lika T." },
  { id: 16, imageUrl: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=800&q=80", title: "Triangle Study", category: "Geometric", artistName: "Data G." },
  { id: 17, imageUrl: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto=format&fit=crop&w=800&q=80", title: "Thread", category: "Minimal", artistName: "Lika T." },
  { id: 18, imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80", title: "Moon Phase", category: "Fine Line", artistName: "Nino K." },
  { id: 19, imageUrl: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80", title: "Script Flow", category: "Lettering", artistName: "Lika T." },
  { id: 20, imageUrl: "https://images.unsplash.com/photo-1626128665085-483747621778?auto=format&fit=crop&w=800&q=80", title: "Mandala Core", category: "Geometric", artistName: "Data G." },
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
