import type { Dictionary } from "@/data/dictionary";
import { SITE_ASSETS } from "@/data/assets";
import { MediaFill } from "@/components/MediaFill/MediaFill";
import { Reveal } from "@/components/Reveal/Reveal";

type CtaProps = {
  dict: Dictionary["cta"];
  phoneHref: string;
};

export const Cta = ({ dict, phoneHref }: CtaProps): React.JSX.Element => {
  return (
    <section className="cta" id="booking">
      <div className="cta-media" aria-hidden="true">
        <MediaFill
          src={SITE_ASSETS.cta}
          kind="video"
          className="cta-media-el"
        />
        <div className="cta-media-veil" />
      </div>
      <div className="cta-content">
        <Reveal variant="fade" delay={60}>
          <span className="eyebrow">{dict.eyebrow}</span>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <h2 className="cta-head">
            {dict.line1}
            <br />
            {dict.line2}
            <br />
            <span className="r">{dict.line3}</span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={240}>
          <p className="cta-sub">{dict.sub}</p>
        </Reveal>
        <Reveal variant="up" delay={340}>
          <a href={phoneHref} className="cta-btn">
            {dict.button}
          </a>
        </Reveal>
      </div>
    </section>
  );
};
