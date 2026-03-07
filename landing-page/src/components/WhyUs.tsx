import Image from "next/image";
import { Icon } from "@iconify/react";

const reasons = [
  { icon: "tdesign:check-circle", title: "Price Guarantee\n- No Surprises" },
  { icon: "tdesign:time", title: "On-Time,\nEvery Time" },
  { icon: "tdesign:user", title: "In-House\nCrews Only" },
  { icon: "tdesign:undertake-delivery", title: "Individual Item\nWrapping" },
  { icon: "tdesign:assignment-checked", title: "Licensed &\nFully Insured" },
  { icon: "tdesign:gesture-ranslation", title: "White-Glove\nService" },
];

export default function WhyUs() {
  return (
    <section className="p-2">
      <div className="rounded-[52px] bg-[#0a0a0a] p-3">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {/* Left Content */}
          <div className="flex flex-col gap-12 px-6 pt-8 pb-10 sm:px-10 lg:w-[704px] lg:shrink-0 lg:pt-10 lg:pb-12 lg:pl-12 lg:pr-16">
            <h2 className="font-[family-name:var(--font-graphik)] text-[32px] leading-[1.05] tracking-[-1.28px] text-white sm:text-[40px] sm:tracking-[-1.6px] lg:text-[48px] lg:w-[516px] lg:tracking-[-1.92px]">
              Six Reasons LA Trusts Us With Their Move
            </h2>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex flex-col gap-5">
                  <Icon
                    icon={reason.icon}
                    width={32}
                    height={32}
                    className="text-white"
                  />
                  <p className="whitespace-pre-line text-[18px] font-medium leading-[1.4] text-white sm:text-[20px]">
                    {reason.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-[40px] lg:min-h-0">
            <Image
              src="/images/why-us.png"
              alt="Inside a moving truck packed with carefully labeled boxes"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
