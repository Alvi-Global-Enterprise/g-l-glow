"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/assets";

export function About() {
  return (
    <section
      id="about"
      className="about-section relative mx-auto w-full max-w-[1920px] overflow-hidden rounded-b-[40px] bg-[#F7EFE5] md:rounded-b-[60px] lg:rounded-b-[75px]"
    >
      {/* ========================================================
          DESKTOP PIXEL-PERFECT FIGMA LAYOUT (xl: 1280px+)
          Matches 1920px x 1001px frame with exact coordinates
         ======================================================== */}
      <div className="relative mx-auto hidden h-[1001px] w-full max-w-[1920px] xl:block">
        {/* Top Header Bar: Ellipse 23 + ABOUT US + Rectangle 98 */}
        <div className="absolute left-[134px] right-[154px] top-[58px] flex items-center gap-4">
          <span className="size-[10px] shrink-0 rounded-full bg-[#FFC475]" />
          <span className="font-[family-name:var(--font-questrial)] text-[24px] leading-[25px] tracking-[0.07em] text-black/50">
            ABOUT US
          </span>
          <span className="h-[2px] min-w-0 flex-1 bg-[#FFC475]" />
        </div>

        {/* Headline: More Than Beauty. / A Story of You. */}
        <h2 className="about-copy absolute left-[134px] top-[126px] w-[892px] font-[family-name:var(--font-display)] text-[80px] font-normal leading-[76px] text-black">
          More Than Beauty.
          <br />
          <span className="italic text-[#C69B61]">A Story of You.</span>
        </h2>

        {/* Right Column: Perfume Card (w: 523px, h: 797px, top: 118px, left: 1243px) */}
        <div className="about-img-perfume absolute left-[1243px] top-[118px] h-[797px] w-[523px]">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative h-full w-full overflow-hidden rounded-[35px] shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          >
            <Image
              src={images.aboutPerfume}
              alt="Curated fragrance and beauty products"
              fill
              priority
              className="object-cover"
              sizes="523px"
            />
          </motion.div>

          {/* Badge 1: Carefully Selected (left: 1163px -> relative -80px, top: 193px -> relative 75px) */}
          <div className="absolute -left-[80px] top-[75px] z-20 flex h-[65px] w-[326px] items-center gap-3.5 rounded-[14px] bg-white px-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            {/* Diamond Sparkle Icon */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className="shrink-0 text-[#FFC475]"
              aria-hidden
            >
              <rect
                x="18"
                y="3"
                width="21"
                height="21"
                rx="2"
                transform="rotate(45 18 3)"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <rect
                x="18"
                y="10"
                width="11"
                height="11"
                rx="1"
                transform="rotate(45 18 10)"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="font-[family-name:var(--font-questrial)] text-[24px] leading-[1.246] tracking-[0.07em] text-[#302009]">
              Carefully Selected
            </span>
          </div>

          {/* Badge 2: Curated For You (left: 1505px -> relative 262px, top: 776px -> relative 658px) */}
          <div className="absolute left-[262px] top-[658px] z-20 flex h-[65px] w-[282px] items-center gap-3.5 rounded-[14px] bg-white px-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            {/* Sprout / Leaves Icon */}
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              className="shrink-0 text-[#FFC475]"
              aria-hidden
            >
              <path
                d="M10 24C10 16 16 10 24 10C24 18 18 24 10 24Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 24C7 21 6 16 8 12C11 10 15 11 17 14"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-[family-name:var(--font-questrial)] text-[24px] leading-[1.246] tracking-[0.07em] text-[#302009]">
              Curated For You
            </span>
          </div>
        </div>

        {/* Left Column: Woman Card (w: 496px, h: 548px, top: 367px, left: 134px) */}
        <div className="about-img-woman absolute left-[134px] top-[367px] h-[548px] w-[496px]">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative h-full w-full overflow-hidden rounded-[35px] shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          >
            <Image
              src={images.aboutWoman}
              alt="Woman applying skincare"
              fill
              className="object-cover"
              sizes="496px"
            />
          </motion.div>

          {/* Badge: Skincare • Beauty / Fragrance (left: 180px -> relative 46px, top: 1325px -> relative -35px) */}
          <div className="absolute left-[46px] -top-[35px] z-20 flex h-[97px] w-[326px] items-center gap-4 rounded-[14px] bg-white px-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            {/* Stylized Lotus / Flower Icon */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              className="shrink-0 text-[#FFC475]"
              aria-hidden
            >
              <path
                d="M22 6C22 6 15 16 15 25C15 28.8 18.1 32 22 32C25.9 32 29 28.8 29 25C29 16 22 6 22 6Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 16C11 19 7 24 7 28C7 31.5 9.8 34 13 34C17.5 34 20.5 29 20.5 29"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M27 16C33 19 37 24 37 28C37 31.5 34.2 34 31 34C26.5 34 23.5 29 23.5 29"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-[family-name:var(--font-questrial)] text-[24px] leading-[1.246] tracking-[0.07em] text-[#302009]">
              Skincare • Beauty
              <br />
              Fragrance
            </span>
          </div>
        </div>

        {/* Center Column: Description Paragraph (left: 683px, top: 426px, width: 465px) */}
        <p className="about-copy absolute left-[683px] top-[426px] w-[465px] font-[family-name:var(--font-questrial)] text-[24px] leading-[153.6%] tracking-[0.07em] text-black/50">
          G&L Glow is a modern beauty and skincare company offering carefully
          selected skincare, beauty and fragrance products, including our own
          products and established brands.
          <br />
          <br />
          Our focus is to help you discover quality products for your individual
          skin, beauty and self-care needs.
        </p>

        {/* Center Column CTA Button (left: 683px, top: 803px, width: 312px, height: 48px) */}
        <a
          href="#contact"
          className="group absolute left-[683px] top-[803px] inline-flex h-[48px] w-[312px] items-center justify-between rounded-[24px] bg-[#FFC475] pl-6 pr-0 transition-transform duration-300 hover:scale-[1.02]"
        >
          <span className="font-[family-name:var(--font-questrial)] text-[21px] leading-[22px] text-black">
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

      {/* ========================================================
          RESPONSIVE STACKED LAYOUT (Mobile / Tablet / Small Laptops)
         ======================================================== */}
      <div className="px-6 py-16 md:px-10 md:py-24 xl:hidden">
        {/* Top Header */}
        <div className="mb-8 flex items-center gap-3 md:mb-10">
          <span className="size-2.5 shrink-0 rounded-full bg-[#FFC475]" />
          <span className="font-[family-name:var(--font-questrial)] text-lg tracking-[0.07em] text-black/50 md:text-2xl">
            ABOUT US
          </span>
          <span className="h-[2px] min-w-0 flex-1 bg-[#FFC475]" />
        </div>

        {/* Headline */}
        <h2 className="about-copy max-w-[892px] font-[family-name:var(--font-display)] text-[40px] leading-[0.95] text-black md:text-[60px] lg:text-[80px] lg:leading-[76px]">
          More Than Beauty.
          <br />
          <span className="italic text-[#C69B61]">A Story of You.</span>
        </h2>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left / Woman Image with Badge */}
          <div className="about-img-woman relative mt-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="relative aspect-[496/548] w-full overflow-hidden rounded-[30px] md:rounded-[35px]"
            >
              <Image
                src={images.aboutWoman}
                alt="Woman applying skincare"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 496px"
              />
            </motion.div>
            <div className="absolute -top-5 left-4 flex max-w-[90%] items-center gap-3 rounded-[14px] bg-white p-3 shadow-md md:left-8 md:p-4">
              <svg
                width="36"
                height="36"
                viewBox="0 0 44 44"
                fill="none"
                className="shrink-0 text-[#FFC475]"
                aria-hidden
              >
                <path
                  d="M22 6C22 6 15 16 15 25C15 28.8 18.1 32 22 32C25.9 32 29 28.8 29 25C29 16 22 6 22 6Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 16C11 19 7 24 7 28C7 31.5 9.8 34 13 34C17.5 34 20.5 29 20.5 29"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M27 16C33 19 37 24 37 28C37 31.5 34.2 34 31 34C26.5 34 23.5 29 23.5 29"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-[family-name:var(--font-questrial)] text-xs tracking-[0.07em] text-[#302009] sm:text-base md:text-lg">
                Skincare • Beauty
                <br />
                Fragrance
              </span>
            </div>
          </div>

          {/* Right / Copy + Button */}
          <div className="about-copy flex flex-col justify-center">
            <p className="font-[family-name:var(--font-questrial)] text-base leading-[1.536] tracking-[0.07em] text-black/50 md:text-2xl">
              G&L Glow is a modern beauty and skincare company offering
              carefully selected skincare, beauty and fragrance products,
              including our own products and established brands.
              <br />
              <br />
              Our focus is to help you discover quality products for your
              individual skin, beauty and self-care needs.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex h-12 w-full max-w-[312px] items-center justify-between rounded-[24px] bg-[#FFC475] pl-6 pr-0 transition-transform hover:scale-[1.02]"
              >
                <span className="font-[family-name:var(--font-questrial)] text-lg text-black md:text-[21px]">
                  DISCOVER OUR STORY
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#D9A96A]">
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

            {/* Perfume Card in mobile/tablet */}
            <div className="about-img-perfume relative mt-10">
              <motion.div
                whileHover={{ y: -4 }}
                className="relative aspect-[523/650] w-full overflow-hidden rounded-[30px] md:rounded-[35px]"
              >
                <Image
                  src={images.aboutPerfume}
                  alt="Curated fragrance and beauty products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 523px"
                />
              </motion.div>
              <div className="absolute left-4 top-6 flex max-w-[90%] items-center gap-3 rounded-[14px] bg-white p-3 shadow-md md:left-8">
                <span className="font-[family-name:var(--font-questrial)] text-xs tracking-[0.07em] text-[#302009] sm:text-base">
                  Carefully Selected
                </span>
              </div>
              <div className="absolute bottom-6 right-4 flex max-w-[90%] items-center gap-3 rounded-[14px] bg-white p-3 shadow-md md:right-8">
                <span className="font-[family-name:var(--font-questrial)] text-xs tracking-[0.07em] text-[#302009] sm:text-base">
                  Curated For You
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
