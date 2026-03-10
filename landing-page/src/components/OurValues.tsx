"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface OurValuesProps {
  items: ValueItem[];
  image: string;
}

export default function OurValues({ items, image }: OurValuesProps) {
  return (
    <section className="p-[8px]">
      <div className="rounded-[32px] bg-[#0a0a0a] p-[8px] sm:rounded-[52px] sm:p-3">
        <div className="flex flex-col gap-[16px] sm:gap-0 lg:flex-row lg:items-stretch">
          {/* Left — Title + Items */}
          <div className="flex flex-col gap-[24px] p-[16px] sm:gap-[48px] sm:px-10 sm:pt-8 sm:pb-10 lg:w-[704px] lg:shrink-0 lg:pl-[48px] lg:pr-[64px] lg:pt-[40px] lg:pb-[48px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-[family-name:var(--font-graphik)] text-[32px] leading-[1.1] tracking-[-1.28px] text-white sm:text-[48px] sm:leading-[1.05] sm:tracking-[-1.92px]"
            >
              Our Values
            </motion.h2>

            <div className="grid grid-cols-2 gap-[24px] sm:gap-x-[48px] sm:gap-y-[40px]">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                  className="flex flex-col gap-[12px] sm:gap-[20px]"
                >
                  {item.icon.startsWith("tdesign:") ? (
                    <Icon icon={item.icon} className="size-[24px] text-white sm:size-[32px]" />
                  ) : (
                    <div className="relative size-[24px] sm:size-[32px]">
                      <Image src={item.icon} alt="" fill sizes="32px" className="object-contain" />
                    </div>
                  )}
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="font-[family-name:var(--font-graphik)] text-[16px] leading-[1.05] tracking-[-0.6px] text-white sm:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="text-[14px] font-medium leading-[1.4] text-medium-grey sm:text-[16px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ clipPath: "inset(10% 10% 10% 10% round 40px)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 40px)", opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-[276px] overflow-hidden rounded-[24px] sm:h-auto sm:min-h-[300px] sm:flex-1 sm:rounded-[40px] lg:min-h-0"
          >
            <Image src={image} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
