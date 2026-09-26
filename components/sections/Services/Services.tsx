"use client";

import { useRef } from "react";
import type { Dictionary } from "@/data/dictionary";
import { SITE_ASSETS } from "@/data/assets";

type ServicesProps = {
  dict: Dictionary["services"];
};

export const Services = ({ dict }: ServicesProps): React.JSX.Element => {
  return (
    <section className="services" id="services">
      <div className="wrap" style={{ paddingBottom: 0 }}>
        <span className="eyebrow">{dict.eyebrow}</span>
      </div>
      {dict.items.map((item, index) => (
        <ServiceRow
          key={item.num}
          item={item}
          mediaSrc={SITE_ASSETS.services[index] ?? SITE_ASSETS.services[0]}
        />
      ))}
    </section>
  );
};

type ServiceRowProps = {
  item: Dictionary["services"]["items"][number];
  mediaSrc: string;
};

const ServiceRow = ({ item, mediaSrc }: ServiceRowProps): React.JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const kind = mediaSrc.endsWith(".mp4") ? "video" : "image";

  const play = (): void => {
    void videoRef.current?.play();
  };

  const pause = (): void => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      className="svc-row"
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      <div className="svc-num">{item.num}</div>
      <div>
        <div className="svc-title">{item.title}</div>
        <div className="svc-desc">{item.desc}</div>
      </div>
      <div className="svc-visual" aria-hidden="true">
        {kind === "video" ? (
          <video
            ref={videoRef}
            className="svc-visual-media"
            src={mediaSrc}
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="svc-visual-media" src={mediaSrc} alt="" loading="lazy" />
        )}
      </div>
    </div>
  );
};
