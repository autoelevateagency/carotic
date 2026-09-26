"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/data/dictionary";

type SiteNavProps = {
  dict: Dictionary["nav"];
};

export const SiteNav = ({ dict }: SiteNavProps): React.JSX.Element => {
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setIsSolid(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = (): void => setIsOpen(false);

  return (
    <nav
      id="nav"
      className={`site-nav${isSolid ? " solid" : ""}`}
      aria-label="Primary"
    >
      <a href="#" className="logo" onClick={closeMenu}>
        {dict.logo}
        <span>.</span>
      </a>
      <ul className={`navlinks${isOpen ? " open" : ""}`}>
        <li>
          <a href="#services" onClick={closeMenu}>
            {dict.services}
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={closeMenu}>
            {dict.gallery}
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            {dict.about}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            {dict.contact}
          </a>
        </li>
        <li>
          <a href="#booking" className="book" onClick={closeMenu}>
            {dict.booking}
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="navburger"
        aria-label={dict.menuAria}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};
