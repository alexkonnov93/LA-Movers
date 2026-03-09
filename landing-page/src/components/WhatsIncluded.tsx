"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface WhatsIncludedProps {
  title: string;
  items: { icon: string; text: string }[];
  image: string;
}

export default function WhatsIncluded({ title, items, image }: WhatsIncludedProps) {
  return (
    <section className="p-[6px] sm:p-2">
      <div className="rounded-[32px] bg-[#0a0a0a] p-[8px] sm:rounded-[52px] sm:p-3">
        <div className="flex flex-col gap-[16px] sm:gap-0 lg:flex-row lg:items-stretch">
          {/* Left — Title + Items */}
          <div className="flex flex-col gap-[24px] p-[16px] sm:gap-12 sm:px-10 sm:pt-8 sm:pb-10 lg:w-[704px] lg:shrink-0 lg:gap-[48px] lg:pl-12 lg:pr-16 lg:pt-10 lg:pb-12">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-[family-name:var(--font-graphik)] text-[32px] leading-[1.1] tracking-[-1.28px] text-white sm:text-[40px] sm:tracking-[-1.6px] lg:text-[48px] lg:leading-[1.05] lg:tracking-[-1.92px] lg:w-[516px]"
            >
              {title}
            </motion.h3>

            <div className="grid grid-cols-2 gap-[24px] sm:gap-x-12 sm:gap-y-10">
              {items.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                  className="flex flex-col gap-[12px] sm:gap-5"
                >
                  <Icon
                    icon={item.icon}
                    width={24}
                    height={24}
                    className="text-white sm:size-[32px]"
                  />
                  <p className="text-[16px] font-medium leading-[1.4] text-white sm:text-[18px] lg:text-[20px]">
                    {item.text}
                  </p>
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
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
