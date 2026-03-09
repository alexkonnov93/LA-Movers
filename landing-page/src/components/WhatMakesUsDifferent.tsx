"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface DifferentiatorItem {
  icon: string;
  title: string;
  description: string;
}

interface WhatMakesUsDifferentProps {
  items: DifferentiatorItem[];
}

export default function WhatMakesUsDifferent({ items }: WhatMakesUsDifferentProps) {
  return (
    <section className="px-[16px] pt-[48px] pb-[60px] sm:px-[68px] sm:pt-[80px] sm:pb-[100px]">
      <h2 className="font-[family-name:var(--font-graphik)] text-[32px] leading-[1.1] tracking-[-1.28px] text-black sm:text-[48px] sm:leading-[1.05] sm:tracking-[-1.92px]">
        What Makes Us Different
      </h2>

      <div className="mt-[32px] flex flex-col gap-[40px] sm:mt-[64px] sm:flex-row sm:gap-[48px]">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            className="flex flex-1 flex-col gap-[24px] sm:gap-[32px]"
          >
            <div className="relative size-[80px] sm:size-[100px]">
              <Image src={item.icon} alt="" fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="font-[family-name:var(--font-graphik)] text-[20px] leading-[1.05] tracking-[-0.6px] text-black">
                {item.title}
              </h3>
              <p className="text-[16px] font-medium leading-[1.4] text-[#777778]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
