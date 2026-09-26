"use client";

import type { Dictionary } from "@/data/dictionary";
import { useReveal } from "@/components/Reveal/useReveal";

type ContactProps = {
  dict: Dictionary["contact"];
};

export const Contact = ({ dict }: ContactProps): React.JSX.Element => {
  const info = useReveal({ variant: "left", delay: 80, className: "contact-col" });
  const map = useReveal({ variant: "right", delay: 180, className: "map-box" });

  return (
    <section className="contact-wrap" id="contact">
      <div
        ref={info.ref as React.RefObject<HTMLDivElement>}
        className={info.className}
        style={info.style}
      >
        <h2 className="contact-title">{dict.title}</h2>
        <ul className="contact-list">
          <li className="contact-hours">
            <span>{dict.hoursLabel}</span>
            <div className="contact-hours-list">
              {dict.hoursDetail.map((row) => (
                <div className="contact-hours-row" key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </div>
              ))}
            </div>
          </li>
          <li>
            <span>{dict.phoneLabel}</span>
            <a href={dict.phoneHref}>{dict.phoneValue}</a>
          </li>
          <li>
            <span>{dict.addressLabel}</span>
            <a
              href={dict.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.addressValue}
            </a>
          </li>
        </ul>
      </div>
      <div
        ref={map.ref as React.RefObject<HTMLDivElement>}
        className={map.className}
        style={map.style}
      >
        <iframe
          title={dict.mapLabel}
          src={dict.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          className="map-pin"
          href={dict.mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="map-pin-label">{dict.mapLabel}</span>
          <span className="map-pin-street">{dict.mapStreet}</span>
          <span className="map-pin-city">{dict.mapCity}</span>
        </a>
      </div>
    </section>
  );
};
