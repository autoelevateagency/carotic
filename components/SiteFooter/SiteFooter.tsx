import type { Dictionary } from "@/data/dictionary";
import { Reveal } from "@/components/Reveal/Reveal";

type SiteFooterProps = {
  dict: Dictionary["footer"];
  logo: string;
};

export const SiteFooter = ({
  dict,
  logo,
}: SiteFooterProps): React.JSX.Element => {
  return (
    <footer className="site-footer">
      <Reveal variant="up" delay={40}>
        <div className="foot-top">
          <a href="#" className="logo">
            {logo}
            <span>.</span>
          </a>
          <ul className="foot-nav">
            <li>
              <a href="#services">{dict.services}</a>
            </li>
            <li>
              <a href="#gallery">{dict.gallery}</a>
            </li>
            <li>
              <a href="#about">{dict.about}</a>
            </li>
            <li>
              <a href="#contact">{dict.contact}</a>
            </li>
            <li>
              <a
                href={dict.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.instagram}
              </a>
            </li>
            <li>
              <a
                href={dict.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.tiktok}
              </a>
            </li>
            <li>
              <a
                href={dict.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.facebook}
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
      <Reveal variant="scale" delay={160}>
        <div className="foot-big">{logo}</div>
      </Reveal>
      <Reveal variant="fade" delay={280}>
        <div className="foot-bottom">
          <span>{dict.copyright}</span>
          <span>{dict.location}</span>
        </div>
      </Reveal>
    </footer>
  );
};
