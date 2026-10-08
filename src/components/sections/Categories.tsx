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
      className="categories-section relative mx-auto w-full max-w-[1920px] px-6 py-14 md:px-10 md:py-20 xl:px-[134px] xl:pt-[65px] xl:pb-[80px]"
    >
      {/* Top Section Header: Dot + SHOP BY CATEGORY + Gold Line */}
      <div className="mb-8 flex items-center gap-4 md:mb-12">
        <span className="size-[10px] shrink-0 rounded-full bg-[#FFC475]" />
        <span className="font-[family-name:var(--font-questrial)] text-lg uppercase tracking-[0.07em] text-black/50 sm:text-xl md:text-[24px] md:leading-[25px]">
          SHOP BY CATEGORY
        </span>
        <span className="h-[2px] min-w-0 flex-1 bg-[#FFC475]" />
      </div>

      {/* Row: Headline + Description + Arrow Buttons */}
      <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Heading */}
        <div className="shrink-0 lg:max-w-[480px] xl:max-w-[540px]">
          <h2 className="font-[family-name:var(--font-display)] text-[44px] font-normal leading-[0.95] text-black sm:text-[60px] md:text-[72px] lg:text-[80px] lg:leading-[76px]">
            Find What
            <br />
            <span className="italic text-[#C69B61]">Speaks to You</span>
          </h2>
        </div>

        {/* Center: Description */}
        <p className="max-w-[520px] font-[family-name:var(--font-questrial)] text-base leading-[1.536] tracking-[0.07em] text-black/50 sm:text-lg md:text-xl lg:text-[24px]">
          Explore our carefully selected range of skincare, beauty and fragrance
          - curated to complement your individual routine and style.
        </p>

        {/* Right: Round Arrow Buttons */}
        <div className="flex shrink-0 items-center justify-end">
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
        className="categories-track flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-none md:gap-7 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible xl:gap-[38px]"
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/#bestsellers`}
            className="block"
          >
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="category-card group relative h-[450px] w-[85%] shrink-0 snap-center overflow-hidden rounded-[32px] sm:w-[70%] md:h-[530px] md:rounded-[40px] lg:h-[587px] lg:w-auto shadow-[0_12px_40px_rgba(0,0,0,0.06)] cursor-pointer"
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
              <div className="absolute inset-x-0 bottom-7 flex justify-center px-6 sm:bottom-8 md:bottom-10">
                <div className="flex h-[66px] w-full max-w-[386px] items-center justify-center rounded-[19px] border border-white/40 bg-white/[0.62] px-6 backdrop-blur-md transition-all duration-300 group-hover:bg-white/[0.88] group-hover:scale-[1.02] shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:h-[74px] md:h-[80px]">
                  <h3 className="font-[family-name:var(--font-questrial)] text-[22px] tracking-[0.08em] text-black sm:text-[28px] md:text-[34px] lg:text-[37px] lg:leading-[1.536]">
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
