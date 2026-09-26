import { Grain } from "@/components/Grain/Grain";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { About } from "@/components/sections/About/About";
import { Contact } from "@/components/sections/Contact/Contact";
import { Cta } from "@/components/sections/Cta/Cta";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { Hero } from "@/components/sections/Hero/Hero";
import { Services } from "@/components/sections/Services/Services";
import { Testimonial } from "@/components/sections/Testimonial/Testimonial";
import { getDictionary } from "@/data/dictionary";

export default function Home(): React.JSX.Element {
  const dict = getDictionary("EN");

  return (
    <>
      <Grain />
      <main>
        <Hero dict={dict.hero} nav={dict.nav} />
        <Services dict={dict.services} />
        <Gallery dict={dict.gallery} />
        <Testimonial dict={dict.testimonial} />
        <About dict={dict.about} />
        <Contact dict={dict.contact} />
        <Cta dict={dict.cta} email={dict.contact.emailValue} />
      </main>
      <SiteFooter dict={dict.footer} logo={dict.nav.logo} />
    </>
  );
}
