export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    services: string;
    gallery: string;
    about: string;
    contact: string;
    booking: string;
    menuAria: string;
  };
  hero: {
    ariaLabel: string;
    volume: string;
    markLabel: string;
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
    quote: string;
    name: string;
    role: string;
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
    phoneLabel: string;
    phoneValue: string;
    phoneHref: string;
    emailLabel: string;
    emailValue: string;
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
    copyright: string;
    location: string;
  };
};

const SHOP_ADDRESS = "1609 Miller St, Houston, TX 77003";
const MAP_QUERY = encodeURIComponent(SHOP_ADDRESS);
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

const en: Dictionary = {
  meta: {
    title: "CAROTIC — Built Around the Culture",
    description:
      "Houston custom car builds, body & paint, and late-night workshop culture. CAROTIC — 1609 Miller St.",
  },
  nav: {
    logo: "CAROTIC",
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    booking: "Booking",
    menuAria: "Menu",
  },
  hero: {
    ariaLabel: "CAROTIC — The Mark",
    volume: "Vol. 01",
    markLabel: "The Mark",
    wordmark: "CAROTIC",
    cultureLine: "Automotive Culture",
    metaEst: "Est. Underground",
    metaLocation: "Houston · Miller St",
    metaCategory: "Wraps · Builds · Night",
    metaSide1: "1609 Miller St",
    metaSide2: "Houston, TX 77003",
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
        title: "Color PPF & Wraps",
        desc: "Full-color PPF, satin and gloss wraps built for Houston heat — finished in-house on Miller St.",
      },
      {
        num: "02",
        title: "Custom Lighting",
        desc: "Ambient kits, roof accents and lighting setups that hit hard after dark.",
      },
      {
        num: "03",
        title: "Starlight & Interior",
        desc: "Starlight headliners, seat upholstery and full cabin builds — show-ready every time.",
      },
      {
        num: "04",
        title: "Trucks & Builds",
        desc: "Sky lounge trucks, two-tones and the street builds Houston shows up for.",
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
    quote:
      "They didn't just wrap the car. They understood exactly what we were going for.",
    name: "Marcus T.",
    role: "Houston · Full Wrap Owner",
  },
  about: {
    stat: "03",
    headBefore: "Carotic isn't ",
    headAccent: "just",
    headAfter: " about the cars.",
    copy: "It's about Houston car culture — late-night meets, the crew that shows up every time, the paint job that took three tries to get right. From our shop on Miller St, we build cars the same way the culture built us: raw, hands-on, unapologetic.",
    panelLabel: "WORKSHOP — 1609 MILLER ST, HOUSTON",
  },
  contact: {
    title: "Contact",
    hoursLabel: "Hours",
    hoursValue: "Mon–Sat, 11:00 AM – 10:00 PM",
    phoneLabel: "Phone",
    phoneValue: "(713) 000-0000",
    phoneHref: "tel:+17130000000",
    emailLabel: "Email",
    emailValue: "build@carotic.com",
    addressLabel: "Address",
    addressValue: SHOP_ADDRESS,
    mapLabel: "CAROTIC · HOUSTON",
    mapStreet: "1609 Miller St",
    mapCity: "Houston, TX 77003",
    mapEmbedUrl: MAP_EMBED_URL,
    mapLinkUrl: MAP_LINK_URL,
  },
  cta: {
    eyebrow: "READY WHEN YOU ARE",
    line1: "YOUR CAR.",
    line2: "YOUR BUILD.",
    line3: "YOUR CULTURE.",
    sub: "Tell us what you're driving in Houston and what you've got in mind. Swing by Miller St — we'll take it from there.",
    button: "Book a build",
  },
  footer: {
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    instagram: "Instagram",
    copyright: "© 2026 CAROTIC. All rights reserved.",
    location: "Houston, TX",
  },
};

const ur: Dictionary = {
  meta: {
    title: "CAROTIC — کلچر کے گرد بنایا گیا",
    description:
      "ہیوسٹن کسٹم کار بلڈز، باڈی اینڈ پینٹ، اور رات کی ورکشاپ کلچر۔ CAROTIC — 1609 Miller St۔",
  },
  nav: {
    logo: "CAROTIC",
    services: "سروسز",
    gallery: "گیلری",
    about: "ہمارے بارے",
    contact: "رابطہ",
    booking: "بکنگ",
    menuAria: "مینو",
  },
  hero: {
    ariaLabel: "CAROTIC — دی مارک",
    volume: "Vol. 01",
    markLabel: "دی مارک",
    wordmark: "CAROTIC",
    cultureLine: "آٹوموٹو کلچر",
    metaEst: "انڈر گراؤنڈ",
    metaLocation: "ہیوسٹن · Miller St",
    metaCategory: "ریپس · بلڈز · نائٹ",
    metaSide1: "1609 Miller St",
    metaSide2: "Houston, TX 77003",
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
        title: "کلر پی پی ایف اینڈ ریپس",
        desc: "فل کلر پی پی ایف، سیٹن اور گلاس ریپس — ہیوسٹن ہیٹ کے لیے، Miller St پر۔",
      },
      {
        num: "02",
        title: "کسٹم لائٹنگ",
        desc: "ایمبیئنٹ کٹس، روف ایکسنٹس اور لائٹنگ جو رات میں نمایاں ہو۔",
      },
      {
        num: "03",
        title: "سٹار لائٹ اینڈ انٹیریئر",
        desc: "سٹار لائٹ ہیڈ لائنرز، سیٹ اپہولسٹری اور فل کیبن بلڈز۔",
      },
      {
        num: "04",
        title: "ٹرکس اینڈ بلڈز",
        desc: "سکائی لاؤنج ٹرکس، ٹو ٹونز اور ہیوسٹن سٹریٹ بلڈز۔",
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
    quote: "انہوں نے صرف ریپ نہیں کیا۔ انہوں نے سمجھا کہ ہم کیا چاہتے تھے۔",
    name: "مارکس ٹی۔",
    role: "ہیوسٹن · Full Wrap Owner",
  },
  about: {
    stat: "03",
    headBefore: "Carotic صرف ",
    headAccent: "کاروں",
    headAfter: " کے بارے میں نہیں۔",
    copy: "یہ ہیوسٹن کار کلچر کے بارے میں ہے — رات کے میٹس، وہ کریو جو ہمیشہ آتا ہے، وہ پینٹ جاب جو تین بار درست ہوئی۔ ہماری Miller St شاپ سے۔",
    panelLabel: "WORKSHOP — 1609 MILLER ST, HOUSTON",
  },
  contact: {
    title: "رابطہ",
    hoursLabel: "اوقات",
    hoursValue: "پیر–ہفتہ، 11:00 صبح – 10:00 رات",
    phoneLabel: "فون",
    phoneValue: "(713) 000-0000",
    phoneHref: "tel:+17130000000",
    emailLabel: "ای میل",
    emailValue: "build@carotic.com",
    addressLabel: "پتہ",
    addressValue: SHOP_ADDRESS,
    mapLabel: "CAROTIC · HOUSTON",
    mapStreet: "1609 Miller St",
    mapCity: "Houston, TX 77003",
    mapEmbedUrl: MAP_EMBED_URL,
    mapLinkUrl: MAP_LINK_URL,
  },
  cta: {
    eyebrow: "جب آپ تیار ہوں",
    line1: "YOUR CAR.",
    line2: "YOUR BUILD.",
    line3: "YOUR CULTURE.",
    sub: "بتائیں ہیوسٹن میں آپ کیا چلا رہے ہیں۔ Miller St پر آئیں — باقی ہم سنبھال لیں گے۔",
    button: "بلڈ بک کریں",
  },
  footer: {
    services: "سروسز",
    gallery: "گیلری",
    about: "ہمارے بارے",
    contact: "رابطہ",
    instagram: "انسٹاگرام",
    copyright: "© 2026 CAROTIC۔ جملہ حقوق محفوظ۔",
    location: "ہیوسٹن، ٹی ایکس",
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
