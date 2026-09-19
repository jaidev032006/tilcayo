import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { FeatureStatement } from "@/components/sections/feature-statement";
import { Solutions } from "@/components/sections/solutions";
import { Technology } from "@/components/sections/technology";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { WhyTilcayo } from "@/components/sections/why-tilcayo";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <FeatureStatement />
      <Solutions />
      <Technology />
      <Projects />
      <Process />
      <WhyTilcayo />
      <Statistics />
      <Testimonials />
      <FAQ />
      <ContactCta />
    </>
  );
}
