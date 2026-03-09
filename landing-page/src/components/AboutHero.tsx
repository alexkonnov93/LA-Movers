"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";

interface AboutHeroProps {
  tag: string;
  title: React.ReactNode;
  subtitle: string;
}

export default function AboutHero({ tag, title, subtitle }: AboutHeroProps) {
  const titleText = typeof title === "string" ? title : null;

  return (
    <section className="relative overflow-clip pt-[96px] pb-[80px]">
      {/* Navbar */}
      <Navbar variant="light" showQuoteButton />

      {/* Centered Content */}
      <div className="mx-auto mt-[100px] flex max-w-[1200px] flex-col items-center gap-[20px] px-4 sm:px-6 lg:px-0">
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center justify-center rounded-full border border-black px-[12px] py-[6px] text-[16px] font-medium leading-[1.4] text-black"
        >
          {tag}
        </motion.span>

        {/* Title + Subtitle */}
        <div className="flex flex-col items-center gap-[16px] text-center text-black">
          <h1 className="font-[family-name:var(--font-graphik)] text-[40px] leading-none tracking-[-1.6px] sm:text-[64px] sm:tracking-[-2.56px] lg:w-[688px]">
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
            className="text-[18px] font-medium leading-[1.4] sm:text-[22px] lg:w-[688px]"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
