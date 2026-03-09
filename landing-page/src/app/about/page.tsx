"use client";

import AboutHero from "@/components/AboutHero";
import PhotoBanner from "@/components/PhotoBanner";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import OurValues from "@/components/OurValues";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import MobileQuoteModal from "@/components/MobileQuoteModal";
import { QuoteModalProvider, useQuoteModal } from "@/lib/quote-modal-context";

const differentiators = [
  {
    icon: "/images/icon-inhouse.svg",
    title: "In-House Crews",
    description:
      "All movers are full-time, trained, and background-checked team members. We don\u2019t use subcontractors, ensuring consistent care on every job.",
  },
  {
    icon: "/images/icon-pricing.svg",
    title: "Transparent Pricing",
    description:
      "The quoted price is what you pay. We list everything included upfront \u2013 no surprises. We even include extras like stairs, long walks, furniture assembly, and shrink wrap.",
  },
  {
    icon: "/images/icon-licensed.svg",
    title: "Licensed & Fully Insured",
    description:
      "We are fully licensed by the California Public Utility Commission and carry liability coverage and workers compensation on every job.",
  },
];

const values = [
  {
    icon: "tdesign:time",
    title: "Reliability",
    description:
      "We show up when we say we will. If we say Tuesday at 9am, we\u2019re there at 8:55.",
  },
  {
    icon: "tdesign:heart",
    title: "Care",
    description:
      "Each item is wrapped and protected. We treat your grandmother\u2019s china like our own.",
  },
  {
    icon: "tdesign:browse",
    title: "Transparency",
    description:
      "You\u2019ll never hear \u201Coh, we forgot to mention that fee.\u201D Everything is upfront, every time.",
  },
  {
    icon: "tdesign:verified",
    title: "Accountability",
    description:
      "One company, one team, one point of contact. If something goes wrong, we own it and fix it.",
  },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <AboutHero
        tag="About"
        title="Moving made simple. No stress, no surprises."
        subtitle="We built the moving company we always wished existed – honest pricing, reliable crew, zero hidden fees."
      />
      <PhotoBanner src="/images/about-banner.png" />
      <WhatMakesUsDifferent items={differentiators} />
      <OurValues items={values} image="/images/about-values.png" />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function AboutPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
