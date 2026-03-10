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
  { icon: "tdesign:desktop", text: "Office furniture, cubicles, and workstation moves" },
  { icon: "tdesign:server", text: "IT equipment handling with disconnect/reconnect coordination" },
  { icon: "tdesign:shop", text: "Retail and showroom relocation" },
  { icon: "tdesign:building-1", text: "Warehouse and industrial moves" },
  { icon: "tdesign:time", text: "After-hours and weekend scheduling — no extra charge" },
  { icon: "tdesign:barcode", text: "Asset tagging and inventory tracking" },
];

const weMoveItAllCards = [
  { image: "/images/service-business.jpg", label: "Offices and\nworkstations" },
  { image: "/images/service-packing.jpg", label: "Retail and\nshowrooms" },
  { image: "/images/service-long-distance.jpg", label: "Warehouses\nand industrial" },
  { image: "/images/service-residential.jpg", label: "Medical and\nprofessional offices" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <ServiceHero
        title="Commercial Business Relocation in Los Angeles"
        subtitle="Relocating a business means lost revenue for every hour you're offline. We plan your move to minimize that. One dedicated coordinator handles your entire relocation — from the first walkthrough to the last box unpacked."
        backgroundImage="/images/service-business.jpg"
      />
      <ShortVideos />
      <WhatsIncluded
        title="Our Business Moving Services Include"
        items={whatsIncludedItems}
        image="/images/service-business.jpg"
      />
      <WeMoveItAll cards={weMoveItAllCards} />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function BusinessRelocationPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
