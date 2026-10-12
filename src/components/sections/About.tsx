"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/assets";

export function About() {
  return (
    <section
      id="about"
      className="about-section relative mx-auto w-full max-w-[1920px] overflow-hidden rounded-b-[36px] sm:rounded-b-[48px] md:rounded-b-[60px] lg:rounded-b-[75px] bg-[#F7EFE5] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[134px] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Top Header Bar: Dot + ABOUT US + Gold Line */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="size-2 sm:size-2.5 shrink-0 rounded-full bg-[#FFC475]" />
        <span className="font-[family-name:var(--font-questrial)] text-xs sm:text-base md:text-xl lg:text-[24px] uppercase tracking-[0.07em] text-black/50">
          ABOUT US
        </span>
        <span className="h-[2px] min-w-0 flex-1 bg-[#FFC475]" />
      </div>

      {/* Main Headline */}
      <h2 className="about-copy mt-6 sm:mt-8 md:mt-10 font-[family-name:var(--font-display)] text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-normal leading-[0.96] text-black">
        More Than Beauty.
        <br />
        <span className="italic text-[#C69B61]">A Story of You.</span>
      </h2>

      {/* Responsive Grid Layout */}
      <div className="mt-8 sm:mt-12 md:mt-14 grid gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10 2xl:gap-14 items-start">
        {/* Left Column: Woman Image Card with Lotus Badge */}
        <div className="about-img-woman relative w-full lg:col-span-5 xl:col-span-4 max-w-lg mx-auto lg:max-w-none">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative aspect-[496/548] w-full overflow-hidden rounded-[24px] sm:rounded-[30px] md:rounded-[35px] shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          >
            <Image
              src={images.aboutWoman}
              alt="Woman applying skincare"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 40vw, 496px"
            />
          </motion.div>

          {/* Badge: Skincare • Beauty / Fragrance */}
          <div className="absolute -top-4 sm:-top-5 left-3 sm:left-6 z-20 flex items-center gap-2.5 sm:gap-3.5 rounded-[12px] sm:rounded-[14px] bg-white p-2.5 sm:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[calc(100%-24px)]">
            <svg
              viewBox="0 0 44 44"
              fill="none"
              className="size-7 sm:size-9 md:size-10 shrink-0 text-[#FFC475]"
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
            <span className="font-[family-name:var(--font-questrial)] text-xs sm:text-base md:text-lg lg:text-[19px] xl:text-[21px] leading-tight tracking-[0.05em] text-[#302009]">
              Skincare • Beauty
              <br />
              Fragrance
            </span>
          </div>
        </div>

        {/* Center Column: Description Copy + Discover CTA */}
        <div className="about-copy flex flex-col justify-center lg:col-span-7 xl:col-span-4 lg:pt-4 xl:pt-8">
          <p className="font-[family-name:var(--font-questrial)] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[23px] leading-[1.536] tracking-[0.05em] text-black/60">
            G&L Glow is a modern beauty and skincare company offering carefully
            selected skincare, beauty and fragrance products, including our own
            products and established brands.
            <br />
            <br />
            Our focus is to help you discover quality products for your individual
            skin, beauty and self-care needs.
          </p>

          <div className="mt-6 sm:mt-8 md:mt-10">
            <a
              href="#contact"
              className="group inline-flex h-12 sm:h-[48px] w-full max-w-[312px] items-center justify-between rounded-[24px] bg-[#FFC475] pl-6 pr-0 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              <span className="font-[family-name:var(--font-questrial)] text-sm sm:text-base md:text-[19px] text-black font-medium">
                DISCOVER OUR STORY
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#D9A96A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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

        {/* Right Column: Perfume Card with Both Floating Badges */}
        <div className="about-img-perfume relative w-full lg:col-span-12 xl:col-span-4 max-w-lg mx-auto xl:max-w-none mt-4 lg:mt-6 xl:mt-0">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative aspect-[523/650] sm:aspect-[523/600] xl:aspect-[523/760] w-full overflow-hidden rounded-[24px] sm:rounded-[30px] md:rounded-[35px] shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          >
            <Image
              src={images.aboutPerfume}
              alt="Curated fragrance and beauty products"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 523px"
            />
          </motion.div>

          {/* Badge 1: Carefully Selected (Top Left) */}
          <div className="absolute top-4 sm:top-6 left-3 sm:left-4 z-20 flex items-center gap-2 sm:gap-3 rounded-[12px] sm:rounded-[14px] bg-white p-2.5 sm:px-4 sm:py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[calc(100%-24px)]">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              className="size-6 sm:size-7 md:size-8 shrink-0 text-[#FFC475]"
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
            <span className="font-[family-name:var(--font-questrial)] text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[20px] tracking-[0.05em] text-[#302009] whitespace-nowrap">
              Carefully Selected
            </span>
          </div>

          {/* Badge 2: Curated For You (Bottom Right) */}
          <div className="absolute bottom-4 sm:bottom-6 right-3 sm:right-4 z-20 flex items-center gap-2 sm:gap-3 rounded-[12px] sm:rounded-[14px] bg-white p-2.5 sm:px-4 sm:py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[calc(100%-24px)]">
            <svg
              viewBox="0 0 34 34"
              fill="none"
              className="size-6 sm:size-7 md:size-8 shrink-0 text-[#FFC475]"
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
            <span className="font-[family-name:var(--font-questrial)] text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[20px] tracking-[0.05em] text-[#302009] whitespace-nowrap">
              Curated For You
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
