import type { Dictionary } from "@/data/dictionary";
import { SITE_ASSETS } from "@/data/assets";
import { MediaFill } from "@/components/MediaFill/MediaFill";
import { Reveal } from "@/components/Reveal/Reveal";

type AboutProps = {
  dict: Dictionary["about"];
};

export const About = ({ dict }: AboutProps): React.JSX.Element => {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div>
          <Reveal variant="fade" delay={40}>
            <div className="about-stat">{dict.stat}</div>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <h2 className="about-head">
              {dict.headBefore}
              <em>{dict.headAccent}</em>
              {dict.headAfter}
            </h2>
          </Reveal>
          <Reveal variant="up" delay={260}>
            <p className="about-copy">{dict.copy}</p>
          </Reveal>
        </div>
        <Reveal variant="scale" delay={200}>
          <div className="about-panel" data-label={dict.panelLabel}>
            <MediaFill
              src={SITE_ASSETS.about}
              kind="image"
              className="about-panel-media"
              alt={dict.panelLabel}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
