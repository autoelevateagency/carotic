import type { Dictionary } from "@/data/dictionary";

type ContactProps = {
  dict: Dictionary["contact"];
};

export const Contact = ({ dict }: ContactProps): React.JSX.Element => {
  return (
    <section className="contact-wrap" id="contact">
      <div className="contact-col">
        <h2 className="contact-title">{dict.title}</h2>
        <ul className="contact-list">
          <li>
            <span>{dict.hoursLabel}</span>
            <span>{dict.hoursValue}</span>
          </li>
          <li>
            <span>{dict.phoneLabel}</span>
            <a href={dict.phoneHref}>{dict.phoneValue}</a>
          </li>
          <li>
            <span>{dict.emailLabel}</span>
            <a href={`mailto:${dict.emailValue}`}>{dict.emailValue}</a>
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
      <div className="map-box">
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
