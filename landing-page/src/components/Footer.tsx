import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Residential Moving", href: "/services/residential-moving" },
  { label: "Business Relocation", href: "/services/business-relocation" },
  { label: "Local Moving", href: "/services/local-moving" },
  { label: "Long Distance Moving", href: "/services/long-distance-moving" },
  { label: "Packing Services", href: "/services/packing-services" },
  { label: "Apartment Moving", href: "/services/apartment-moving" },
  { label: "Same-Day Moving", href: "/services/same-day-moving" },
  { label: "Secure Storage", href: "/services/storage" },
  { label: "Senior Moving", href: "/services/senior-moving" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Rates", href: "/rates" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black px-[24px] pt-[32px] pb-[104px] sm:px-8 sm:pt-[54px] sm:pb-[100px] sm:px-[68px]">
      <div className="flex flex-col gap-[40px] lg:flex-row lg:items-stretch lg:justify-between">
        {/* Left — Logo + tagline */}
        <div className="flex flex-col gap-[12px] lg:justify-between lg:gap-10 lg:w-[213px]">
          <Image
            src="/images/logo-white.svg"
            alt="The One Moving & Storage"
            width={162}
            height={63}
            className="h-[48px] w-[124px] sm:h-[63px] sm:w-[162px]"
          />
          <p className="w-[213px] font-[family-name:var(--font-graphik)] text-[14px] leading-[1.2] tracking-[-0.42px] text-[#777778]">
            Just a team that cares about getting your move done right
          </p>
        </div>

        {/* Right — Menu + bottom bar */}
        <div className="flex flex-col gap-[40px] lg:justify-between lg:w-[640px]">
          {/* Nav columns */}
          <div className="flex flex-wrap gap-[48px_64px] sm:justify-between">
            {/* Services */}
            <div className="flex flex-col gap-[20px]">
              <span className="font-[family-name:var(--font-graphik)] text-[16px] leading-[1.05] tracking-[-0.48px] text-white">
                Services
              </span>
              <ul className="flex flex-col gap-3 text-[16px] font-medium leading-[1.4] text-[#777778]">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="transition-colors hover:text-white">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-[20px]">
              <span className="font-[family-name:var(--font-graphik)] text-[16px] leading-[1.05] tracking-[-0.48px] text-white">
                Company
              </span>
              <ul className="flex flex-col gap-3 text-[16px] font-medium leading-[1.4] text-[#777778]">
                {company.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="flex flex-col gap-[20px]">
              <span className="font-[family-name:var(--font-graphik)] text-[16px] leading-[1.05] tracking-[-0.48px] text-white">
                Get in Touch
              </span>
              <div className="flex flex-col gap-3 text-[16px] font-medium leading-[1.4] text-[#777778]">
                <a
                  href="tel:+13238137177"
                  className="transition-colors hover:text-white"
                >
                  (323) 813-7177
                </a>
                <p>
                  Mon – Fri 8am – 7pm
                  <br />
                  Sat 9am–5pm · Sun by appt
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-[16px] text-[14px] font-medium leading-[1.4] text-[#777778] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-[27px]">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
            <p>© 2026 The One Moving and Storage. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
