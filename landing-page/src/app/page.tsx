import Hero from "@/components/Hero";
import ShortVideos from "@/components/ShortVideos";
import WhyUs from "@/components/WhyUs";
import WhatWeDo from "@/components/WhatWeDo";
import Reviews from "@/components/Reviews";
import LaLocations from "@/components/LaLocations";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ShortVideos />
      <WhyUs />
      <WhatWeDo />
      <Reviews />
      <LaLocations />
      <Faq />
      <Footer />
    </>
  );
}
