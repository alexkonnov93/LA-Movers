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
  { icon: "tdesign:check-circle", text: "Free on-site or virtual estimate" },
  { icon: "tdesign:time", text: "Individual wrapping of all furniture and fragile items" },
  { icon: "tdesign:user", text: "Furniture disassembly and reassembly" },
  { icon: "tdesign:control-platform", text: "Careful loading with floor and doorframe protection" },
  { icon: "tdesign:task-checked", text: "Placement in your new home exactly where you want it" },
  { icon: "tdesign:gesture-press", text: "Post-move cleanup" },
];

const weMoveItAllCards = [
  { image: "/images/move-houses.jpg", label: "Houses\nand condos" },
  { image: "/images/move-apartments.jpg", label: "Apartments\nand townhomes" },
  { image: "/images/move-seniors.jpg", label: "Senior moves\nand downsizing" },
  { image: "/images/move-estates.jpg", label: "Estates and\nlarge properties" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <ServiceHero
        title="Professional Residential Moving in Los Angeles"
        subtitle="Moving to a new home is a big deal. We make it simple. Our residential team handles everything from wrapping your dishes to reassembling your bed frame at your new place — and we don't leave until you're satisfied."
        backgroundImage="/images/hero-residential.jpg"
      />
      <ShortVideos />
      <WhatsIncluded
        title="What's Included in Every Residential Move"
        items={whatsIncludedItems}
        image="/images/whats-included-residential.jpg"
      />
      <WeMoveItAll cards={weMoveItAllCards} />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function ResidentialMovingPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
