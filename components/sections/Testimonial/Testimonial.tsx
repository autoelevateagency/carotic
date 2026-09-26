import type { Dictionary } from "@/data/dictionary";

type TestimonialProps = {
  dict: Dictionary["testimonial"];
};

export const Testimonial = ({
  dict,
}: TestimonialProps): React.JSX.Element => {
  return (
    <section className="testi">
      <span className="eyebrow">{dict.eyebrow}</span>
      <blockquote>&ldquo;{dict.quote}&rdquo;</blockquote>
      <cite>
        <b>{dict.name}</b> — {dict.role}
      </cite>
    </section>
  );
};
