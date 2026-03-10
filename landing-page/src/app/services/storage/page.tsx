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
  { icon: "tdesign:video-camera", text: "24/7 surveillance — cameras cover every angle" },
  { icon: "tdesign:lock-on", text: "Gated access with individual unit locks" },
  { icon: "tdesign:calendar", text: "Month-to-month — no long-term contracts required" },
  { icon: "tdesign:discount", text: "Bundle with a moving service and save on both" },
  { icon: "tdesign:undertake-delivery", text: "Pick-up and delivery available" },
  { icon: "tdesign:cloud-download", text: "Climate-friendly units for sensitive items" },
];

const weMoveItAllCards = [
  { image: "/images/move-houses.jpg", label: "Household furniture\nand appliances" },
  { image: "/images/service-business.jpg", label: "Business inventory\nand equipment" },
  { image: "/images/move-estates.jpg", label: "Seasonal items\nand sporting gear" },
  { image: "/images/service-long-distance.jpg", label: "Vehicles and\nspecialty items" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <ServiceHero
        title="Secure Storage Solutions in Los Angeles"
        subtitle="Between moves, during renovations, or just need the space — our storage facility keeps your belongings safe and accessible. Month-to-month, no contracts, 24/7 surveillance."
        backgroundImage="/images/hero-storage.jpg"
      />
      <ShortVideos />
      <WhatsIncluded
        title="Storage Facility Features"
        items={whatsIncludedItems}
        image="/images/move-estates.jpg"
      />
      <WeMoveItAll cards={weMoveItAllCards} />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function StoragePage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
