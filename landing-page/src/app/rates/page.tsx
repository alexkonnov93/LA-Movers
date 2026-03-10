"use client";

import PageHero from "@/components/PageHero";
import RateTable from "@/components/RateTable";
import Footer from "@/components/Footer";
import MobileQuoteModal from "@/components/MobileQuoteModal";
import { QuoteModalProvider, useQuoteModal } from "@/lib/quote-modal-context";

const rateRows = [
  { label: "2 Movers + Truck", value: "$109/hr cash or $119/hr credit" },
  { label: "3 Movers + Truck", value: "$149/hr cash or $159/hr credit" },
  { label: "Additional Mover", value: "$40/hr" },
  { label: "Additional Truck", value: "$70/hr" },
  { label: "Minimum Hours", value: "3 Hours" },
  { label: "Payment Methods", value: "Cash / Credit Card / Zelle" },
  { label: "Shrink Wrap & Tape", value: "Free" },
  { label: "Wardrobe Boxes", value: "Free to Use" },
  { label: "Veteran & Senior Discount", value: "5%" },
  { label: "Return Customers", value: "5%" },
  { label: "Double Driving Charge", value: "Yes" },
];

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      <PageHero
        tag="Rates"
        title={<>Transparent<br className="sm:hidden" /> Moving Rates</>}
        subtitle="We believe you should know exactly what you're paying for before moving day. Here's how our pricing works – no asterisks, no fine print."
        backgroundImage="/images/hero-rates.jpg"
      />
      <RateTable rows={rateRows} />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function RatesPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
