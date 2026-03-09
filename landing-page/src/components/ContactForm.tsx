"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import AddressInput from "@/components/AddressInput";

export default function ContactForm() {
  const [moveSize, setMoveSize] = useState("");

  return (
    <div className="rounded-[32px] bg-[#f0f0f0] p-[24px] sm:rounded-[40px] sm:p-[40px] lg:p-[48px]">
      <h2 className="font-[family-name:var(--font-graphik)] text-[28px] leading-[1.1] tracking-[-1px] text-black sm:text-[36px] sm:tracking-[-1.44px]">
        Get a Free Quote
      </h2>

      <form
        className="mt-[32px] flex flex-col sm:mt-[40px]"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Moving From */}
        <AddressInput
          label="Moving From"
          placeholder="Current Zip / City"
          dropdownPosition="below"
          variant="light"
          className="py-[16px]"
        />

        {/* Moving To */}
        <AddressInput
          label="Moving To"
          placeholder="Destination Zip / City"
          dropdownPosition="below"
          variant="light"
          className="py-[16px]"
        />

        {/* Home or Office */}
        <div className="flex items-center gap-[16px] border-b border-[#dcdcdc] py-[16px] transition-colors hover:border-[#777778]">
          <div className="flex flex-1 flex-col items-start gap-[2px] font-medium leading-[1.4]">
            <span className="text-[14px] text-[#777778]">Home or Office</span>
            <select
              value={moveSize}
              onChange={(e) => setMoveSize(e.target.value)}
              className={`w-full appearance-none bg-transparent text-[20px] outline-none ${moveSize ? "text-black" : "text-[#a6a7a9]"}`}
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
          <Icon
            icon="tdesign:chevron-down"
            className="shrink-0 size-[12px] text-black opacity-50"
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="mt-[24px] h-[56px] w-full rounded-[16px] bg-orange text-[16px] font-semibold leading-[1.4] text-white transition-colors hover:bg-[#e5621f] sm:mt-[32px]"
        >
          Get a Quote
        </button>
      </form>
    </div>
  );
}
