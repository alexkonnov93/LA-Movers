"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuoteModal } from "@/lib/quote-modal-context";

interface NavbarProps {
  variant?: "dark" | "light";
  showQuoteButton?: boolean;
}

export default function Navbar({ variant = "dark", showQuoteButton = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setOpen: setQuoteOpen } = useQuoteModal();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full px-4 pt-[48px] sm:px-6 sm:pt-[32px] lg:px-[120px]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          {/* Mobile: full-width glass bar */}
          <div className="flex flex-1 items-center rounded-[16px] bg-[var(--dark-60)] py-[12px] pl-[20px] pr-[12px] backdrop-blur-[12px] md:hidden">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.svg"
                alt="The One Moving & Storage"
                width={92}
                height={40}
                priority
              />
            </Link>
            <div className="flex-1" />
            <div className="flex items-center gap-[16px]">
              <a
                href="tel:3238137177"
                className="flex size-[44px] items-center justify-center rounded-[12px] border border-[var(--white-50)]"
                aria-label="Call us"
              >
                <Image
                  src="/images/phone-icon.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative flex size-[40px] items-center justify-center p-[6px] text-white"
                aria-label="Toggle menu"
              >
                <span
                  className={`absolute h-[2px] w-[28px] rounded-[10px] bg-white transition-all duration-300 ease-in-out ${
                    mobileOpen
                      ? "translate-y-0 rotate-45"
                      : "-translate-y-[3.5px] rotate-0"
                  }`}
                />
                <span
                  className={`absolute h-[2px] w-[28px] rounded-[10px] bg-white transition-all duration-300 ease-in-out ${
                    mobileOpen
                      ? "translate-y-0 -rotate-45"
                      : "translate-y-[3.5px] rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Desktop: left glass pill (logo + nav) */}
          <div className="hidden items-center gap-[42px] rounded-[16px] bg-[var(--dark-60)] py-[8px] pl-[20px] pr-[12px] backdrop-blur-[12px] md:flex">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.svg"
                alt="The One Moving & Storage"
                width={92}
                height={40}
                priority
              />
            </Link>
            <div className="flex items-center gap-[4px]">
              {[
                { href: "/services/residential-moving", label: "Services" },
                { href: "/rates", label: "Rates" },
                { href: "/about", label: "Company" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[10px] px-[16px] py-[8px] text-[16px] font-medium leading-[1.4] text-white transition-colors hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop: right buttons */}
          <div className="hidden items-center gap-[12px] md:flex">
            {showQuoteButton && (
              <Link
                href="/contact"
                className={`rounded-[16px] px-[24px] py-[16px] text-center text-[16px] font-semibold leading-[1.4] transition-colors ${
                  variant === "light"
                    ? "bg-orange text-white hover:bg-[#e5621f]"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                Get a Free Quote
              </Link>
            )}
            <a
              href="tel:3238137177"
              className={`flex size-[54px] items-center justify-center rounded-[16px] border backdrop-blur-[12px] transition-colors ${
                variant === "light"
                  ? "border-[#dcdcdc] hover:bg-black/5"
                  : "border-[var(--white-50)] hover:bg-white/10"
              }`}
              aria-label="Call us"
            >
              <Image
                src={variant === "light" ? "/images/phone-icon-dark.svg" : "/images/phone-icon.svg"}
                alt="Phone"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[rgba(0,0,0,0.9)] backdrop-blur-[12px] transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Header — glass pill matching default navbar */}
        <div className="w-full px-4 pt-[48px]">
          <div className="flex items-center rounded-[16px] bg-[var(--dark-60)] py-[12px] pl-[20px] pr-[12px] backdrop-blur-[12px]">
            <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo.svg"
                alt="The One Moving & Storage"
                width={92}
                height={40}
                priority
              />
            </Link>
            <div className="flex-1" />
            <div className="flex items-center gap-[16px]">
              <a
                href="tel:3238137177"
                className="flex size-[44px] items-center justify-center rounded-[12px] border border-[var(--white-50)]"
                aria-label="Call us"
              >
                <Image
                  src="/images/phone-icon.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="relative flex size-[40px] items-center justify-center text-white"
                aria-label="Close menu"
              >
                <span className="absolute h-[2px] w-[28px] translate-y-0 rotate-45 rounded-[10px] bg-white" />
                <span className="absolute h-[2px] w-[28px] translate-y-0 -rotate-45 rounded-[10px] bg-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="mt-[16px] flex flex-col px-[24px]">
          {[
            { href: "/services/residential-moving", label: "Services" },
            { href: "/rates", label: "Rates" },
            { href: "/about", label: "Company" },
            { href: "/contact", label: "Contact" },
          ].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between border-b border-[var(--white-10)] py-[20px] text-[20px] font-medium leading-[1.4] text-white transition-all duration-300 ease-out ${
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-[10px] opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? `${(i + 1) * 50}ms` : "0ms" }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Get a Quote Button */}
        <div
          className={`p-[20px] transition-all duration-300 ease-out ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-[20px] opacity-0"
          }`}
          style={{ transitionDelay: mobileOpen ? "250ms" : "0ms" }}
        >
          <Link
            href="/contact"
            className="flex h-[56px] w-full items-center justify-center rounded-[12px] bg-orange text-[16px] font-semibold leading-[1.4] text-white md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
