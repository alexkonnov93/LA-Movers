"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const locations = [
  "Los Angeles",
  "Pasadena",
  "Glendale",
  "Burbank",
  "Santa Monica",
  "Beverly Hills",
  "West Hollywood",
  "Silver Lake",
  "Echo Park",
  "Downtown LA",
  "Hollywood",
  "Culver City",
  "Inglewood",
  "Torrance",
  "Long Beach",
];

export default function LaLocations() {
  return (
    <section className="p-[6px] sm:p-2">
      <motion.div
        initial={{ clipPath: "inset(4% 4% 4% 4% round 52px)", scale: 1.03 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 52px)", scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative flex h-[600px] flex-col justify-end overflow-hidden rounded-[32px] p-[8px] sm:rounded-[52px] sm:p-3"
      >
        {/* Background image */}
        <Image
          src="/images/la-locations-bg.png"
          alt="Los Angeles beachside with palm trees"
          fill
          className="object-cover"
        />

        {/* Glass content card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative flex w-full flex-col gap-[24px] overflow-hidden rounded-[24px] border border-white/25 bg-white p-[20px] backdrop-blur-[12px] sm:h-full sm:justify-between sm:gap-0 sm:rounded-[40px] sm:p-8 sm:w-[546px] sm:p-12"
        >
          <h2 className="font-[family-name:var(--font-graphik)] text-[32px] leading-[1.1] tracking-[-1.28px] sm:text-[48px] sm:leading-none sm:tracking-[-1.92px]">
            Serving All
            <br />
            of Los Angeles
            <br />
            &amp; Beyond
          </h2>

          <div className="flex flex-wrap gap-[6px] sm:gap-2">
            {locations.map((loc, i) => (
              <motion.span
                key={loc}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.04, ease: "easeOut" }}
                className="rounded-full border border-[#dcdcdc] px-[12px] py-[6px] text-[14px] font-medium leading-[1.4] sm:px-3 sm:py-1.5 sm:text-[16px]"
              >
                {loc}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
