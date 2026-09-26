"use client";

import { useEffect, useRef } from "react";

type PlateMediaProps = {
  src: string;
  kind: "image" | "video";
  alt: string;
};

export const PlateMedia = ({
  src,
  kind,
  alt,
}: PlateMediaProps): React.JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (kind !== "video") return;

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      {
        root: null,
        threshold: 0.45,
      }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [kind, src]);

  if (kind === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="plate-media" src={src} alt={alt} loading="lazy" />
    );
  }

  return (
    <video
      ref={videoRef}
      className="plate-media"
      src={src}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      aria-label={alt}
    />
  );
};
