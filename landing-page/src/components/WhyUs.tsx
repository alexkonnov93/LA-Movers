"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const reasons = [
  { icon: "tdesign:check-circle", title: "Price Guarantee\n- No Surprises" },
  { icon: "tdesign:time", title: "On-Time,\nEvery Time" },
  { icon: "tdesign:user", title: "In-House\nCrews Only" },
  { icon: "tdesign:undertake-delivery", title: "Individual Item\nWrapping" },
  { icon: "tdesign:assignment-checked", title: "Licensed &\nFully Insured" },
  { icon: "tdesign:gesture-ranslation", title: "White-Glove\nService" },
];

export default function WhyUs() {
  return (
    <section className="p-[6px] sm:p-2">
      <div className="rounded-[32px] bg-[#0a0a0a] p-[8px] sm:rounded-[52px] sm:p-3">
        <div className="flex flex-col gap-[16px] sm:gap-0 lg:flex-row lg:items-stretch">
          {/* Left Content */}
          <div className="flex flex-col gap-[24px] p-[16px] sm:gap-12 sm:px-10 sm:pt-8 sm:pb-10 lg:w-[704px] lg:shrink-0 lg:pt-10 lg:pb-12 lg:pl-12 lg:pr-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-[family-name:var(--font-graphik)] text-[32px] leading-[1.1] tracking-[-1.28px] text-white sm:leading-[1.05] sm:text-[40px] sm:tracking-[-1.6px] lg:text-[48px] lg:w-[516px] lg:tracking-[-1.92px]"
            >
              Six Reasons LA Trusts<br className="sm:hidden" /> Us With Their Move
            </motion.h2>

            <div className="grid grid-cols-2 gap-[24px] sm:gap-x-12 sm:gap-y-10">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                  className="flex flex-col gap-[12px] sm:gap-5"
                >
                  <Icon
                    icon={reason.icon}
                    width={24}
                    height={24}
                    className="text-white sm:size-[32px]"
                  />
                  <p className="whitespace-pre-line text-[16px] font-medium leading-[1.4] text-white sm:text-[18px] lg:text-[20px]">
                    {reason.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ clipPath: "inset(10% 10% 10% 10% round 40px)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 40px)", opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-[276px] overflow-hidden rounded-[24px] sm:h-auto sm:min-h-[300px] sm:flex-1 sm:rounded-[40px] lg:min-h-0"
          >
            <Image
              src="/images/why-us.jpg"
              alt="Inside a moving truck packed with carefully labeled boxes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
