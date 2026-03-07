import Image from "next/image";

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
    <section className="p-2">
      <div className="relative h-[600px] overflow-hidden rounded-[52px] p-3">
        {/* Background image */}
        <Image
          src="/images/la-locations-bg.png"
          alt="Los Angeles beachside with palm trees"
          fill
          className="object-cover"
        />

        {/* Glass content card */}
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[40px] border border-white/25 bg-white p-8 backdrop-blur-[12px] sm:w-[546px] sm:p-12">
          <h2 className="font-[family-name:var(--font-graphik)] text-[36px] leading-none tracking-[-1.44px] sm:text-[48px] sm:tracking-[-1.92px]">
            Serving All
            <br />
            of Los Angeles
            <br />
            &amp; Beyond
          </h2>

          <div className="flex flex-wrap gap-2">
            {locations.map((loc) => (
              <span
                key={loc}
                className="rounded-full border border-[#dcdcdc] px-3 py-1.5 text-[16px] font-medium leading-[1.4]"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
