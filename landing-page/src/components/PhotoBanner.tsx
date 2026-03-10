"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PhotoBannerProps {
  src: string;
  alt?: string;
}

export default function PhotoBanner({ src, alt = "" }: PhotoBannerProps) {
  return (
    <section className="p-[8px]">
      <motion.div
        initial={{ clipPath: "inset(8% 8% 8% 8% round 52px)", scale: 1.05 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 52px)", scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative h-[300px] overflow-hidden rounded-[32px] sm:h-[500px] sm:rounded-[52px] lg:h-[680px]"
      >
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </motion.div>
    </section>
  );
}
