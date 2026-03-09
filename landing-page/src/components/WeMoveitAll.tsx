"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Card {
  image: string;
  label: string;
}

interface WeMoveItAllProps {
  title?: string;
  cards: Card[];
}

export default function WeMoveItAll({ title = "We move it all", cards }: WeMoveItAllProps) {
  return (
    <section className="px-[16px] pt-[48px] pb-[60px] sm:px-[68px] sm:pt-[100px] sm:pb-[120px]">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-[family-name:var(--font-graphik)] text-[32px] leading-[1.1] tracking-[-1.28px] text-black sm:leading-none sm:text-[48px] sm:tracking-[-1.92px] lg:text-[64px] lg:tracking-[-2.56px]"
      >
        {title}
      </motion.h2>

      <div className="mt-[32px] grid grid-cols-2 gap-[6px] sm:mt-[64px] sm:flex">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="relative flex h-[177px] flex-col justify-end overflow-hidden rounded-[24px] p-[16px] sm:h-[320px] sm:flex-1 sm:rounded-[32px] sm:p-[28px]"
          >
            {/* Background */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

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

            {/* Label */}
            <span className="relative whitespace-pre-line font-[family-name:var(--font-graphik)] text-[16px] font-semibold leading-[1.4] tracking-[-0.32px] text-white sm:text-[21px] sm:tracking-[-0.42px]">
              {card.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
