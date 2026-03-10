"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

interface PageHeroProps {
  tag: string;
  title: React.ReactNode;
  subtitle: string;
  backgroundImage: string;
}

export default function PageHero({
  tag,
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  const titleText = typeof title === "string" ? title : null;

  return (
    <section className="relative overflow-clip pt-[96px] pb-[80px]">
      {/* Background Image + Gradient */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(75.33deg, rgba(0, 0, 0, 0.24) 23.13%, rgba(10, 10, 10, 0) 79.58%), linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%)",
          }}
        />
      </motion.div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative mx-auto mt-[80px] flex max-w-[1200px] flex-col gap-[24px] items-start px-4 sm:px-6 lg:px-0">
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center justify-center rounded-full border border-white px-[12px] py-[6px] text-[16px] font-medium leading-[1.4] text-white"
        >
          {tag}
        </motion.span>

        {/* Title + Subtitle */}
        <div className="flex flex-col gap-[16px] text-white">
          <h1 className="font-[family-name:var(--font-graphik)] text-[40px] leading-none tracking-[-1.6px] sm:text-[64px] sm:tracking-[-2.56px]">
            {titleText
              ? titleText.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + i * 0.08,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="mr-[0.25em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))
              : <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="inline"
                >
                  {title}
                </motion.span>
            }
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="text-[18px] font-medium leading-[1.4] sm:text-[20px] lg:w-[746px]"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
