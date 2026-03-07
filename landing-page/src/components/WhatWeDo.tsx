"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Chevron from "./Chevron";

const services = [
  {
    icon: "tdesign:home",
    label: "Residential Moving",
    image: "/images/service-residential.png",
  },
  {
    icon: "tdesign:map-connection",
    label: "Business Relocation",
    image: "/images/service-business.png",
  },
  {
    icon: "tdesign:vehicle",
    label: "Local Moving",
    image: "/images/service-local.png",
  },
  {
    icon: "tdesign:map",
    label: "Long Distance Moving",
    image: "/images/service-long-distance.png",
  },
  {
    icon: "tdesign:undertake-delivery",
    label: "Packing Services",
    image: "/images/service-packing.png",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 6;
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP;

export default function WhatWeDo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 pt-[100px] pb-[120px] lg:px-[68px]">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center rounded-full border border-black px-3 py-1.5 text-[16px] font-medium leading-[1.4]">
            What we do
          </span>
          <h2 className="font-[family-name:var(--font-graphik)] text-[40px] leading-none tracking-[-1.6px] sm:text-[52px] sm:tracking-[-2.08px] lg:text-[64px] lg:tracking-[-2.56px]">
            Moving &<br />
            Storage Services
          </h2>
        </div>
        <p className="text-[18px] font-medium leading-[1.4] text-[#777778] sm:text-[20px] lg:w-[580px]">
          From a studio apartment to a 50,000 sq ft warehouse — we&apos;ll
          build a plan around your move.
        </p>
      </div>

      {/* Cards with nav buttons */}
      <div className="relative mt-16">
        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-6 flex gap-1.5 overflow-x-auto px-6 lg:-mx-[68px] lg:px-[68px]"
        >
          {services.map((service) => (
            <div
              key={service.label}
              className="group relative flex h-[320px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-[32px] p-7"
            >
              {/* Background image + overlay */}
              <Image
                src={service.image}
                alt={service.label}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-[32px] bg-black/20" />

              {/* Progressive bottom blur */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-full backdrop-blur-[2px]"
                style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 25%)" }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-full backdrop-blur-[4px]"
                style={{ maskImage: "linear-gradient(to bottom, transparent 25%, black 50%)" }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-full backdrop-blur-[8px]"
                style={{ maskImage: "linear-gradient(to bottom, transparent 50%, black 75%)" }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-full backdrop-blur-[12px]"
                style={{ maskImage: "linear-gradient(to bottom, transparent 75%, black 100%)" }}
              />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[rgba(81,81,81,0.81)] to-transparent" />

              {/* Icon */}
              <Icon
                icon={service.icon}
                width={32}
                height={32}
                className="relative text-white"
              />

              {/* Label */}
              <p className="relative font-[family-name:var(--font-graphik)] text-[21px] leading-[1.4] tracking-[-0.42px] text-white">
                {service.label}
              </p>
            </div>
          ))}
        </div>

        {/* Left arrow */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 flex size-[56px] -translate-y-1/2 items-center justify-center rounded-[16px] border border-[#dcdcdc] bg-white/50 backdrop-blur-[12px] transition-colors hover:bg-white/70"
          >
            <Chevron size={12} direction="left" className="text-black" />
          </button>
        )}

        {/* Right arrow */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 flex size-[56px] -translate-y-1/2 items-center justify-center rounded-[16px] border border-[#dcdcdc] bg-white/50 backdrop-blur-[12px] transition-colors hover:bg-white/70"
          >
            <Chevron size={12} direction="right" className="text-black" />
          </button>
        )}
      </div>
    </section>
  );
}
