import type { Dictionary } from "@/data/dictionary";
import { SITE_ASSETS } from "@/data/assets";
import { MediaFill } from "@/components/MediaFill/MediaFill";

type AboutProps = {
  dict: Dictionary["about"];
};

export const About = ({ dict }: AboutProps): React.JSX.Element => {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div>
          <div className="about-stat">{dict.stat}</div>
          <h2 className="about-head">
            {dict.headBefore}
            <em>{dict.headAccent}</em>
            {dict.headAfter}
          </h2>
          <p className="about-copy">{dict.copy}</p>
        </div>
        <div className="about-panel" data-label={dict.panelLabel}>
          <MediaFill
            src={SITE_ASSETS.about}
            kind="image"
            className="about-panel-media"
            alt={dict.panelLabel}
          />
        </div>
      </div>
    </section>
  );
};
