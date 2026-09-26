"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/data/dictionary";
import "./site-nav.css";

type SiteNavProps = {
  dict: Dictionary["nav"];
};

export const SiteNav = ({ dict }: SiteNavProps): React.JSX.Element => {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeHref, setActiveHref] = useState("#");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = (): void => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const sections = ["services", "gallery", "about", "contact", "booking"];
      let current = "#";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (currentY >= el.offsetTop - 120) {
          current = `#${id}`;
        }
      }

      setActiveHref(current === "#booking" ? "#contact" : current);

      if (isOpen || currentY < 24) {
        setIsHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      if (Math.abs(delta) < 6) return;

      setIsHidden(delta > 0);
      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  const closeMenu = (): void => setIsOpen(false);

  const navItems = [
    { href: "#", label: dict.home },
    { href: "#services", label: dict.services },
    { href: "#gallery", label: dict.gallery },
    { href: "#about", label: dict.about },
  ] as const;

  const handleNavClick = (href: string): void => {
    setActiveHref(href);
    closeMenu();
  };

  return (
    <div
      className={`site-nav-shell${isReady ? " is-ready" : ""}${isHidden ? " is-hidden" : ""}`}
    >
      <nav id="nav" className="site-nav" aria-label="Primary">
        <a href="#" className="site-nav-logo" onClick={() => handleNavClick("#")}>
          {dict.logo}
          <span>.</span>
        </a>

        <div className={`site-nav-center${isOpen ? " is-open" : ""}`}>
          <ul className="site-nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeHref === item.href ? "is-active" : undefined}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="site-nav-cta"
            onClick={() => handleNavClick("#contact")}
          >
            <span>{dict.contact}</span>
            <span className="site-nav-cta-icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                <path
                  d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <button
          type="button"
          className={`site-nav-toggle${isOpen ? " is-open" : ""}`}
          aria-label={dict.menuAria}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </nav>
    </div>
  );
};
