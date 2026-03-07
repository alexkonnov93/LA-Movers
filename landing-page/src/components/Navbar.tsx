"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full px-4 pt-[48px] sm:px-6 sm:pt-[32px] lg:px-[120px]">
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
              className="flex size-[44px] items-center justify-center rounded-[12px] border border-[var(--white-50)] backdrop-blur-[12px]"
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
              className="flex size-[40px] flex-col items-center justify-center gap-[5px] p-[6px] text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <Icon icon="tdesign:close" width={24} height={24} />
              ) : (
                <>
                  <span className="h-[2px] w-full rounded-[10px] bg-white" />
                  <span className="h-[2px] w-full rounded-[10px] bg-white" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Desktop: left glass pill (logo + nav) */}
        <div className="hidden items-center gap-[42px] rounded-[16px] bg-[var(--dark-60)] py-[12px] pl-[20px] pr-[32px] backdrop-blur-[12px] md:flex">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="The One Moving & Storage"
              width={92}
              height={40}
              priority
            />
          </Link>
          <div className="flex items-center gap-[32px]">
            <button className="flex items-center gap-[8px] text-[16px] font-medium leading-[1.4] text-white">
              Services
              <Image
                src="/images/chevron-down.svg"
                alt=""
                width={12}
                height={7}
              />
            </button>
            <Link
              href="#rates"
              className="text-[16px] font-medium leading-[1.4] text-white transition-colors hover:text-white/80"
            >
              Rates
            </Link>
            <Link
              href="#company"
              className="text-[16px] font-medium leading-[1.4] text-white transition-colors hover:text-white/80"
            >
              Company
            </Link>
            <Link
              href="#contact"
              className="text-[16px] font-medium leading-[1.4] text-white transition-colors hover:text-white/80"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Desktop: right buttons */}
        <div className="hidden items-center gap-[12px] md:flex">
          <Link
            href="#quote"
            className="rounded-[16px] bg-white px-[24px] py-[16px] text-center text-[16px] font-semibold leading-[1.4] text-black transition-colors hover:bg-white/90"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:3238137177"
            className="flex size-[54px] items-center justify-center rounded-[16px] border border-[var(--white-50)] backdrop-blur-[12px] transition-colors hover:bg-white/10"
            aria-label="Call us"
          >
            <Image src="/images/phone-icon.svg" alt="Phone" width={24} height={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mt-3 rounded-[16px] bg-[var(--dark-60)] p-5 backdrop-blur-[12px] md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="#services"
              className="text-[16px] font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#rates"
              className="text-[16px] font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Rates
            </Link>
            <Link
              href="#company"
              className="text-[16px] font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Company
            </Link>
            <Link
              href="#contact"
              className="text-[16px] font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-[12px] pt-2">
              <Link
                href="#quote"
                className="flex-1 rounded-[16px] bg-white px-[24px] py-[16px] text-center text-[16px] font-semibold text-black"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:3238137177"
                className="flex size-[54px] shrink-0 items-center justify-center rounded-[16px] border border-[var(--white-50)]"
                aria-label="Call us"
              >
                <Image
                  src="/images/phone-icon.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
