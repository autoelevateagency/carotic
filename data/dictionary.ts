export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    home: string;
    services: string;
    gallery: string;
    about: string;
    contact: string;
    booking: string;
    menuAria: string;
  };
  hero: {
    ariaLabel: string;
    wordmark: string;
    cultureLine: string;
    metaEst: string;
    metaLocation: string;
    metaCategory: string;
    metaSide1: string;
    metaSide2: string;
    statement1: string;
    statement2: string;
    statement3: string;
    scroll: string;
  };
  services: {
    eyebrow: string;
    items: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  gallery: {
    titleLine1: string;
    titleLine2: string;
    hint: string;
    plates: Array<{
      idx: string;
      name: string;
      meta: string;
    }>;
  };
  testimonial: {
    eyebrow: string;
    prevAria: string;
    nextAria: string;
    reviews: Array<{
      quote: string;
      name: string;
      role: string;
    }>;
  };
  about: {
    stat: string;
    headBefore: string;
    headAccent: string;
    headAfter: string;
    copy: string;
    panelLabel: string;
  };
  contact: {
    title: string;
    hoursLabel: string;
    hoursValue: string;
    hoursDetail: Array<{ day: string; time: string }>;
    phoneLabel: string;
    phoneValue: string;
    phoneHref: string;
    addressLabel: string;
    addressValue: string;
    mapLabel: string;
    mapStreet: string;
    mapCity: string;
    mapEmbedUrl: string;
    mapLinkUrl: string;
  };
  cta: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    sub: string;
    button: string;
  };
  footer: {
    services: string;
    gallery: string;
    about: string;
    contact: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    copyright: string;
    location: string;
    social: {
      instagram: string;
      tiktok: string;
      facebook: string;
    };
  };
};

const SHOP_ADDRESS = "1609 Miller St, Downtown Houston, TX 77003";
const MAP_QUERY = encodeURIComponent(SHOP_ADDRESS);
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const PHONE_DISPLAY = "+1 210-906-7410";
const PHONE_HREF = "tel:+12109067410";

const SOCIAL = {
  instagram: "https://www.instagram.com/_carotic/",
  tiktok: "https://www.tiktok.com/@caroticllc",
  facebook: "https://www.facebook.com/Caroticllc",
} as const;

const en: Dictionary = {
  meta: {
    title: "CAROTIC LLC — Premium Wraps & Custom Builds · Houston",
    description:
      "Carotic LLC specializes in custom exterior color changes, upholstery, and custom interior & exterior lighting. 1609 Miller St, Downtown Houston.",
  },
  nav: {
    logo: "CAROTIC",
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    booking: "Booking",
    menuAria: "Menu",
  },
  hero: {
    ariaLabel: "CAROTIC — The Mark",
    wordmark: "CAROTIC",
    cultureLine: "Automotive Culture",
    metaEst: "Carotic LLC",
    metaLocation: "Downtown Houston",
    metaCategory: "Wraps · Starlight · Lighting",
    metaSide1: "1609 Miller St",
    metaSide2: "Downtown Houston, TX 77003",
    statement1: "Leave",
    statement2: "the mark",
    statement3: "on the street.",
    scroll: "Scroll to explore",
  },
  services: {
    eyebrow: "WHAT WE DO",
    items: [
      {
        num: "01",
        title: "Premium Vehicle Wraps",
        desc: "Custom exterior color changes and premium wraps finished in-house on Miller St.",
      },
      {
        num: "02",
        title: "Starlight Headliners",
        desc: "Starlight headliner installs that turn the cabin into a night-sky showpiece.",
      },
      {
        num: "03",
        title: "Interior & Exterior Lighting",
        desc: "Custom interior and exterior lighting setups built to match your vision.",
      },
      {
        num: "04",
        title: "Window Tinting",
        desc: "Clean, precise window tinting for heat control, privacy, and a finished look.",
      },
    ],
  },
  gallery: {
    titleLine1: "The",
    titleLine2: "Archive.",
    hint: "Scroll horizontally →\nselected Houston builds, 2024–2026",
    plates: [],
  },
  testimonial: {
    eyebrow: "FROM THE COMMUNITY",
    prevAria: "Previous review",
    nextAria: "Next review",
    reviews: [
      {
        quote:
          "I recently got my Mustang's stripes done, and it looks absolutely incredible. I'm incredibly grateful to Ashli, my dear friend, and her boss for their exceptional tips and kindness throughout my experience. I highly recommend that you all come here.",
        name: "Alexis Chaar",
        role: "Mustang · Stripes",
      },
      {
        quote:
          "They did my Mercedes GT. Amazing price for the quality of work. Great customer service, great shop.",
        name: "Kevin Barber",
        role: "Mercedes GT",
      },
      {
        quote:
          "I enjoyed working with Carotic! I was able to get exactly what I wanted and the deals they have are really great. The work is exceptional! Can't wait to work on more projects together. 5 STARS",
        name: "Sir Burrna",
        role: "Carotic Client",
      },
    ],
  },
  about: {
    stat: "04",
    headBefore: "Carotic isn't ",
    headAccent: "just",
    headAfter: " about the cars.",
    copy: "We specialize in custom exterior color changes, upholstery, and custom interior & exterior lighting. Our goal is to bring your dreams of the perfect car to reality — from our shop at 1609 Miller St in Downtown Houston.",
    panelLabel: "CAROTIC LLC — 1609 MILLER ST, HOUSTON",
  },
  contact: {
    title: "Contact",
    hoursLabel: "Hours",
    hoursValue: "Mon–Fri, 9:30 AM – 6:00 PM · Closed Sat–Sun",
    hoursDetail: [
      { day: "Monday", time: "9:30 AM – 6:00 PM" },
      { day: "Tuesday", time: "9:30 AM – 6:00 PM" },
      { day: "Wednesday", time: "9:30 AM – 6:00 PM" },
      { day: "Thursday", time: "9:30 AM – 6:00 PM" },
      { day: "Friday", time: "9:30 AM – 6:00 PM" },
      { day: "Saturday", time: "Closed" },
      { day: "Sunday", time: "Closed" },
    ],
    phoneLabel: "Phone",
    phoneValue: PHONE_DISPLAY,
    phoneHref: PHONE_HREF,
    addressLabel: "Address",
    addressValue: SHOP_ADDRESS,
    mapLabel: "CAROTIC LLC",
    mapStreet: "1609 Miller St",
    mapCity: "Downtown Houston, TX 77003",
    mapEmbedUrl: MAP_EMBED_URL,
    mapLinkUrl: MAP_LINK_URL,
  },
  cta: {
    eyebrow: "READY WHEN YOU ARE",
    line1: "YOUR CAR.",
    line2: "YOUR BUILD.",
    line3: "YOUR CULTURE.",
    sub: "Tell us what you're driving and what you've got in mind. Call Carotic LLC or swing by Miller St — we'll take it from there.",
    button: "Call now",
  },
  footer: {
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    instagram: "Instagram",
    tiktok: "TikTok",
    facebook: "Facebook",
    copyright: "© 2026 Carotic LLC. All rights reserved.",
    location: "Downtown Houston, TX",
    social: SOCIAL,
  },
};

const ur: Dictionary = {
  meta: {
    title: "CAROTIC LLC — پریمیم ریپس اور کسٹم بلڈز · ہیوسٹن",
    description:
      "Carotic LLC کسٹم ایکسٹیریئر کلر چینجز، اپہولسٹری، اور انٹیریئر و ایکسٹیریئر لائٹنگ میں مہارت رکھتا ہے۔ 1609 Miller St، Downtown Houston۔",
  },
  nav: {
    logo: "CAROTIC",
    home: "ہوم",
    services: "سروسز",
    gallery: "گیلری",
    about: "ہمارے بارے",
    contact: "رابطہ",
    booking: "بکنگ",
    menuAria: "مینو",
  },
  hero: {
    ariaLabel: "CAROTIC — دی مارک",
    wordmark: "CAROTIC",
    cultureLine: "آٹوموٹو کلچر",
    metaEst: "Carotic LLC",
    metaLocation: "Downtown Houston",
    metaCategory: "ریپس · سٹار لائٹ · لائٹنگ",
    metaSide1: "1609 Miller St",
    metaSide2: "Downtown Houston, TX 77003",
    statement1: "Leave",
    statement2: "the mark",
    statement3: "on the street.",
    scroll: "مزید دیکھیں",
  },
  services: {
    eyebrow: "ہم کیا کرتے ہیں",
    items: [
      {
        num: "01",
        title: "پریمیم وہیکل ریپس",
        desc: "کسٹم ایکسٹیریئر کلر چینجز اور پریمیم ریپس — Miller St پر انہاؤس۔",
      },
      {
        num: "02",
        title: "سٹار لائٹ ہیڈ لائنرز",
        desc: "سٹار لائٹ ہیڈ لائنر انسٹالز جو کیبن کو شوپیس بناتے ہیں۔",
      },
      {
        num: "03",
        title: "انٹیریئر اینڈ ایکسٹیریئر لائٹنگ",
        desc: "کسٹم انٹیریئر اور ایکسٹیریئر لائٹنگ آپ کے ویژن کے مطابق۔",
      },
      {
        num: "04",
        title: "ونڈو ٹنٹنگ",
        desc: "صاف اور درست ونڈو ٹنٹنگ — ہیٹ کنٹرول، پرائیویسی، اور فنشڈ لک۔",
      },
    ],
  },
  gallery: {
    titleLine1: "The",
    titleLine2: "Archive.",
    hint: "افقی اسکرول →\nمنتخب ہیوسٹن بلڈز، 2024–2026",
    plates: [],
  },
  testimonial: {
    eyebrow: "کمیونٹی سے",
    prevAria: "پچھلا ریویو",
    nextAria: "اگلا ریویو",
    reviews: [
      {
        quote:
          "I recently got my Mustang's stripes done, and it looks absolutely incredible. I'm incredibly grateful to Ashli, my dear friend, and her boss for their exceptional tips and kindness throughout my experience. I highly recommend that you all come here.",
        name: "Alexis Chaar",
        role: "Mustang · Stripes",
      },
      {
        quote:
          "They did my Mercedes GT. Amazing price for the quality of work. Great customer service, great shop.",
        name: "Kevin Barber",
        role: "Mercedes GT",
      },
      {
        quote:
          "I enjoyed working with Carotic! I was able to get exactly what I wanted and the deals they have are really great. The work is exceptional! Can't wait to work on more projects together. 5 STARS",
        name: "Sir Burrna",
        role: "Carotic Client",
      },
    ],
  },
  about: {
    stat: "04",
    headBefore: "Carotic صرف ",
    headAccent: "کاروں",
    headAfter: " کے بارے میں نہیں۔",
    copy: "ہم کسٹم ایکسٹیریئر کلر چینجز، اپہولسٹری، اور کسٹم انٹیریئر و ایکسٹیریئر لائٹنگ میں مہارت رکھتے ہیں۔ ہمارا مقصد آپ کی پرفیکٹ کار کے خواب کو حقیقت بنانا ہے — 1609 Miller St، Downtown Houston۔",
    panelLabel: "CAROTIC LLC — 1609 MILLER ST, HOUSTON",
  },
  contact: {
    title: "رابطہ",
    hoursLabel: "اوقات",
    hoursValue: "پیر–جمعہ، 9:30 صبح – 6:00 شام · ہفتہ–اتوار بند",
    hoursDetail: [
      { day: "پیر", time: "9:30 AM – 6:00 PM" },
      { day: "منگل", time: "9:30 AM – 6:00 PM" },
      { day: "بدھ", time: "9:30 AM – 6:00 PM" },
      { day: "جمعرات", time: "9:30 AM – 6:00 PM" },
      { day: "جمعہ", time: "9:30 AM – 6:00 PM" },
      { day: "ہفتہ", time: "بند" },
      { day: "اتوار", time: "بند" },
    ],
    phoneLabel: "فون",
    phoneValue: PHONE_DISPLAY,
    phoneHref: PHONE_HREF,
    addressLabel: "پتہ",
    addressValue: SHOP_ADDRESS,
    mapLabel: "CAROTIC LLC",
    mapStreet: "1609 Miller St",
    mapCity: "Downtown Houston, TX 77003",
    mapEmbedUrl: MAP_EMBED_URL,
    mapLinkUrl: MAP_LINK_URL,
  },
  cta: {
    eyebrow: "جب آپ تیار ہوں",
    line1: "YOUR CAR.",
    line2: "YOUR BUILD.",
    line3: "YOUR CULTURE.",
    sub: "بتائیں آپ کیا چلا رہے ہیں۔ Carotic LLC کو کال کریں یا Miller St پر آئیں۔",
    button: "ابھی کال کریں",
  },
  footer: {
    services: "سروسز",
    gallery: "گیلری",
    about: "ہمارے بارے",
    contact: "رابطہ",
    instagram: "انسٹاگرام",
    tiktok: "ٹک ٹاک",
    facebook: "فیس بک",
    copyright: "© 2026 Carotic LLC۔ جملہ حقوق محفوظ۔",
    location: "Downtown Houston, TX",
    social: SOCIAL,
  },
};

const dictionaries: Record<Locale, Dictionary> = {
  EN: en,
  UR: ur,
};

export const DEFAULT_LOCALE: Locale = "EN";

export const getDictionary = (locale: Locale = DEFAULT_LOCALE): Dictionary => {
  return dictionaries[locale] ?? dictionaries.EN;
};
