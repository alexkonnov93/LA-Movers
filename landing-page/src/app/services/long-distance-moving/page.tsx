"use client";

import ServiceHero from "@/components/ServiceHero";
import ShortVideos from "@/components/ShortVideos";
import WhatsIncluded from "@/components/WhatsIncluded";
import WeMoveItAll from "@/components/WeMoveitAll";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import MobileQuoteModal from "@/components/MobileQuoteModal";
import { QuoteModalProvider, useQuoteModal } from "@/lib/quote-modal-context";

const whatsIncludedItems = [
  { icon: "tdesign:vehicle", text: "Dedicated truck — your belongings travel alone" },
  { icon: "tdesign:gift", text: "Full packing and crating services" },
  { icon: "tdesign:location", text: "GPS tracking with delivery updates" },
  { icon: "tdesign:calendar", text: "Guaranteed pickup and delivery windows" },
  { icon: "tdesign:money", text: "Binding flat-rate quotes — your price is locked" },
  { icon: "tdesign:object-storage", text: "Storage-in-transit if your new home isn't ready" },
];

const weMoveItAllCards = [
  { image: "/images/move-houses.jpg", label: "Houses\nand estates" },
  { image: "/images/move-apartments.jpg", label: "Apartments\nand condos" },
  { image: "/images/service-business.jpg", label: "Business\nrelocations" },
  { image: "/images/service-packing.jpg", label: "Specialty and\nfragile items" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <ServiceHero
        title="Long Distance Moving From Los Angeles"
        subtitle="Leaving LA? Whether you're heading to San Francisco, Phoenix, Denver, or New York, we manage every mile. Your belongings travel on a dedicated truck — no sharing space, no reloading at a warehouse, no mystery about where your stuff is."
        backgroundImage="/images/service-long-distance.jpg"
      />
      <ShortVideos />
      <WhatsIncluded
        title="What's Included in Every Long Distance Move"
        items={whatsIncludedItems}
        image="/images/service-long-distance.jpg"
      />
      <WeMoveItAll cards={weMoveItAllCards} />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function LongDistanceMovingPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
