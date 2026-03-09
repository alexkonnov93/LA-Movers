"use client";

import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import ButtonBlack from "./ButtonBlack";
import type { Review } from "./ReviewCard";

const reviews: Review[] = [
  {
    text: '"Excellent company. They employ very competent and careful workers. The move went smoothly and without any problems. The company owners are nice guys who are very attentive during the service and payment process. I highly recommend hiring them! 👍👍👍"',
    name: "Geor",
    date: "3 week ago",
    avatar: "/images/avatar-geor.png",
  },
  {
    text: '"Absolutely outstanding service from One Moving and Storage! From start to finish, the team was professional, efficient, and incredibly careful with all my belongings. They arrived right on time, handled everything with care, and made what could\'ve been a stressful move completely seamless. The staff was friendly, respectful, and worked quickly without cutting corners. I also used their storage services, and my items were kept safe and in perfect condition. Their pricing was fair, and the quality of service exceeded all expectations. It\'s clear they take pride in their work and truly care about their customers. I highly recommend One Moving and Storage to anyone looking for a reliable and trustworthy moving company. Five stars all the way!"',
    name: "Rogerrr Quiroz",
    date: "6 month ago",
    avatar: "/images/avatar-rogerrr.png",
  },
  {
    text: "We needed a professional moving company that specialized in business relocations because we had to move our entire business inventory, furniture, racks, shelves, computers, and equipment to our new warehouse location.",
    name: "Sasan Mohammadi",
    date: "1 year ago",
    avatar: "/images/avatar-sasan.png",
  },
  {
    text: "I had the best experience they were on time. Everything was moved on time and they were excellent at everything that they did five stars all the way.",
    name: "Nadiia Miuller",
    date: "1 year ago",
    avatar: "/images/avatar-nadiia.png",
  },
];

export default function Reviews() {
  return (
    <section className="px-[6px] pt-[6px] sm:px-2 sm:pt-2">
      <div className="overflow-hidden rounded-[32px] bg-light-grey px-[20px] pt-[32px] pb-[20px] sm:rounded-[52px] sm:px-8 sm:py-[58px] sm:px-14">
        {/* Header */}
        <div className="flex flex-col gap-[12px] sm:gap-6 sm:flex-row sm:items-start sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-[12px] sm:gap-4"
          >
            <h2 className="font-[family-name:var(--font-graphik)] text-[32px] leading-[1.1] tracking-[-1.28px] sm:text-[52px] sm:tracking-[-2.08px] lg:text-[64px] lg:tracking-[-2.56px]">
              Don&apos;t Just Take
              <br />
              Our Word for It
            </h2>
            <p className="w-[272px] text-[16px] font-medium leading-[1.4] text-[#777778] sm:w-auto sm:text-[20px] lg:w-[580px]">
              See our customer real reviews from real LA moves
            </p>
          </motion.div>
          <ButtonBlack
            href="https://www.google.com/maps/place/The+One+Moving+and+Storage+Inc./@34.1046582,-118.3076993,17z/data=!4m8!3m7!1s0x80c2bf5a5c5ace43:0x44de70d9aa73a6f!8m2!3d34.1046582!4d-118.3076993!9m1!1b1!16s%2Fg%2F11h5q8cjlp"
            target="_blank"
            rel="noopener noreferrer"
            className="!hidden sm:!inline-flex"
          >
            All Reviews
          </ButtonBlack>
        </div>

        {/* Review Grid */}
        <div className="mt-[32px] flex flex-col gap-[24px] sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-x-16 sm:gap-y-16">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            >
              <ReviewCard
                review={review}
                showBorder={i < reviews.length - 2}
                mobileShowBorder={i < reviews.length - 1}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile-only bottom button */}
        <ButtonBlack
          href="https://www.google.com/maps/place/The+One+Moving+and+Storage+Inc./@34.1046582,-118.3076993,17z/data=!4m8!3m7!1s0x80c2bf5a5c5ace43:0x44de70d9aa73a6f!8m2!3d34.1046582!4d-118.3076993!9m1!1b1!16s%2Fg%2F11h5q8cjlp"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[24px] w-full justify-center text-[14px] sm:hidden"
        >
          All Reviews
        </ButtonBlack>
      </div>
    </section>
  );
}
