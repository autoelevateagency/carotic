import type { Dictionary } from "@/data/dictionary";

type CtaProps = {
  dict: Dictionary["cta"];
  email: string;
};

export const Cta = ({ dict, email }: CtaProps): React.JSX.Element => {
  return (
    <section className="cta" id="booking">
      <span className="eyebrow">{dict.eyebrow}</span>
      <h2 className="cta-head">
        {dict.line1}
        <br />
        {dict.line2}
        <br />
        <span className="r">{dict.line3}</span>
      </h2>
      <p className="cta-sub">{dict.sub}</p>
      <a href={`mailto:${email}`} className="cta-btn">
        {dict.button}
      </a>
    </section>
  );
};
