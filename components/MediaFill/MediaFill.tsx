type MediaFillProps = {
  src: string;
  kind: "image" | "video";
  className?: string;
  alt?: string;
  priority?: boolean;
};

export const MediaFill = ({
  src,
  kind,
  className = "",
  alt = "",
  priority = false,
}: MediaFillProps): React.JSX.Element => {
  if (kind === "video") {
    return (
      <video
        className={className}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload={priority ? "auto" : "metadata"}
        aria-hidden={alt ? undefined : true}
      />
    );
  }

  return (
    // Gallery and service fills use CSS object-fit across mixed media types
    <img className={className} src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
  );
};
