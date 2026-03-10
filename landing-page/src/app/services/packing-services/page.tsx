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
  { icon: "tdesign:gift", text: "Full-service packing — we pack your entire home, room by room" },
  { icon: "tdesign:component-checkbox", text: "Partial packing — you pack the easy stuff, we handle fragile items" },
  { icon: "tdesign:shield-error", text: "Fragile-only packing — dishes, glassware, mirrors, TVs, artwork" },
  { icon: "tdesign:folder-open", text: "Unpacking — we unbox, place items, and remove all materials" },
  { icon: "tdesign:layers", text: "All materials supplied — boxes, tape, wrap, and custom crates" },
  { icon: "tdesign:home", text: "Room-by-room organization — kitchen, bedroom, office, garage" },
];

const weMoveItAllCards = [
  { image: "/images/service-residential.jpg", label: "Kitchen\nand dining" },
  { image: "/images/service-business.jpg", label: "Living room\nand office" },
  { image: "/images/move-houses.jpg", label: "Bedrooms\nand closets" },
  { image: "/images/service-packing.jpg", label: "Artwork and\nfragile items" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <ServiceHero
        title="Professional Packing Services in Los Angeles"
        subtitle="Don't want to spend days wrapping dishes and boxing books? We'll do it. Our packing crews handle everything from a single room of fragile items to your entire home — with all materials included."
        backgroundImage="/images/hero-packing.jpg"
      />
      <ShortVideos />
      <WhatsIncluded
        title="Packing Options for Every Need"
        items={whatsIncludedItems}
        image="/images/service-packing.jpg"
      />
      <WeMoveItAll cards={weMoveItAllCards} />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function PackingServicesPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
