"use client";

import { useRef } from "react";

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

  if (kind === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="plate-media" src={src} alt={alt} loading="lazy" />
    );
  }

  const play = (): void => {
    void videoRef.current?.play();
  };

  const pause = (): void => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <video
      ref={videoRef}
      className="plate-media"
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    />
  );
};
