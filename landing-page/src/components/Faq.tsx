"use client";

import { useState } from "react";
import Chevron from "./Chevron";

const faqs = [
  {
    question: "How quickly can I get a quote?",
    answer:
      "Most quotes are ready within minutes of submitting your details. For larger or complex moves, we may schedule a quick virtual walkthrough to ensure accuracy.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "Never. The price we quote is the price you pay. We provide transparent, all-inclusive pricing with no surprise charges on moving day.",
  },
  {
    question: "Do you use subcontractors?",
    answer:
      "No. Every crew member is a trained, full-time employee of our company. We never outsource your move to third parties.",
  },
  {
    question: "What if something gets damaged?",
    answer:
      "We carry full liability insurance and treat every item as if it were our own. In the rare event of damage, we have a straightforward claims process to make it right.",
  },
  {
    question: "Can you move me on short notice?",
    answer:
      "Yes! We accommodate last-minute moves whenever possible. Give us a call and we'll do our best to fit you in, even with just 24 hours' notice.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-[16px] pt-[48px] pb-[60px] sm:px-6 sm:pt-[80px] sm:pb-[120px] lg:px-[68px]">
      <div className="flex flex-col gap-[32px] sm:gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* Title */}
        <h2 className="shrink-0 font-[family-name:var(--font-graphik)] text-[32px] leading-[1.1] tracking-[-1.28px] sm:text-[48px] sm:leading-[1.05] sm:tracking-[-1.92px] lg:w-[656px]">
          Questions?
          <br />
          We&apos;ve Got Answers
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-1.5 lg:w-[640px]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`rounded-[24px] transition-colors duration-300 ${isOpen ? "bg-light-grey" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className={`flex w-full items-center gap-3 rounded-[24px] p-6 text-left transition-colors duration-200 hover:bg-light-grey ${!isOpen && openIndex !== i + 1 ? "border-b border-[#dcdcdc]" : ""}`}
                >
                  <span className="flex-1 text-[18px] font-medium leading-[1.4]">
                    {faq.question}
                  </span>
                  <Chevron
                    className={`shrink-0 text-black transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-4 px-6 pb-6">
                      <div className="h-px w-full bg-black/10" />
                      <p className="text-[16px] font-medium leading-[1.4]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
