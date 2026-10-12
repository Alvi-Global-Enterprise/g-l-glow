"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { categories } from "@/data/content";
import { NavArrowButtons } from "@/components/ui/NavArrowButtons";

export function Categories() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75 * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };
 
  return (
    <section
      id="categories"
      className="categories-section relative mx-auto w-full max-w-[1920px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[134px] py-12 sm:py-16 md:py-20 xl:pt-[65px] xl:pb-[80px]"
    >
      {/* Top Section Header: Dot + SHOP BY CATEGORY + Gold Line */}
      <div className="mb-6 sm:mb-8 md:mb-12 flex items-center gap-3 sm:gap-4">
        <span className="size-2 sm:size-2.5 shrink-0 rounded-full bg-[#FFC475]" />
        <span className="font-[family-name:var(--font-questrial)] text-xs sm:text-base md:text-xl lg:text-[24px] uppercase tracking-[0.07em] text-black/50">
          SHOP BY CATEGORY
        </span>
        <span className="h-[2px] min-w-0 flex-1 bg-[#FFC475]" />
      </div>

      {/* Row: Headline + Description + Arrow Buttons */}
      <div className="mb-8 sm:mb-10 md:mb-14 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Heading */}
        <div className="shrink-0 lg:max-w-[480px] xl:max-w-[540px]">
          <h2 className="font-[family-name:var(--font-display)] text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-normal leading-[0.96] text-black">
            Find What
            <br />
            <span className="italic text-[#C69B61]">Speaks to You</span>
          </h2>
        </div>

        {/* Center: Description */}
        <p className="max-w-[520px] font-[family-name:var(--font-questrial)] text-xs sm:text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed text-black/50">
          Explore our carefully selected range of skincare, beauty and fragrance
          - curated to complement your individual routine and style.
        </p>

        {/* Right: Round Arrow Buttons */}
        <div className="flex shrink-0 items-center justify-start lg:justify-end">
          <NavArrowButtons
            size="lg"
            onPrev={() => scrollByCard(-1)}
            onNext={() => scrollByCard(1)}
          />
        </div>
      </div>

      {/* 3 Category Cards */}
      <div
        ref={scrollerRef}
        className="categories-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none sm:gap-6 md:gap-7 lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8 2xl:gap-[38px] lg:overflow-visible"
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/#bestsellers`}
            className="block shrink-0 snap-center w-[82%] xs:w-[75%] sm:w-[65%] lg:w-auto"
          >
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="category-card group relative h-[380px] xs:h-[420px] sm:h-[480px] md:h-[530px] lg:h-[500px] xl:h-[560px] 2xl:h-[587px] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] cursor-pointer"
            >
              {/* Card Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 85vw, 33vw"
              />

              {/* Bottom Glassmorphic Label Capsule */}
              <div className="absolute inset-x-0 bottom-5 sm:bottom-7 md:bottom-8 flex justify-center px-4 sm:px-6">
                <div className="flex h-12 xs:h-14 sm:h-[66px] md:h-[76px] w-full max-w-[85%] sm:max-w-[386px] items-center justify-center rounded-[16px] sm:rounded-[19px] border border-white/40 bg-white/[0.65] px-4 sm:px-6 backdrop-blur-md transition-all duration-300 group-hover:bg-white/[0.88] group-hover:scale-[1.02] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <h3 className="font-[family-name:var(--font-questrial)] text-lg xs:text-xl sm:text-2xl md:text-[30px] lg:text-[34px] tracking-[0.08em] text-black text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  );
}
