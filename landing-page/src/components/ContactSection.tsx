"use client";

import { Icon } from "@iconify/react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="px-4 pt-[32px] pb-[60px] sm:px-6 sm:pt-[48px] sm:pb-[100px] lg:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[40px] lg:flex-row lg:gap-[64px]">
        {/* Left — Info */}
        <div className="flex flex-col gap-[32px] lg:w-[480px] lg:shrink-0 lg:pt-[16px]">
          <div className="flex flex-col gap-[16px]">
            <h2 className="font-[family-name:var(--font-graphik)] text-[32px] leading-[1.1] tracking-[-1.28px] text-black sm:text-[48px] sm:leading-[1.05] sm:tracking-[-1.92px]">
              Get in Touch
            </h2>
            <p className="text-[16px] font-medium leading-[1.4] text-[#777778] sm:text-[18px] lg:max-w-[400px]">
              Have a question about your move? Need a quick quote? Just want to
              say hi? We&apos;re here and happy to help.
            </p>
          </div>

          <div className="flex flex-col gap-[24px]">
            {/* Email */}
            <a
              href="mailto:info@theonemoving.com"
              className="flex items-center gap-[16px] transition-opacity hover:opacity-80"
            >
              <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#f0f0f0]">
                <Icon icon="tdesign:mail" className="size-[24px] text-black" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="text-[14px] font-medium leading-[1.4] text-[#777778]">
                  Email us
                </span>
                <span className="text-[16px] font-semibold leading-[1.4] text-black">
                  info@theonemoving.com
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:3238137177"
              className="flex items-center gap-[16px] transition-opacity hover:opacity-80"
            >
              <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#f0f0f0]">
                <Icon
                  icon="tdesign:call"
                  className="size-[24px] text-black"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="text-[14px] font-medium leading-[1.4] text-[#777778]">
                  Call us
                </span>
                <span className="text-[16px] font-semibold leading-[1.4] text-black">
                  (323) 813-7177
                </span>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-center gap-[16px]">
              <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#f0f0f0]">
                <Icon
                  icon="tdesign:time"
                  className="size-[24px] text-black"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="text-[14px] font-medium leading-[1.4] text-[#777778]">
                  Working hours
                </span>
                <span className="text-[16px] font-semibold leading-[1.4] text-black">
                  Mon–Fri 8am–7pm · Sat 9am–5pm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
