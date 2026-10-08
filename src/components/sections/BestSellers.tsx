"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { products, type ProductItem } from "@/data/content";
import { images } from "@/lib/assets";
import { useCart } from "@/context/CartContext";

const tabs = ["SKINCARE", "FRAGRANCE", "BEAUTY"] as const;
type Tab = (typeof tabs)[number];

export function BestSellers() {
  const [activeTab, setActiveTab] = useState<Tab>("SKINCARE");
  const { addToCart } = useCart();

  const filtered = useMemo(() => {
    const key = activeTab.toLowerCase() as ProductItem["category"];
    const matched = products.filter((p) => p.category === key);
    // If only 1 matches the category, still show 3 for rich presentation, placing the active category first
    if (matched.length > 0 && matched.length < 3) {
      const rest = products.filter((p) => p.category !== key);
      return [...matched, ...rest].slice(0, 3);
    }
    return matched.length >= 3 ? matched : products;
  }, [activeTab]);

  return (
    <section
      id="bestsellers"
      className="bestsellers-section relative mx-auto w-full max-w-[1920px] overflow-hidden rounded-[40px] bg-[#F7EFE5] px-6 py-14 md:rounded-[60px] md:px-10 md:py-20 lg:rounded-[75px] xl:px-[126px] xl:py-[63px]"
    >
      {/* ========================================================
          TOP HEADER: Left Gold Line + PRODUCTS THAT ARE AMONG + Right Gold Line
         ======================================================== */}
      <div className="mx-auto flex max-w-[1668px] items-center justify-center gap-4 sm:gap-6 md:gap-8">
        <span className="h-[2px] min-w-0 flex-1 bg-[#FFC475]" />
        <p className="shrink-0 font-[family-name:var(--font-questrial)] text-xs uppercase tracking-[0.07em] text-black/50 sm:text-base md:text-xl lg:text-[24px] lg:leading-[25px]">
          PRODUCTS THAT ARE AMONG
        </p>
        <span className="h-[2px] min-w-0 flex-1 bg-[#FFC475]" />
      </div>

      {/* Headline & Subtitle */}
      <div className="mt-7 text-center md:mt-10">
        <h2 className="font-[family-name:var(--font-display)] text-[44px] font-normal leading-[0.95] text-black sm:text-[60px] md:text-[72px] lg:text-[80px] lg:leading-[76px]">
          Our <span className="italic text-[#C69B61]">Best Sellers</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[810px] font-[family-name:var(--font-questrial)] text-base leading-[1.536] tracking-[0.07em] text-black/50 sm:text-lg md:text-xl lg:text-[24px]">
          Our most loved skincare, beauty &amp; fragrance essentials - carefully
          selected for your everyday glow.
        </p>
      </div>

      {/* ========================================================
          MAIN CONTENT: Featured Card (Left) + Tabs & Product Cards (Right)
         ======================================================== */}
      <div className="mt-10 grid items-start gap-8 lg:mt-12 lg:grid-cols-[1fr] xl:grid-cols-[783px_1fr] xl:gap-[23px]">
        {/* Left Column: Big Featured Card */}
        <article className="bestseller-featured relative min-h-[520px] w-full overflow-hidden rounded-[21px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:min-h-[660px] xl:h-[760px] xl:w-[783px]">
          <Image
            src={images.bestsellerFeatured}
            alt="Clearer, Healthier Glowing Skin"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 783px"
          />
          {/* Subtle dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          {/* Featured Content overlay */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-7 sm:p-10 md:p-12 xl:bottom-[50px] xl:left-[44px] xl:p-0">
            <span className="font-[family-name:var(--font-questrial)] text-sm tracking-[0.46em] text-[#FFC475] sm:text-base md:text-[18px]">
              SKINCARE
            </span>

            <h3 className="mt-3 max-w-[320px] font-[family-name:var(--font-display)] text-[32px] font-normal leading-[1.05] text-white sm:text-[38px] md:text-[43px] md:leading-[45px]">
              Clearer, Healthier Glowing Skin
            </h3>

            <p className="mt-3.5 max-w-[280px] font-[family-name:var(--font-questrial)] text-sm leading-[1.31] tracking-[0.03em] text-white/70 sm:text-base md:text-[18px]">
              A carefully selected skincare essential designed to support a
              fresh, healthy-looking glow and make your everyday routine feel
              effortless.
            </p>

            {/* Divider line 125px */}
            <div className="mt-4 h-px w-[125px] bg-[#9F9F9F]" />

            {/* Price & Action Row */}
            <div className="mt-3 flex items-center gap-5">
              <p className="font-[family-name:var(--font-questrial)] text-[38px] tracking-[0.03em] text-[#FFC475] sm:text-[44px] md:text-[49px]">
                $42
              </p>
              <Link
                href="/products/serum"
                className="rounded-full bg-white/90 px-5 py-2.5 font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-widest uppercase text-black backdrop-blur-md transition-all hover:bg-[#FFC475] hover:text-black hover:scale-105"
              >
                View Ritual
              </Link>
              <button
                type="button"
                onClick={() =>
                  addToCart({
                    id: "serum",
                    name: "Hydrating Serum",
                    price: 42,
                    image: images.productSerum,
                    category: "skincare",
                    variantLabel: "Full Size",
                    volume: "50ml",
                  })
                }
                className="rounded-full bg-[#FFC475] px-5 py-2.5 font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-widest uppercase text-black transition-all hover:bg-[#ffba61] hover:scale-105"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </article>

        {/* Right Column: Tabs Header + Arrow Buttons + 3 Product Cards */}
        <div className="flex flex-col">
          {/* Tabs + Arrow Buttons Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
            {/* Category Tabs */}
            <div className="relative flex items-center">
              <div className="flex items-center gap-7 sm:gap-10 md:gap-12">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`relative pb-3 font-[family-name:var(--font-questrial)] text-sm tracking-[0.07em] transition-colors md:text-[18px] ${
                        isActive
                          ? "font-medium text-black"
                          : "text-black/33 hover:text-black/60"
                      }`}
                    >
                      {tab}
                      {isActive && (
                        <motion.span
                          layoutId="bestsellers-tab-indicator"
                          className="absolute inset-x-0 -bottom-[2px] z-10 h-[2px] bg-black"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              {/* Gray baseline underneath tabs */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] w-full bg-[#E6E6E6]" />
            </div>

            {/* Arrow Navigation Buttons */}
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                aria-label="Previous Products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-[48.5px] w-[57px] items-center justify-center rounded-[47px] border border-black bg-transparent transition-colors hover:bg-black/5"
              >
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  aria-hidden
                  className="text-black"
                >
                  <path
                    d="M14 5.5H1M1 5.5L6 1M1 5.5L6 10"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>

              <motion.button
                type="button"
                aria-label="Next Products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-[48.5px] w-[57px] items-center justify-center rounded-[47px] bg-black transition-colors hover:bg-neutral-800"
              >
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  aria-hidden
                  className="text-white"
                >
                  <path
                    d="M1 5.5H14M14 5.5L9 1M14 5.5L9 10"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* 3 Product Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-[23px]"
            >
              {filtered.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: ProductItem }) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.numericPrice,
      image: product.image,
      category: product.category,
      variantLabel: product.variants?.[0]?.label || "Standard",
      volume: product.volume,
    });
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="product-card group relative flex h-full w-full flex-col overflow-hidden rounded-[21px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:max-w-[285px] xl:h-[638px] xl:w-[267px]"
    >
      {/* Product Image */}
      <Link
        href={`/products/${product.id}`}
        className="relative block aspect-[267/494] w-full overflow-hidden rounded-[21px] bg-[#B3B2B2] xl:h-[494px]"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 267px"
        />
        {product.badge && (
          <span className="absolute left-3.5 top-3.5 rounded-full bg-black/80 px-3 py-1 font-[family-name:var(--font-questrial)] text-[10px] tracking-widest uppercase text-white backdrop-blur-md">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Product Information */}
      <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-4">
        {/* Title */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-[family-name:var(--font-questrial)] text-[16px] uppercase tracking-[0.03em] text-black transition-colors hover:text-[#C69B61] md:text-[18px]">
            {product.name}
          </h3>
        </Link>

        {/* Price & Cart Button Row */}
        <div className="mt-3 flex items-center justify-between">
          <p className="font-[family-name:var(--font-questrial)] text-[38px] tracking-[0.03em] text-black md:text-[49px]">
            {product.price}
          </p>

          {/* Yellow Round Cart Button with exact cart SVG icon */}
          <motion.button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="flex size-[52px] items-center justify-center rounded-full bg-[#FFC475] transition-colors duration-200 hover:bg-[#ffba61] shadow-sm md:size-[59px]"
          >
            <svg
              viewBox="220 0 41 32"
              fill="none"
              className="h-[21px] w-auto text-black"
              aria-hidden
            >
              <path
                d="M259.008 1.25H252.918C251.756 1.25 250.597 2.14041 250.281 3.27713L248.636 9.19297C248.448 9.13976 248.25 9.10899 248.044 9.10899H234.194C233.526 6.07964 230.859 3.80874 227.679 3.80874C223.996 3.80874 221 6.853 221 10.5946C221 14.0184 223.51 16.8568 226.758 17.3144C226.756 17.3586 226.756 17.4032 226.761 17.4485L227.106 21.0038C227.228 22.2634 228.3 23.25 229.546 23.25H244.817C245.984 23.25 247.137 22.353 247.442 21.2081L249.352 14.0326L249.352 14.0322L252.19 3.82527C252.267 3.54831 252.635 3.26584 252.918 3.26584H259.008C259.556 3.26584 260 2.81473 260 2.25799C260 1.70125 259.556 1.25 259.008 1.25ZM222.984 10.5946C222.984 7.96433 225.09 5.82445 227.679 5.82445C230.268 5.82445 232.374 7.96433 232.374 10.5946C232.374 13.2248 230.268 15.3647 227.679 15.3647C225.09 15.3647 222.984 13.2249 222.984 10.5946ZM245.527 20.6819C245.454 20.9554 245.096 21.2343 244.817 21.2343H229.546C229.328 21.2343 229.102 21.0261 229.08 20.8059L228.739 17.2938C231.751 16.8034 234.096 14.2595 234.335 11.1247H248.044C248.053 11.1247 248.062 11.1251 248.069 11.1256C248.068 11.1332 248.066 11.1416 248.064 11.1509L245.527 20.6819Z"
                fill="currentColor"
              />
              <path
                d="M232 24.25C230.346 24.25 229 25.5958 229 27.25C229 28.9042 230.346 30.25 232 30.25C233.654 30.25 235 28.9042 235 27.25C235 25.5958 233.654 24.25 232 24.25ZM232 28.321C231.409 28.321 230.929 27.8405 230.929 27.25C230.929 26.6595 231.409 26.179 232 26.179C232.59 26.179 233.071 26.6595 233.071 27.25C233.071 27.8405 232.59 28.321 232 28.321Z"
                fill="currentColor"
              />
              <path
                d="M242 24.25C240.346 24.25 239 25.5958 239 27.25C239 28.9042 240.346 30.25 242 30.25C243.654 30.25 245 28.9042 245 27.25C245 25.5958 243.654 24.25 242 24.25ZM242 28.321C241.409 28.321 240.929 27.8405 240.929 27.25C240.929 26.6595 241.409 26.179 242 26.179C242.591 26.179 243.071 26.6595 243.071 27.25C243.071 27.8405 242.591 28.321 242 28.321Z"
                fill="currentColor"
              />
              <path
                d="M228.506 13.0997V11.4008H229.993C230.549 11.4008 231 10.8859 231 10.2504C231 9.61487 230.549 9.09992 229.993 9.09992H228.506V7.40046C228.506 6.76495 228.056 6.25 227.5 6.25C226.944 6.25 226.493 6.76495 226.493 7.40046V9.09977H225.007C224.451 9.09977 224 9.61471 224 10.2502C224 10.8857 224.451 11.4007 225.007 11.4007H226.493V13.0995C226.493 13.7351 226.944 14.25 227.5 14.25C228.056 14.25 228.506 13.7351 228.506 13.0997Z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
