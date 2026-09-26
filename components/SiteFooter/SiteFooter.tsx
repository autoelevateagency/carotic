import type { Dictionary } from "@/data/dictionary";

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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.instagram}
            </a>
          </li>
        </ul>
      </div>
      <div className="foot-big">{logo}</div>
      <div className="foot-bottom">
        <span>{dict.copyright}</span>
        <span>{dict.location}</span>
      </div>
    </footer>
  );
};
