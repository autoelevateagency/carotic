import type { Dictionary } from "@/data/dictionary";
import { SITE_ASSETS } from "@/data/assets";
import { PlateMedia } from "@/components/sections/Gallery/PlateMedia";

type GalleryProps = {
  dict: Dictionary["gallery"];
};

export const Gallery = ({ dict }: GalleryProps): React.JSX.Element => {
  return (
    <section className="archive" id="gallery" aria-label={dict.titleLine2}>
      <div className="archive-head">
        <div className="archive-title">
          {dict.titleLine1}
          <br />
          {dict.titleLine2}
        </div>
        <div className="archive-hint">
          {dict.hint.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>
      <div className="archive-track">
        {SITE_ASSETS.gallery.map((plate) => (
          <article className="plate" key={plate.id}>
            <PlateMedia src={plate.src} kind={plate.kind} alt={plate.title} />
            <span className="plate-idx">{plate.id}</span>
            <span className="plate-tag">
              <b>{plate.title}</b>
              {plate.meta}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};
