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
  { icon: "tdesign:gift", text: "Full packing and unpacking — we handle everything" },
  { icon: "tdesign:filter", text: "Downsizing assistance — help deciding what to bring, donate, or store" },
  { icon: "tdesign:heart", text: "Careful handling of heirlooms, antiques, and fragile items" },
  { icon: "tdesign:home", text: "Furniture placement and setup at the new home" },
  { icon: "tdesign:link", text: "Connection with local donation and estate services" },
  { icon: "tdesign:calendar", text: "Flexible scheduling — no rush" },
];

const weMoveItAllCards = [
  { image: "/images/move-houses.jpg", label: "Houses to\nsmaller homes" },
  { image: "/images/move-apartments.jpg", label: "Apartments\nand condos" },
  { image: "/images/move-seniors.jpg", label: "Assisted living\nfacilities" },
  { image: "/images/move-estates.jpg", label: "Estates and\nfamily homes" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <ServiceHero
        title="Senior Moving Services in Los Angeles"
        subtitle="Moving later in life — whether downsizing, moving to assisted living, or relocating closer to family — requires extra patience, care, and attention. Our crews understand that. We take the time to listen, handle your belongings gently, and make sure everything feels right in your new home."
        backgroundImage="/images/hero-senior.jpg"
      />
      <ShortVideos />
      <WhatsIncluded
        title="What We Offer for Senior Moves"
        items={whatsIncludedItems}
        image="/images/move-seniors.jpg"
      />
      <WeMoveItAll cards={weMoveItAllCards} />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function SeniorMovingPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
