"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "PREMIUM INGREDIENTS",
    description:
      "Carefully selected products made with quality ingredients chosen for your everyday beauty and skincare routine.",
    icon: (
      /* Double Sprout / Leaves in #FFC475 */
      <svg
        width="34"
        height="32"
        viewBox="0 0 34 32"
        fill="none"
        className="text-[#FFC475]"
        aria-hidden
      >
        <path
          d="M17 28C17 18 24 11 32 11C32 20 25 28 17 28Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 28C14 24 5 21 4 13C10 11 15 15 17 19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "THOUGHTFULLY SELECTED",
    description:
      "From skincare to beauty and fragrance, every product is chosen with care to bring you quality you can feel good about.",
    icon: (
      /* Faceted Diamond / Gem in #FFC475 */
      <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        className="text-[#FFC475]"
        aria-hidden
      >
        <path
          d="M6 5H26L31 12L16 26L1 12L6 5Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 5L11 12L16 5L21 12L26 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 12H31M11 12L16 26M21 12L16 26"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "BEAUTY FOR EVERY ROUTINE",
    description:
      "Discover essentials designed to complement different skin types, beauty needs and everyday rituals.",
    icon: (
      /* Shield in #FFC475 */
      <svg
        width="30"
        height="34"
        viewBox="0 0 30 34"
        fill="none"
        className="text-[#FFC475]"
        aria-hidden
      >
        <path
          d="M15 3L26.5 7V16.5C26.5 24.5 21.5 29 15 31.5C8.5 29 3.5 24.5 3.5 16.5V7L15 3Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "ONE PLACE, YOUR GLOW",
    description:
      "Skincare, beauty and fragrance - thoughtfully brought together in one modern beauty destination.",
    icon: (
      /* Heart in #FFC475 */
      <svg
        width="32"
        height="30"
        viewBox="0 0 32 30"
        fill="none"
        className="text-[#FFC475]"
        aria-hidden
      >
        <path
          d="M16 27L13.7 24.8C6.2 18 1.5 13.8 1.5 8.5C1.5 4.2 4.8 1 9 1C11.4 1 13.7 2.1 16 3.9C18.3 2.1 20.6 1 23 1C27.2 1 30.5 4.2 30.5 8.5C30.5 13.8 25.8 18 18.3 24.8L16 27Z"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="why-section relative mx-auto w-full max-w-[1920px] px-6 py-14 md:px-10 md:py-20 xl:px-[134px] xl:pt-[65px] xl:pb-[80px]"
    >
      {/* Top Header Bar: Dot + WHY G&L GLOW + Gold Line */}
      <div className="mb-8 flex items-center gap-4 md:mb-12">
        <span className="size-[10px] shrink-0 rounded-full bg-[#FFC475]" />
        <span className="font-[family-name:var(--font-questrial)] text-lg uppercase tracking-[0.07em] text-black/50 sm:text-xl md:text-[24px] md:leading-[25px]">
          WHY G&amp;L GLOW
        </span>
        <span className="h-[2px] min-w-0 flex-1 bg-[#FFC475]" />
      </div>

      {/* Main Grid: Left Column + Divider Line + Right 2x2 Feature Cards */}
      <div className="grid items-start gap-10 lg:gap-8 xl:grid-cols-[695px_1px_1fr] xl:gap-0">
        {/* Left Column: Heading, Paragraph, and Pill Button */}
        <div className="flex flex-col items-start xl:pr-[48px]">
          {/* Headline */}
          <h2 className="font-[family-name:var(--font-display)] text-[44px] font-normal leading-[0.95] text-black sm:text-[60px] md:text-[72px] lg:text-[80px] lg:leading-[76px]">
            Why <span className="italic text-[#C69B61]">Choose Us?</span>
          </h2>

          {/* Paragraph Description */}
          <p className="mt-6 max-w-[695px] font-[family-name:var(--font-questrial)] text-base leading-[1.536] tracking-[0.07em] text-black/50 sm:text-lg md:text-xl lg:text-[24px]">
            We believe beauty should be simple, thoughtful and personal. Our
            skincare, beauty and fragrance essentials are carefully selected to
            help you create a routine that feels right for you.
          </p>

          {/* CTA Button: Outline Pill with Golden Arrow Circle */}
          <div className="mt-8 md:mt-10">
            <a
              href="#about"
              className="group inline-flex h-[48px] w-[312px] items-center justify-between rounded-[24px] border border-black bg-transparent pl-6 pr-0 transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="font-[family-name:var(--font-questrial)] text-[18px] text-black/70 transition-colors group-hover:text-black md:text-[20px]">
                DISCOVER OUR STORY
              </span>
              <span className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#D9A96A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  className="-rotate-[30deg] text-black"
                  aria-hidden
                >
                  <path
                    d="M1 5H13M13 5L8.5 1M13 5L8.5 9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Vertical Divider: Rectangle 130 (h: 308px, w: 1px, bg-black/14) */}
        <div className="my-auto hidden h-[308px] w-px bg-black/14 xl:block" />

        {/* Right Column: 2x2 Feature Cards Grid */}
        <div className="why-cards grid gap-5 sm:grid-cols-2 xl:gap-x-[26px] xl:gap-y-[20px] xl:pl-[48px]">
          {features.map((feature, index) => (
            <motion.article
              key={feature.number}
              custom={index}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="feature-card flex h-auto min-h-[133px] w-full items-center gap-4 rounded-[20px] bg-[#F7EFE5] p-4 sm:p-5 xl:h-[133px] xl:w-[380px]"
            >
              {/* Left Circle Group: Black Circle + White Number Badge + Gold SVG Icon */}
              <div className="relative shrink-0">
                {/* Black Circle (83px) */}
                <div className="flex size-[76px] items-center justify-center rounded-full bg-black sm:size-[83px]">
                  {feature.icon}
                </div>

                {/* Overlapping White Number Badge (33px) */}
                <div className="absolute -left-1.5 -top-1.5 flex size-[31px] items-center justify-center rounded-full bg-white shadow-sm sm:size-[33px]">
                  <span className="font-[family-name:var(--font-nav)] text-xs font-bold text-black sm:text-[14px]">
                    {feature.number}
                  </span>
                </div>
              </div>

              {/* Right Content: Title + Description */}
              <div className="flex flex-1 flex-col justify-center">
                <h3 className="font-[family-name:var(--font-questrial)] text-[14px] uppercase tracking-[0.09em] text-black sm:text-[15px]">
                  {feature.title}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-questrial)] text-[13px] leading-[1.31] tracking-[0.01em] text-black/50 sm:text-[14px] md:text-[15px]">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
