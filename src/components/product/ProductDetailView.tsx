"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
  ChevronRight,
  Plus,
  Minus,
  Check,
  Heart,
  Share2,
  ChevronDown,
  ShoppingBag,
  ArrowRight,
  Leaf,
  Droplets,
  Award,
} from "lucide-react";
import { products, type ProductItem } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";

export function ProductDetailView({ productId }: { productId: string }) {
  const router = useRouter();
  const { addToCart } = useCart();

  // Find product or fallback to the first
  const product =
    products.find((p) => p.id === productId) || products[0];

  const gallery = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || {
      label: "Standard",
      volume: product.volume || "50ml",
      price: product.numericPrice,
    },
  );
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    "ingredients",
  );
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Recommendations: exclude current product
  const recommendations = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: selectedVariant.price,
        image: product.image,
        category: product.category,
        variantLabel: selectedVariant.label,
        volume: selectedVariant.volume,
      },
      quantity,
    );
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  const handleInstantCheckout = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: selectedVariant.price,
        image: product.image,
        category: product.category,
        variantLabel: selectedVariant.label,
        volume: selectedVariant.volume,
      },
      quantity,
    );
    router.push("/checkout");
  };

  const toggleAccordion = (key: string) => {
    setActiveAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-black">
      {/* Universal Luxury Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="mx-auto w-full max-w-[1780px] px-4 pt-28 sm:px-8 sm:pt-36 lg:px-16 lg:pt-44">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 font-[family-name:var(--font-questrial)] text-xs tracking-wider text-black/50 sm:text-sm"
        >
          <Link href="/" className="transition-colors hover:text-black">
            Home
          </Link>
          <ChevronRight className="size-3 text-black/30" />
          <Link
            href="/#categories"
            className="capitalize transition-colors hover:text-black"
          >
            {product.category}
          </Link>
          <ChevronRight className="size-3 text-black/30" />
          <span className="font-medium text-black">{product.name}</span>
        </nav>

        {/* Product Hero Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Left Column: Image Gallery (lg: 6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="sticky top-28 space-y-4">
              {/* Main Display Image */}
              <motion.div
                layout
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-[#FFC475]/30 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Badge Overlay */}
                {product.badge && (
                  <div className="absolute left-6 top-6">
                    <span className="rounded-full bg-black/85 px-4 py-1.5 font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-widest uppercase text-white backdrop-blur-md">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Floating Button */}
                <button
                  type="button"
                  onClick={() => setIsWishlisted((prev) => !prev)}
                  aria-label="Save to Wishlist"
                  className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full bg-white/90 text-black shadow-md backdrop-blur-md transition-all hover:scale-110"
                >
                  <Heart
                    className={`size-5 transition-colors ${
                      isWishlisted
                        ? "fill-[#C69B61] text-[#C69B61]"
                        : "text-black/70 hover:text-black"
                    }`}
                  />
                </button>
              </motion.div>

              {/* Thumbnail Gallery Selector */}
              {gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {gallery.map((img, index) => {
                    const isSelected = activeImage === img;
                    return (
                      <button
                        key={`${img}-${index}`}
                        type="button"
                        onClick={() => setActiveImage(img)}
                        aria-label={`View image ${index + 1}`}
                        className={`relative size-20 shrink-0 overflow-hidden rounded-[16px] border-2 bg-white transition-all sm:size-24 ${
                          isSelected
                            ? "border-[#C69B61] shadow-md ring-2 ring-[#FFC475]/40"
                            : "border-black/10 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${product.name} view ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Brand Philosophy Badges under image */}
              <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
                <div className="flex flex-col items-center rounded-2xl border border-black/5 bg-[#F7EFE5]/50 p-3 text-center">
                  <Leaf className="size-5 text-[#C69B61]" />
                  <span className="mt-1 font-[family-name:var(--font-questrial)] text-[11px] font-semibold tracking-wider text-black/75 uppercase">
                    100% Vegan
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-2xl border border-black/5 bg-[#F7EFE5]/50 p-3 text-center">
                  <Award className="size-5 text-[#C69B61]" />
                  <span className="mt-1 font-[family-name:var(--font-questrial)] text-[11px] font-semibold tracking-wider text-black/75 uppercase">
                    Cruelty Free
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-2xl border border-black/5 bg-[#F7EFE5]/50 p-3 text-center">
                  <Droplets className="size-5 text-[#C69B61]" />
                  <span className="mt-1 font-[family-name:var(--font-questrial)] text-[11px] font-semibold tracking-wider text-black/75 uppercase">
                    Clean Active
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-2xl border border-black/5 bg-[#F7EFE5]/50 p-3 text-center">
                  <Sparkles className="size-5 text-[#C69B61]" />
                  <span className="mt-1 font-[family-name:var(--font-questrial)] text-[11px] font-semibold tracking-wider text-black/75 uppercase">
                    Eco Flacon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details & Actions (lg: 6 cols) */}
          <div className="flex flex-col lg:col-span-6 xl:col-span-6">
            {/* Category Tag */}
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-[0.35em] text-[#C69B61] uppercase">
                {product.category} · Signature Ritual
              </span>
              <span className="flex items-center gap-1 font-[family-name:var(--font-questrial)] text-xs text-black/50">
                <ShieldCheck className="size-3.5 text-emerald-700" />
                In Stock &amp; Ready to Ship
              </span>
            </div>

            {/* Product Title */}
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight text-black sm:text-5xl lg:text-[54px] lg:leading-[1.1]">
              {product.name}
            </h1>

            {/* Subtitle */}
            {product.subtitle && (
              <p className="mt-2 font-[family-name:var(--font-questrial)] text-base italic text-black/60 sm:text-lg">
                {product.subtitle}
              </p>
            )}

            {/* Star Rating & Social Proof */}
            <div className="mt-4 flex items-center gap-3 border-b border-black/10 pb-5">
              <div className="flex items-center gap-1 text-[#C69B61]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-[#FFC475] text-[#FFC475]" />
                ))}
              </div>
              <span className="font-[family-name:var(--font-questrial)] text-sm font-semibold text-black">
                {product.rating || 4.9}
              </span>
              <span className="text-black/30">·</span>
              <a
                href="#reviews"
                className="font-[family-name:var(--font-questrial)] text-sm text-black/60 underline decoration-black/20 underline-offset-4 transition-colors hover:text-black"
              >
                {product.reviewCount || 120} Verified Ritual Reviews
              </a>
            </div>

            {/* Price & Value Row */}
            <div className="mt-6 flex flex-wrap items-baseline gap-4">
              <span className="font-[family-name:var(--font-questrial)] text-4xl font-normal text-black sm:text-5xl">
                ${selectedVariant.price}
              </span>
              {product.originalPrice && (
                <span className="font-[family-name:var(--font-questrial)] text-2xl text-black/40 line-through">
                  {product.originalPrice}
                </span>
              )}
              <span className="rounded-full bg-[#F7EFE5] px-3 py-1 font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-[#C69B61] uppercase">
                Complimentary Shipping Included
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="mt-5 font-[family-name:var(--font-questrial)] text-base leading-relaxed text-black/70 sm:text-lg">
              {product.description}
            </p>

            {/* Variant / Volume Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-[0.2em] text-black/75 uppercase">
                    Select Volume / Edition
                  </label>
                  <span className="font-[family-name:var(--font-questrial)] text-xs text-black/50">
                    Selected: {selectedVariant.volume}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant.label === v.label;
                    return (
                      <button
                        key={v.label}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`flex flex-col items-center justify-center rounded-2xl border p-3.5 transition-all ${
                          isSelected
                            ? "border-black bg-black text-white shadow-lg"
                            : "border-black/15 bg-white text-black hover:border-black/40"
                        }`}
                      >
                        <span className="font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider uppercase">
                          {v.label}
                        </span>
                        <span
                          className={`mt-1 font-[family-name:var(--font-questrial)] text-xs ${
                            isSelected ? "text-[#FFC475]" : "text-black/60"
                          }`}
                        >
                          {v.volume} · ${v.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Add to Bag Row */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Stepper Pill */}
              <div className="flex h-[58px] items-center justify-between rounded-full border border-black/20 bg-white px-4 shadow-sm sm:w-[150px]">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="flex size-9 items-center justify-center rounded-full text-black/60 transition-colors hover:bg-black/5 hover:text-black"
                >
                  <Minus className="size-4" />
                </button>
                <span className="font-[family-name:var(--font-questrial)] text-lg font-semibold text-black">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="flex size-9 items-center justify-center rounded-full text-black/60 transition-colors hover:bg-black/5 hover:text-black"
                >
                  <Plus className="size-4" />
                </button>
              </div>

              {/* Add to Bag CTA (Yellow/Gold Pill) */}
              <motion.button
                type="button"
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-[58px] flex-1 items-center justify-center gap-3 rounded-full bg-[#FFC475] px-8 font-[family-name:var(--font-questrial)] text-base font-semibold tracking-widest uppercase text-black shadow-lg transition-all duration-300 hover:bg-[#ffba61] hover:shadow-xl"
              >
                <ShoppingBag className="size-5" />
                <span>Add to Shopping Bag</span>
              </motion.button>

              {/* Instant Buy Button */}
              <motion.button
                type="button"
                onClick={handleInstantCheckout}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-[58px] items-center justify-center rounded-full bg-black px-7 font-[family-name:var(--font-questrial)] text-sm font-semibold tracking-widest uppercase text-white transition-all hover:bg-neutral-800"
              >
                Instant Buy
              </motion.button>
            </div>

            {/* Notification Toast */}
            <AnimatePresence>
              {addedToast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center justify-between rounded-2xl bg-black px-5 py-3.5 text-white shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-[#FFC475]" />
                    <span className="font-[family-name:var(--font-questrial)] text-sm">
                      Added {quantity} × {product.name} to your bag!
                    </span>
                  </div>
                  <Link
                    href="/checkout"
                    className="font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-[#FFC475] uppercase underline underline-offset-2"
                  >
                    Checkout Now
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Perks Reassurance Strip */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-black/10 py-5 sm:grid-cols-3">
              <div className="flex items-center gap-2.5">
                <Truck className="size-5 text-[#C69B61]" />
                <div className="text-xs">
                  <p className="font-semibold text-black">Fast Delivery</p>
                  <p className="text-black/50">Dispatches in 24h</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="size-5 text-[#C69B61]" />
                <div className="text-xs">
                  <p className="font-semibold text-black">Luxury Samples</p>
                  <p className="text-black/50">2 gifts with order</p>
                </div>
              </div>
              <div className="col-span-2 flex items-center gap-2.5 sm:col-span-1">
                <ShieldCheck className="size-5 text-[#C69B61]" />
                <div className="text-xs">
                  <p className="font-semibold text-black">30-Day Ritual Trial</p>
                  <p className="text-black/50">Hassle-free returns</p>
                </div>
              </div>
            </div>

            {/* Collapsible Accordions (Ingredients, Ritual, Highlights) */}
            <div className="mt-6 divide-y divide-black/10">
              {/* Accordion: Ingredients */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion("ingredients")}
                  className="flex w-full items-center justify-between text-left font-[family-name:var(--font-display)] text-xl text-black"
                >
                  <span>Key Ingredients &amp; Formulation</span>
                  <ChevronDown
                    className={`size-5 text-[#C69B61] transition-transform duration-300 ${
                      activeAccordion === "ingredients" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeAccordion === "ingredients" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pt-3"
                    >
                      <ul className="space-y-2 font-[family-name:var(--font-questrial)] text-sm text-black/70">
                        {(
                          product.ingredients || [
                            "Bio-Compatible Hyaluronic Complex",
                            "Fermented Botanical Peptides",
                            "Squalane from Olive Fruit",
                          ]
                        ).map((ing, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#C69B61]" />
                            <span>{ing}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion: Application Ritual */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion("ritual")}
                  className="flex w-full items-center justify-between text-left font-[family-name:var(--font-display)] text-xl text-black"
                >
                  <span>The Application Ritual</span>
                  <ChevronDown
                    className={`size-5 text-[#C69B61] transition-transform duration-300 ${
                      activeAccordion === "ritual" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeAccordion === "ritual" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pt-3 font-[family-name:var(--font-questrial)] text-sm leading-relaxed text-black/70"
                    >
                      <p>
                        {product.ritual ||
                          "Warm a few drops between clean fingertips. Press mindfully across cleansed face and neck in upward sweeping movements."}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion: Benefits & Results */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion("benefits")}
                  className="flex w-full items-center justify-between text-left font-[family-name:var(--font-display)] text-xl text-black"
                >
                  <span>Clinically Proven Benefits</span>
                  <ChevronDown
                    className={`size-5 text-[#C69B61] transition-transform duration-300 ${
                      activeAccordion === "benefits" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeAccordion === "benefits" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pt-3"
                    >
                      <ul className="space-y-2 font-[family-name:var(--font-questrial)] text-sm text-black/70">
                        {(
                          product.benefits || [
                            "72-hour moisture saturation",
                            "Promotes luminous, glass-like elasticity",
                            "Fortifies natural lipid barrier",
                          ]
                        ).map((ben, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="mt-0.5 size-4 shrink-0 text-emerald-700" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Complete The Ritual (Recommendations) */}
        <section className="mt-24 border-t border-black/10 pt-16 lg:mt-32">
          <div className="text-center">
            <p className="font-[family-name:var(--font-questrial)] text-xs uppercase tracking-[0.3em] text-[#C69B61]">
              PAIR PERFECTLY WITH
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-normal text-black sm:text-4xl md:text-5xl">
              Complete Your <span className="italic text-[#C69B61]">Ritual</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link
                  href={`/products/${item.id}`}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] bg-[#F7EFE5]"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />
                  {item.badge && (
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-black/80 px-3 py-1 font-[family-name:var(--font-questrial)] text-[10px] tracking-widest uppercase text-white backdrop-blur-md">
                      {item.badge}
                    </span>
                  )}
                </Link>

                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="font-[family-name:var(--font-questrial)] text-[11px] font-semibold tracking-widest text-[#C69B61] uppercase">
                      {item.category}
                    </span>
                    <Link href={`/products/${item.id}`}>
                      <h3 className="mt-1 font-[family-name:var(--font-questrial)] text-lg font-medium text-black transition-colors hover:text-[#C69B61]">
                        {item.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-[family-name:var(--font-questrial)] text-2xl font-normal text-black">
                      {item.price}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.numericPrice,
                          image: item.image,
                          category: item.category,
                          variantLabel: item.variants?.[0]?.label || "Standard",
                          volume: item.volume,
                        })
                      }
                      className="flex size-11 items-center justify-center rounded-full bg-[#FFC475] text-black transition-transform hover:scale-110 hover:bg-[#ffba61]"
                      aria-label={`Add ${item.name} to bag`}
                    >
                      <Plus className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Customer Reviews Highlight */}
        <section id="reviews" className="mt-24 rounded-[36px] bg-[#F7EFE5] p-8 md:p-14 lg:mt-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-[family-name:var(--font-questrial)] text-xs uppercase tracking-[0.3em] text-black/50">
                VERIFIED CUSTOMER STORIES
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-normal text-black sm:text-4xl">
                Ritual <span className="italic text-[#C69B61]">Experiences</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex text-[#C69B61]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 fill-[#FFC475] text-[#FFC475]" />
                ))}
              </div>
              <span className="font-[family-name:var(--font-questrial)] text-lg font-semibold text-black">
                4.9 out of 5.0
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-xs">
              <div className="flex text-[#C69B61]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-[#FFC475] text-[#FFC475]" />
                ))}
              </div>
              <p className="mt-3 font-[family-name:var(--font-questrial)] text-sm leading-relaxed text-black/80">
                &quot;The texture is unbelievable. Within three days of incorporating this into my morning routine, my skin looked like I just left a luxury spa.&quot;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 text-xs text-black/50">
                <span className="font-semibold text-black">Elena V.</span>
                <span className="text-emerald-700">Verified Buyer</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs">
              <div className="flex text-[#C69B61]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-[#FFC475] text-[#FFC475]" />
                ))}
              </div>
              <p className="mt-3 font-[family-name:var(--font-questrial)] text-sm leading-relaxed text-black/80">
                &quot;The packaging alone feels like art on my vanity. And the scent is so soft, comforting and intoxicating without irritating my delicate skin.&quot;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 text-xs text-black/50">
                <span className="font-semibold text-black">Camille R.</span>
                <span className="text-emerald-700">Verified Buyer</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs">
              <div className="flex text-[#C69B61]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-[#FFC475] text-[#FFC475]" />
                ))}
              </div>
              <p className="mt-3 font-[family-name:var(--font-questrial)] text-sm leading-relaxed text-black/80">
                &quot;I have repurchased this three times now. The formulation is pure perfection. My makeup sits so smoothly on top of it.&quot;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 text-xs text-black/50">
                <span className="font-semibold text-black">Sophia M.</span>
                <span className="text-emerald-700">Verified Buyer</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
