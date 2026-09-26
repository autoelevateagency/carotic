export type MediaKind = "image" | "video";

export type SiteAsset = {
  id: string;
  src: string;
  kind: MediaKind;
  title: string;
  meta: string;
};

export const SITE_ASSETS = {
  hero: "/assets/two-tone-black-nardo.mp4",
  about: "/assets/gallery-01.jpg",
  services: [
    "/assets/full-color-ppf.mp4",
    "/assets/satin-black.mp4",
    "/assets/starlight-ambient.mp4",
    "/assets/black-truck-sky-lounge.mp4",
  ],
  gallery: [
    {
      id: "001",
      src: "/assets/two-tone-black-nardo.mp4",
      kind: "video",
      title: "Two-Tone Wrap",
      meta: "Gloss Black · Nardo Gray",
    },
    {
      id: "002",
      src: "/assets/full-color-ppf.mp4",
      kind: "video",
      title: "Full Color PPF",
      meta: "Ambient · Forgiato",
    },
    {
      id: "003",
      src: "/assets/gallery-01.jpg",
      kind: "image",
      title: "Shop Build",
      meta: "Houston · Miller St",
    },
    {
      id: "004",
      src: "/assets/gloss-black-roof.mp4",
      kind: "video",
      title: "Gloss Black Roof",
      meta: "Roof · Mirrors",
    },
    {
      id: "005",
      src: "/assets/starlight-ambient.mp4",
      kind: "video",
      title: "Starlight Ambient",
      meta: "Headliner · Lighting",
    },
    {
      id: "006",
      src: "/assets/gallery-02.jpg",
      kind: "image",
      title: "Night Finish",
      meta: "Houston Showcase",
    },
    {
      id: "007",
      src: "/assets/black-truck-sky-lounge.mp4",
      kind: "video",
      title: "Sky Lounge Truck",
      meta: "Black Truck · Custom",
    },
    {
      id: "008",
      src: "/assets/satin-black.mp4",
      kind: "video",
      title: "Satin Black",
      meta: "Wrap · Custom Lighting",
    },
    {
      id: "009",
      src: "/assets/starlight-seats.mp4",
      kind: "video",
      title: "Starlight Seats",
      meta: "Headliner · Upholstery",
    },
    {
      id: "010",
      src: "/assets/custom-interior.mp4",
      kind: "video",
      title: "Custom Interior",
      meta: "Full Cabin Build",
    },
  ] as const satisfies readonly SiteAsset[],
} as const;
