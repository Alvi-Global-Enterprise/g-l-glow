"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";

export function Hero() {
  return (
    <div className="w-full bg-[#080503] ">
      <section
        id="home"
        className="hero-section relative mx-auto flex w-full max-w-[1920px] flex-col items-center justify-between overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[48px] lg:rounded-[60px] min-h-[580px] sm:min-h-[660px] md:min-h-[740px] lg:min-h-[840px] xl:min-h-[920px] xl:h-[993px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        {/* Hero Background Image */}
        <div className="hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero/hero-bg.png"
            alt="G&L Glow luxury cosmetics"
            fill
            priority
            className="object-cover object-center select-none"
            sizes="(max-width: 1920px) 100vw, 1920px"
          />
          {/* Subtle soft vignette for central typography legibility */}
          <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.32)_100%]" />
        </div>

        {/* Floating Navbar */}
        <Navbar />

        {/* Centered Hero Content */}
        <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20 pt-24 sm:pt-32 md:pt-40 lg:pb-24 lg:pt-[170px] text-center">
          {/* Eyebrow / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-[family-name:var(--font-questrial)] text-[13px] xs:text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[33px] tracking-[0.03em] text-white/50"
          >
            BEAUTY · SKIN · FRAGRANCE
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 sm:mt-3 lg:mt-4 font-[family-name:var(--font-display)] text-[40px] xs:text-[50px] sm:text-[72px] md:text-[92px] lg:text-[110px] xl:text-[121px] leading-[0.943] text-[#FFC475] drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)]"
          >
            <span className="font-normal font-[family-name:var(--font-display)]">Your</span>{" "}
            <span className="font-normal italic font-[family-name:var(--font-display)]">Glow,</span>
            <br />
            <span className="font-normal font-[family-name:var(--font-display)]">Your</span>{" "}
            <span className="font-normal italic font-[family-name:var(--font-display)]">Story.</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-3 sm:mt-4 lg:mt-5 max-w-[649px] px-2 font-[family-name:var(--font-questrial)] text-xs xs:text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-[24px] text-white/50"
          >
            Discover carefully selected skincare, beauty and fragrance products
            designed to be part of your everyday ritual.
          </motion.p>

          {/* Call To Action Buttons (Figma Group 228: 524px x 48px, gap 21px) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-7 sm:mt-9 lg:mt-[34px] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-[21px] w-full max-w-[524px]"
          >
            {/* Primary CTA: SHOP NOW (Figma Group 227: 196.73px x 48px, #FFC475, circle #D9A96A) */}
            <a
              href="#bestsellers"
              className="group inline-flex h-[48px] w-full max-w-[197px] sm:w-[197px] items-center justify-between rounded-[24px] bg-[#FFC475] pl-[25px] pr-0 transition-all duration-300 hover:scale-[1.03] hover:brightness-105 shadow-[0_4px_24px_rgba(255,196,117,0.35)] cursor-pointer shrink-0"
            >
              <span className="font-[family-name:var(--font-questrial)] text-[18px] sm:text-[21px] font-normal leading-[22px] tracking-[0.01em] text-black select-none whitespace-nowrap">
                SHOP NOW
              </span>
              <span className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#D9A96A] transition-transform duration-300 group-hover:scale-105">
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ transform: "rotate(-30.36deg)" }}
                  aria-hidden="true"
                >
                  <path
                    d="M0.5 5H13.5M8.5 1L13.5 5L8.5 9"
                    stroke="#000000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            {/* Secondary CTA: EXPLORE COLLECTION (Figma Group 226: 306px x 48px, rgba(255,196,117,0.2), circle #FFFFFF) */}
            <a
              href="#categories"
              className="group inline-flex h-[48px] w-full max-w-[306px] sm:w-[306px] items-center justify-between rounded-[24px] bg-[rgba(255,196,117,0.2)] pl-[23px] pr-0 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-[rgba(255,196,117,0.3)] shadow-[0_4px_24px_rgba(255,196,117,0.2)] cursor-pointer shrink-0"
            >
              <span className="font-[family-name:var(--font-questrial)] text-[18px] sm:text-[21px] font-normal leading-[22px] tracking-[0.01em] text-white select-none whitespace-nowrap">
                EXPLORE COLLECTION
              </span>
              <span className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-105">
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ transform: "rotate(-30.36deg)" }}
                  aria-hidden="true"
                >
                  <path
                    d="M0.5 5H13.5M8.5 1L13.5 5L8.5 9"
                    stroke="#000000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
