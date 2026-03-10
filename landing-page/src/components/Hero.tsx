"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import AddressInput from "@/components/AddressInput";
import { useQuoteModal } from "@/lib/quote-modal-context";

export default function Hero() {
  const [moveSize, setMoveSize] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const { setOpen: setMobileQuoteOpen } = useQuoteModal();
  const formRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState(0);
  const [heroOffset, setHeroOffset] = useState(0);
  const [ready, setReady] = useState(false);

  // Measure form height via ResizeObserver
  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setFormHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Compute hero offset from placeholder's document-absolute position
  const measure = useCallback(() => {
    const ph = placeholderRef.current;
    if (!ph) return;
    const rect = ph.getBoundingClientRect();
    // Document-absolute bottom = viewport-relative bottom + current scroll
    const absoluteBottom = rect.bottom + window.scrollY;
    // Gap from placeholder bottom to viewport bottom at scroll=0
    const offset = Math.max(0, window.innerHeight - absoluteBottom);
    setHeroOffset(offset);
    setReady(true);
  }, []);

  // Re-measure on mount, resize, and when formHeight changes (placeholder size updates)
  useEffect(() => {
    // Measure after layout settles
    const raf = requestAnimationFrame(() => {
      measure();
      // Second measure for client-side navigation edge cases
      setTimeout(measure, 100);
    });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [measure, formHeight]);

  // Toggle sticky on any scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set correct initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex h-screen flex-col items-center sm:min-h-screen sm:h-auto sm:pb-[60px]">
      {/* Background Image + Gradient Overlay */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Mobile: vertical gradient; Desktop: diagonal gradient */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 34.1%, rgba(0, 0, 0, 0.8) 92%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage:
              "linear-gradient(241.32deg, rgba(191, 191, 191, 0) 16.09%, rgba(0, 0, 0, 0.5) 73.66%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)",
          }}
        />
      </motion.div>

      {/* Navbar */}
      <Navbar />

      {/* Flexible spacer — pushes content toward bottom */}
      <div className="min-h-0 flex-1" />

      {/* Content */}
      <div className="relative flex w-full max-w-[1200px] flex-col items-start px-4 sm:px-6 sm:gap-[48px] lg:px-0">
        {/* Header Block — 800px max on desktop */}
        <div className="flex w-full flex-col gap-[20px] items-start sm:gap-[32px] lg:w-[800px]">
          {/* Google Reviews Badge — on mobile appears first */}
          <motion.a
            href="https://www.google.com/maps/place/The+One+Moving+and+Storage+Inc./@34.1046582,-118.3076993,17z/data=!4m8!3m7!1s0x80c2bf5a5c5ace43:0x44de70d9aa73a6f!8m2!3d34.1046582!4d-118.3076993!9m1!1b1!16s%2Fg%2F11h5q8cjlp?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="flex items-center gap-[8px] self-start rounded-[100px] bg-[var(--dark-60)] py-[8px] pl-[8px] pr-[18px] backdrop-blur-[12px] transition-colors hover:bg-[rgba(35,35,35,0.8)] sm:order-2 sm:gap-[12px] sm:py-[12px] sm:pl-[12px] sm:pr-[24px]"
          >
            <Image
              src="/images/google-g.svg"
              alt="Google"
              width={44}
              height={44}
              className="size-[40px] shrink-0 sm:size-[44px]"
            />
            <div className="flex flex-col gap-[2px] items-start justify-center sm:gap-[4px]">
              <div className="flex items-center gap-[10px]">
                <div className="flex gap-[3.5px] items-center sm:gap-[4px]">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/star.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="size-[14px] sm:size-[16px]"
                    />
                  ))}
                </div>
                <span className="text-[14px] font-semibold leading-[1.4] text-white sm:text-[16px]">
                  5.0
                </span>
              </div>
              <span className="text-[14px] font-medium leading-[1.4] text-medium-grey">
                50 reviews on Google
              </span>
            </div>
          </motion.a>

          {/* Text */}
          <div className="flex w-full flex-col gap-[12px] items-start pb-[20px] text-white sm:order-1 sm:gap-[16px] sm:pb-0">
            <h1 className="font-[family-name:var(--font-graphik)] text-[40px] leading-[1.05] tracking-[-1.2px] sm:text-[56px] sm:tracking-[-1.8px] lg:text-[80px] lg:tracking-[-2.4px]">
              {"Los Angeles Movers You Can Actually Count On".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              className="w-[304px] text-[18px] font-medium leading-[1.4] opacity-90 sm:w-full sm:text-[22px] sm:opacity-100 lg:w-[680px]"
            >
              No hidden fees. On-time arrival guaranteed. Licensed, insured,
              <span className="hidden sm:inline"> and rated 5 stars by hundreds of LA families and businesses.</span>
            </motion.p>
          </div>
        </div>

        {/* Placeholder — reserves space in the hero when form becomes fixed (desktop only) */}
        <div ref={placeholderRef} id="quote" className="hidden sm:block" style={{ minHeight: formHeight }} />
      </div>

      {/* Spacer for fixed mobile form bar */}
      <div className="h-[72px] shrink-0 sm:hidden" />

      {/* Mobile Form — fixed at bottom */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex h-[72px] items-center border-t border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.8)] backdrop-blur-[12px] sm:hidden">
        <div className="flex h-full flex-1 items-center gap-[20px] pl-[16px] pr-[20px]">
          <div className="flex shrink-0 flex-col items-start">
            <span className="font-[family-name:var(--font-graphik)] text-[14px] leading-[1.3] tracking-[-0.42px] text-white">
              From
            </span>
            <span className="text-[16px] font-medium leading-[1.4] text-white/50">
              Current
            </span>
          </div>
          {/* Road with truck */}
          <div className="relative flex h-[39px] flex-1 flex-col items-center justify-end pb-[12px]">
            <svg
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              className="absolute left-1/2 top-0 -translate-x-1/2 text-white"
            >
              <path
                d="M1 12.5V7.5C1 6.4 1.9 5.5 3 5.5H14.5V15.5H5.5M14.5 15.5H17.5M14.5 15.5V5.5L18.5 5.5L22 9.5V15.5H20.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="4" cy="16.5" r="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="19" cy="16.5" r="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="h-[2px] w-full rounded-[10px] bg-[#777778]" />
          </div>
          <div className="flex shrink-0 flex-col items-start">
            <span className="font-[family-name:var(--font-graphik)] text-[14px] leading-[1.3] tracking-[-0.42px] text-white">
              To
            </span>
            <span className="text-[16px] font-medium leading-[1.4] text-white/50">
              Destination
            </span>
          </div>
        </div>
        <div className="flex h-full shrink-0 items-center p-[8px]">
          <button
            type="button"
            onClick={() => setMobileQuoteOpen(true)}
            className="flex size-[56px] items-center justify-center rounded-[8px] bg-orange"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Form — always fixed, positioned via transform */}
      <div
        ref={formRef}
        className="hidden sm:block fixed bottom-0 left-0 right-0 z-40"
        style={{
          transition: ready ? "transform 300ms ease-in-out" : "none",
          transform: isSticky
            ? "translateY(0)"
            : `translateY(-${heroOffset}px)`,
          opacity: ready ? 1 : 0,
        }}
      >
        <div
          className="mx-auto"
          style={{
            transition: "max-width 300ms ease-in-out, padding 300ms ease-in-out",
            maxWidth: isSticky ? "100%" : 1200,
            paddingLeft: isSticky ? 0 : undefined,
            paddingRight: isSticky ? 0 : undefined,
          }}
        >
          <div
            className="relative flex w-full items-center backdrop-blur-[12px]"
            style={{
              transition:
                "background-color 300ms ease-in-out, border-radius 300ms ease-in-out",
              backgroundColor: isSticky
                ? "rgba(0,0,0,0.9)"
                : "rgba(0,0,0,0.6)",
              borderRadius: isSticky ? 0 : 16,
            }}
          >
            {/* Orange Left Decoration — rounded left corners in hero state */}
            <div
              className="h-[81px] w-[10px] shrink-0 self-stretch"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FF6D2E 27.78%, #502900 119.75%)",
                borderRadius: isSticky ? 0 : "16px 0 0 16px",
                transition: "border-radius 300ms ease-in-out",
              }}
            />

            {/* Form Fields */}
            <form className="flex w-full items-center">
              {/* Moving From */}
              <AddressInput
                label="Moving From"
                placeholder="Current Zip / City"
                className="flex-1 border-r border-[var(--white-10)] self-stretch py-0 pl-[20px] pr-[24px]"
              />

              {/* Moving To */}
              <AddressInput
                label="Moving To"
                placeholder="Destination Zip / City"
                className="flex-1 border-r border-[var(--white-10)] self-stretch py-0 pl-[20px] pr-[24px]"
              />

              {/* Home or Office / Select Size */}
              <div className="group flex w-[280px] items-center gap-[16px] self-stretch pl-[20px] pr-[24px] transition-colors hover:bg-white/5">
                <div className="flex flex-1 flex-col items-start font-medium leading-[1.4] text-white/50">
                  <span className="text-[14px]">Home or Office</span>
                  <select
                    value={moveSize}
                    onChange={(e) => setMoveSize(e.target.value)}
                    className={`w-full appearance-none bg-transparent text-[20px] outline-none ${moveSize ? "text-white" : "text-white/50"}`}
                  >
                    <option value="">Select size</option>
                    <option value="studio">Studio</option>
                    <option value="1bed">1 Bedroom</option>
                    <option value="2bed">2 Bedrooms</option>
                    <option value="3bed">3 Bedrooms</option>
                    <option value="4bed">4+ Bedrooms</option>
                    <option value="office-small">Small Office</option>
                    <option value="office-large">Large Office</option>
                  </select>
                </div>
                <Image
                  src="/images/chevron-down.svg"
                  alt=""
                  width={12}
                  height={7}
                  className="shrink-0 opacity-50 transition-opacity group-hover:opacity-80"
                />
              </div>

              {/* CTA Button — rounded right corners in hero state */}
              <div
                className="flex self-stretch items-center p-[4px]"
                style={{
                  borderRadius: isSticky ? 0 : "0 16px 16px 0",
                  transition: "border-radius 300ms ease-in-out",
                }}
              >
                <button
                  type="submit"
                  className="h-[73px] w-[200px] rounded-[12px] bg-orange px-[24px] text-[18px] font-semibold leading-[1.4] text-white transition-colors hover:bg-[#e5621f]"
                >
                  Get a Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
