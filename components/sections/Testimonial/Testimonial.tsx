"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import type { Dictionary } from "@/data/dictionary";
import { Reveal } from "@/components/Reveal/Reveal";

type TestimonialProps = {
  dict: Dictionary["testimonial"];
};

const AUTO_MS = 7000;

export const Testimonial = ({
  dict,
}: TestimonialProps): React.JSX.Element => {
  const reviews = dict.reviews;
  const total = reviews.length;
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useEffectEvent((index: number): void => {
    const next = ((index % total) + total) % total;
    setActive(next);
  });

  const goNext = useEffectEvent((): void => {
    goTo(active + 1);
  });

  const goPrev = useEffectEvent((): void => {
    goTo(active - 1);
  });

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const id = window.setInterval(() => {
      goNext();
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [isPaused, total, active]);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>): void => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < 48) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  const activeReview = reviews[active];
  const indexLabel = `${String(active + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <section
      className="testi"
      aria-roledescription="carousel"
      aria-label={dict.eyebrow}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <Reveal variant="fade" delay={40}>
        <div className="testi-head">
          <span className="eyebrow">{dict.eyebrow}</span>
          <span className="testi-index" aria-hidden="true">
            {indexLabel}
          </span>
        </div>
      </Reveal>

      <Reveal variant="up" delay={140}>
        <div
          className="testi-stage"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {reviews.map((review, index) => {
            const isActive = index === active;
            return (
              <figure
                key={`${review.name}-${index}`}
                className={`testi-slide${isActive ? " is-active" : ""}`}
                aria-hidden={!isActive}
                {...(isActive
                  ? { "aria-live": "polite" as const }
                  : { inert: true })}
              >
                <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
                <figcaption className="testi-cite">
                  <span className="testi-name">{review.name}</span>
                  <span className="testi-role">{review.role}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Reveal>

      <Reveal variant="fade" delay={260}>
        <div className="testi-controls">
          <button
            type="button"
            className="testi-arrow"
            aria-label={dict.prevAria}
            onClick={goPrev}
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="testi-progress" role="tablist" aria-label={dict.eyebrow}>
            {reviews.map((review, index) => (
              <button
                key={`progress-${review.name}-${index}`}
                type="button"
                role="tab"
                className={`testi-progress-btn${index === active ? " is-active" : ""}`}
                aria-label={`${index + 1} / ${total}`}
                aria-selected={index === active}
                onClick={() => goTo(index)}
              >
                <span className="testi-progress-track">
                  <span
                    className="testi-progress-fill"
                    style={
                      index === active
                        ? ({
                            animationDuration: `${AUTO_MS}ms`,
                            animationPlayState: isPaused ? "paused" : "running",
                          } as React.CSSProperties)
                        : undefined
                    }
                  />
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="testi-arrow"
            aria-label={dict.nextAria}
            onClick={goNext}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </Reveal>

      <p className="visually-hidden">
        {activeReview
          ? `${activeReview.name}. ${activeReview.quote}`
          : null}
      </p>
    </section>
  );
};
