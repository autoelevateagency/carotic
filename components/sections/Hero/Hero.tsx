"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/data/dictionary";
import { SITE_ASSETS } from "@/data/assets";
import { MediaFill } from "@/components/MediaFill/MediaFill";
import "./hero.css";

type HeroProps = {
  dict: Dictionary["hero"];
};

export const Hero = ({ dict }: HeroProps): React.JSX.Element => {
  const stageRef = useRef<HTMLElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onScroll = (): void => {
      const stage = stageRef.current;
      if (!stage) return;
      const max = Math.max(stage.offsetHeight * 0.7, 1);
      setScrollProgress(Math.min(Math.max(window.scrollY / max, 0), 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={stageRef}
      className={`carotic-mark${isReady ? " is-ready" : ""}`}
      style={{ "--mark-scroll": String(scrollProgress) } as React.CSSProperties}
      aria-label={dict.ariaLabel}
    >
      <div className="mark-canvas" aria-hidden="true">
        <div className="mark-media">
          <MediaFill
            src={SITE_ASSETS.hero}
            kind="video"
            className="mark-media-el"
            priority
          />
        </div>

        <div className="mark-veil" />

        <div className="mark-reveal">
          <MediaFill
            src={SITE_ASSETS.hero}
            kind="video"
            className="mark-reveal-el"
            priority
          />
        </div>

        <svg
          className="mark-paint"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <filter id="paintBleed" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="2"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="3.5"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <g filter="url(#paintBleed)">
            <path
              className="paint-stroke paint-stroke-1"
              fill="#E21D25"
              d="M78 210c42-68 126-94 208-78 94 18 168 74 262 86 78 10 152-18 228-8 86 12 154 64 238 72 64 6 128-14 186 18 38 22 58 64 52 108-8 58-62 92-116 108-92 28-186-6-278 8-74 12-138 52-214 58-98 8-188-36-282-28-72 6-138 42-206 28-54-12-92-58-88-112 4-48 38-86 72-120 22-22 42-48 38-140z"
            />
            <path
              className="paint-stroke paint-stroke-2"
              fill="#8F1118"
              d="M420 520c86-42 186-28 268 8 64 28 118 78 188 86 78 10 152-28 228-12 58 12 108 52 164 48 48-4 86-42 92-90 8-62-38-112-88-142-72-44-162-36-242-64-66-24-118-74-186-88-94-20-192 12-282 4-68-6-132-36-198-18-48 14-78 62-72 112 8 68 72 98 132 112 52 12 102 8 156 44 28 18 28 56 40 0z"
            />
            <path
              className="paint-stroke paint-stroke-3"
              fill="#E21D25"
              d="M980 140c48-36 118-28 168-2 42 22 72 64 118 72 56 10 112-18 164 8 36 18 52 58 42 96-12 48-62 72-108 82-78 16-154-14-232-6-52 6-98 34-150 28-44-6-74-44-70-88 4-42 34-72 68-90z"
            />
            <path
              className="paint-stroke paint-stroke-4"
              fill="#E21D25"
              d="M180 680c62-28 134-12 192 18 48 24 86 68 142 72 62 4 118-34 178-22 46 10 82 46 126 52 38 6 74-14 98-42 28-34 24-86-8-114-42-36-106-28-158-48-58-22-104-70-166-78-86-12-168 34-252 28-54-4-104-28-152-12-36 12-56 52-42 88 16 42 64 58 108 58h34z"
            />
            <path
              className="paint-stroke paint-stroke-5"
              fill="#8F1118"
              d="M720 300c28-54 98-72 152-48 42 18 68 62 112 72 48 12 98-8 142 18 28 16 40 52 28 82-14 36-54 54-92 58-62 8-118-18-178-8-42 6-78 32-120 24-36-6-58-40-52-76 4-28 22-52 8-122z"
            />
          </g>
        </svg>

        <div className="mark-grain" />
      </div>

      <div className="mark-composition">
        <aside className="mark-meta mark-meta-left" aria-hidden="true">
          <p>{dict.metaEst}</p>
          <p>{dict.metaLocation}</p>
          <p>{dict.metaCategory}</p>
        </aside>

        <div className="mark-wordmark" aria-hidden="true">
          <span className="mark-wordmark-paint">{dict.wordmark}</span>
        </div>

        <p className="mark-culture">{dict.cultureLine}</p>

        <h1 className="mark-statement">
          <span className="mark-line">{dict.statement1}</span>
          <span className="mark-line mark-line-accent">{dict.statement2}</span>
          <span className="mark-line">{dict.statement3}</span>
        </h1>

        <aside className="mark-meta mark-meta-right" aria-hidden="true">
          <p>{dict.metaSide1}</p>
          <p>{dict.metaSide2}</p>
        </aside>

        <a href="#services" className="mark-scroll">
          <span className="mark-scroll-line" aria-hidden="true" />
          <span>{dict.scroll}</span>
        </a>
      </div>
    </header>
  );
};
