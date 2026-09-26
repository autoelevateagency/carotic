"use client";

import type { Dictionary } from "@/data/dictionary";
import { SITE_ASSETS } from "@/data/assets";
import { PlateMedia } from "@/components/sections/Gallery/PlateMedia";
import { Reveal } from "@/components/Reveal/Reveal";
import { useReveal } from "@/components/Reveal/useReveal";

type GalleryProps = {
  dict: Dictionary["gallery"];
};

export const Gallery = ({ dict }: GalleryProps): React.JSX.Element => {
  return (
    <section className="archive" id="gallery" aria-label={dict.titleLine2}>
      <div className="archive-head">
        <Reveal variant="up" delay={60}>
          <div className="archive-title">
            {dict.titleLine1}
            <br />
            {dict.titleLine2}
          </div>
        </Reveal>
        <Reveal variant="fade" delay={220}>
          <div className="archive-hint">
            {dict.hint.split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="archive-track">
        {SITE_ASSETS.gallery.map((plate, index) => (
          <GalleryPlate key={plate.id} plate={plate} delay={index * 80} />
        ))}
      </div>
    </section>
  );
};

type GalleryPlateProps = {
  plate: (typeof SITE_ASSETS.gallery)[number];
  delay: number;
};

const GalleryPlate = ({
  plate,
  delay,
}: GalleryPlateProps): React.JSX.Element => {
  const reveal = useReveal({ variant: "scale", delay });

  return (
    <article
      ref={reveal.ref as React.RefObject<HTMLElement>}
      className={`plate ${reveal.className}`}
      style={reveal.style}
    >
      <PlateMedia src={plate.src} kind={plate.kind} alt={plate.title} />
      <span className="plate-idx">{plate.id}</span>
      <span className="plate-tag">
        <b>{plate.title}</b>
        {plate.meta}
      </span>
    </article>
  );
};
