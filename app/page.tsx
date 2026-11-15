import Hero from "@/components/Hero";
import Crisis from "@/components/Crisis";
import Pillars from "@/components/Pillars";
import About from "@/components/About";
import People, { Partners } from "@/components/Supporters";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Nav, Intro, Motion } from "@/components/Chrome";
import { copy } from "@/content/copy";
import { media } from "@/lib/media";

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <main id="top">
        <Hero media={media("hero-archive")} />
        <Crisis />
        <Pillars media={copy.summit.pillars.map((p) => media(p.media))} />
        <People />
        <Partners />
        <About />
        <CTA media={media("cta")} />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
