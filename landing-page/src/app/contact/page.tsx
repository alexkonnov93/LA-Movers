"use client";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileQuoteModal from "@/components/MobileQuoteModal";
import { QuoteModalProvider, useQuoteModal } from "@/lib/quote-modal-context";

function PageContent() {
  const { open, setOpen } = useQuoteModal();

  return (
    <>
      {/* Navbar + spacer for fixed nav */}
      <div className="pt-[96px]">
        <Navbar variant="light" showQuoteButton={false} />
      </div>

      <ContactSection />
      <Footer />
      <MobileQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function ContactPage() {
  return (
    <QuoteModalProvider>
      <PageContent />
    </QuoteModalProvider>
  );
}
