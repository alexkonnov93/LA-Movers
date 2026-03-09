"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import AddressInput from "@/components/AddressInput";

interface MobileQuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileQuoteModal({ open, onClose }: MobileQuoteModalProps) {
  const [moveSize, setMoveSize] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col transition-all duration-300 ease-in-out sm:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Modal Content — slides up from bottom */}
      <div
        className={`relative flex flex-1 flex-col border-t border-[var(--white-10)] bg-[rgba(0,0,0,0.9)] backdrop-blur-[12px] transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className={`absolute right-[16px] top-[16px] z-10 text-white/60 transition-all duration-300 ease-out ${
            open ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
          style={{ transitionDelay: open ? "200ms" : "0ms" }}
          aria-label="Close"
        >
          <Icon icon="tdesign:close-circle-filled" width={28} height={28} />
        </button>

        {/* Form Area */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col pt-[64px]">
            {/* Heading */}
            <div
              className={`px-[20px] py-[20px] transition-all duration-300 ease-out ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[20px] opacity-0"
              }`}
              style={{ transitionDelay: open ? "100ms" : "0ms" }}
            >
              <h2 className="font-[family-name:var(--font-graphik)] text-[28px] leading-[1.05] tracking-[-0.84px] text-white">
                Estimate Moving
              </h2>
            </div>

            {/* Moving From */}
            <div
              className={`relative z-0 transition-all duration-300 ease-out focus-within:z-20 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[20px] opacity-0"
              }`}
              style={{ transitionDelay: open ? "150ms" : "0ms" }}
            >
              <AddressInput
                label="Moving From"
                placeholder="Current Zip / City"
                dropdownPosition="below"
                className="border-b border-[var(--white-10)] py-[16px] pl-[20px] pr-[24px]"
              />
            </div>

            {/* Moving To */}
            <div
              className={`relative z-0 transition-all duration-300 ease-out focus-within:z-20 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[20px] opacity-0"
              }`}
              style={{ transitionDelay: open ? "200ms" : "0ms" }}
            >
              <AddressInput
                label="Moving To"
                placeholder="Destination Zip / City"
                dropdownPosition="below"
                className="border-b border-[var(--white-10)] py-[16px] pl-[20px] pr-[24px]"
              />
            </div>

            {/* Home or Office */}
            <div
              className={`transition-all duration-300 ease-out ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[20px] opacity-0"
              }`}
              style={{ transitionDelay: open ? "250ms" : "0ms" }}
            >
              <div className="flex items-center gap-[16px] border-b border-[var(--white-10)] py-[16px] pl-[20px] pr-[24px]">
                <div className="flex flex-1 flex-col items-start gap-[2px] font-medium leading-[1.4] text-white/50">
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
                  className="shrink-0 opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Get a Quote Button */}
          <div
            className={`p-[20px] transition-all duration-300 ease-out ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-[20px] opacity-0"
            }`}
            style={{ transitionDelay: open ? "300ms" : "0ms" }}
          >
            <button
              type="button"
              className="h-[56px] w-full rounded-[12px] bg-orange text-[16px] font-semibold leading-[1.4] text-white transition-colors hover:bg-[#e5621f]"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
