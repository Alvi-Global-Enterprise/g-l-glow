"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";

export function Hero() {
  return (
    <div className="w-full bg-[#080503] ">
      <section
        id="home"
        className="hero-section relative mx-auto flex w-full max-w-[1920px] flex-col items-center justify-between overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[48px] lg:h-[993px] lg:min-h-[993px] lg:rounded-[60px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
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
        <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-6 pb-16 pt-32 text-center sm:pb-20 sm:pt-36 md:pt-40 lg:pb-24 lg:pt-[170px]">
          {/* Eyebrow / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-[family-name:var(--font-questrial)] text-xs tracking-[0.16em] text-[#EAD8C7]/80 sm:text-base sm:tracking-[0.18em] md:text-xl lg:text-[26px] lg:tracking-[0.2em]"
          >
            BEAUTY · SKIN · FRAGRANCE
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 font-[family-name:var(--font-display)] text-[52px] leading-[0.94] text-[#FFC475] sm:mt-4 sm:text-[76px] md:text-[98px] lg:mt-5 lg:text-[116px] xl:text-[124px] drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)]"
          >
            <span className="font-normal">Your</span>{" "}
            <span className="font-normal italic">Glow,</span>
            <br />
            <span className="font-normal">Your</span>{" "}
            <span className="font-normal italic">Story.</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-4 max-w-[640px] font-[family-name:var(--font-questrial)] text-sm leading-relaxed text-[#EAD8C7]/75 sm:mt-5 sm:text-base md:text-lg lg:mt-6 lg:text-[20px] lg:leading-[1.4]"
          >
            Discover carefully selected skincare, beauty and fragrance products
            designed to be part of your everyday ritual.
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3.5 sm:mt-8 sm:gap-5 lg:mt-9"
          >
            {/* Primary CTA: SHOP NOW */}
            <a
              href="#bestsellers"
              className="group inline-flex h-12 items-center rounded-full bg-[#E5AD6B] pl-6 pr-1.5 transition-all duration-300 hover:scale-[1.03] hover:bg-[#ebbb82] sm:h-[50px] sm:pl-7 shadow-[0_4px_24px_rgba(229,173,107,0.35)]"
            >
              <span className="mr-3 font-[family-name:var(--font-questrial)] text-[16px] font-semibold tracking-wider text-black sm:text-[19px]">
                SHOP NOW
              </span>
              <span className="flex size-9 items-center justify-center rounded-full bg-[#D19B58] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-10">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-black"
                  aria-hidden
                >
                  <path
                    d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            {/* Secondary CTA: EXPLORE COLLECTION */}
            <a
              href="#categories"
              className="group inline-flex h-12 items-center rounded-full border border-[rgba(255,200,140,0.28)] bg-[rgba(39,25,15,0.75)] pl-6 pr-1.5 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-[rgba(55,34,20,0.85)] sm:h-[50px] sm:pl-7 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            >
              <span className="mr-3 font-[family-name:var(--font-questrial)] text-[15px] font-medium tracking-wider text-[#F5EBE1] sm:text-[18px]">
                EXPLORE COLLECTION
              </span>
              <span className="flex size-9 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-10">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-black"
                  aria-hidden
                >
                  <path
                    d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9"
                    stroke="currentColor"
                    strokeWidth="2.3"
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
