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
  { icon: "tdesign:time", text: "Available based on crew availability — call to check" },
  { icon: "tdesign:money", text: "No urgency markup or rush fees" },
  { icon: "tdesign:user", text: "Same professional crew, same equipment, same care" },
  { icon: "tdesign:location", text: "Local moves within LA County" },
  { icon: "tdesign:usergroup", text: "2-person or 3-person crews" },
  { icon: "tdesign:call", text: "Call (323) 813-7177 to check availability" },
];

const weMoveItAllCards = [
  { image: "/images/move-apartments.jpg", label: "Apartments\nand studios" },
  { image: "/images/move-houses.jpg", label: "Houses\nand condos" },
  { image: "/images/service-business.jpg", label: "Small\noffices" },
  { image: "/images/service-local.jpg", label: "Storage unit\nmoves" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <ServiceHero
        title="Same-Day Moving in Los Angeles"
        subtitle="Sometimes plans change fast. Lease falls through. Closing moves up. Roommate situation goes sideways. Whatever the reason, if you need to move today, call us. If we have a crew available, we'll be there."
        backgroundImage="/images/service-local.jpg"
      />
      <ShortVideos />
      <WhatsIncluded
        title="Same-Day Moving Details"
        items={whatsIncludedItems}
        image="/images/service-local.jpg"
      />
      <WeMoveItAll cards={weMoveItAllCards} />
      <Reviews />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function SameDayMovingPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
