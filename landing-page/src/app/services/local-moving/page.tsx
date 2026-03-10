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
  { icon: "tdesign:vehicle", text: "Moving truck with fuel" },
  { icon: "tdesign:layers", text: "All blankets, padding, and shrink wrap" },
  { icon: "tdesign:tools", text: "Furniture disassembly and reassembly" },
  { icon: "tdesign:home", text: "Floor and doorframe protection" },
  { icon: "tdesign:time", text: "No travel time charges — the clock starts when we arrive" },
  { icon: "tdesign:money", text: "No stair carry or long-walk surcharges" },
];

const weMoveItAllCards = [
  { image: "/images/move-houses.jpg", label: "Houses\nand condos" },
  { image: "/images/move-apartments.jpg", label: "Apartments\nand townhomes" },
  { image: "/images/service-business.jpg", label: "Offices\nand studios" },
  { image: "/images/service-local.jpg", label: "Same-day and\nnext-day moves" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <ServiceHero
        title="Local Moving Services in Los Angeles"
        subtitle="Moving within LA? We know every neighborhood, every building manager's loading dock rules, and every street parking situation in this city. The One Moving and Storage provides fast, reliable local moving across LA County."
        backgroundImage="/images/service-local.jpg"
      />
      <ShortVideos />
      <WhatsIncluded
        title="What's Included — No Extra Charge"
        items={whatsIncludedItems}
        image="/images/whats-included-local.jpg"
      />
      <WeMoveItAll cards={weMoveItAllCards} />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function LocalMovingPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
