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
  { icon: "tdesign:swap", text: "Elevator reservations and freight elevator scheduling" },
  { icon: "tdesign:file-safety", text: "Building insurance certificates (COI) when required" },
  { icon: "tdesign:vehicle", text: "Street parking permits for the moving truck" },
  { icon: "tdesign:arrow-right", text: "Narrow hallway and stairwell navigation" },
  { icon: "tdesign:tools", text: "Furniture disassembly to fit through tight doorways" },
  { icon: "tdesign:layers", text: "Floor and wall protection in common areas" },
];

const weMoveItAllCards = [
  { image: "/images/move-apartments.jpg", label: "Studio and\n1-bedroom" },
  { image: "/images/service-residential.jpg", label: "2–3 bedroom\napartments" },
  { image: "/images/service-local.jpg", label: "High-rise\nunits" },
  { image: "/images/move-houses.jpg", label: "Walkup\nbuildings" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <ServiceHero
        title="Apartment Moving Services in Los Angeles"
        subtitle="Apartment moves have their own challenges — narrow hallways, tight elevators, reserved freight times, street parking permits, and buildings that require insurance certificates. We've moved thousands of apartments across LA. We know the drill."
        backgroundImage="/images/move-apartments.jpg"
      />
      <ShortVideos />
      <WhatsIncluded
        title="What We Handle for Apartment Moves"
        items={whatsIncludedItems}
        image="/images/move-apartments.jpg"
      />
      <WeMoveItAll cards={weMoveItAllCards} />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function ApartmentMovingPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
