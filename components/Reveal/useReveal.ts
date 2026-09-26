"use client";

import { useEffect, useRef, useState } from "react";

type RevealVariant = "up" | "fade" | "left" | "right" | "scale" | "clip";

type UseRevealOptions = {
  variant?: RevealVariant;
  delay?: number;
  once?: boolean;
  className?: string;
};

export const useReveal = ({
  variant = "up",
  delay = 0,
  once = true,
  className = "",
}: UseRevealOptions = {}): {
  ref: React.RefObject<HTMLElement | null>;
  className: string;
  style: React.CSSProperties;
} => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return {
    ref,
    className: `reveal reveal-${variant}${isVisible ? " is-in" : ""}${className ? ` ${className}` : ""}`,
    style: { "--reveal-delay": `${delay}ms` } as React.CSSProperties,
  };
};
