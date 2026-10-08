"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    shippingCost,
    freeShippingProgress,
    amountToFreeShipping,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.aside
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative flex h-full w-full max-w-[480px] flex-col bg-[#FAF6F0] text-black shadow-2xl sm:border-l sm:border-[#FFC475]/30"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping Bag"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <ShoppingBag className="size-5 text-[#C69B61]" />
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-normal tracking-wide text-black sm:text-3xl">
                  Shopping <span className="italic text-[#C69B61]">Bag</span>
                </h2>
                <span className="flex size-6 items-center justify-center rounded-full bg-[#FFC475] font-[family-name:var(--font-questrial)] text-xs font-semibold text-black">
                  {totalItems}
                </span>
              </div>

              <motion.button
                type="button"
                onClick={closeCart}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex size-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black transition-colors hover:bg-black hover:text-white"
                aria-label="Close Shopping Bag"
              >
                <X className="size-5" />
              </motion.button>
            </div>

            {/* Free Shipping Tier Banner */}
            <div className="border-b border-black/8 bg-[#F3EBE1] px-6 py-3.5 sm:px-8">
              <div className="flex items-center justify-between text-xs tracking-wider text-black/75 sm:text-sm">
                <span className="flex items-center gap-1.5 font-medium">
                  <Truck className="size-4 text-[#C69B61]" />
                  {amountToFreeShipping === 0 ? (
                    <span className="font-semibold text-emerald-800">
                      Complimentary Luxury Delivery Unlocked!
                    </span>
                  ) : (
                    <span>
                      Add{" "}
                      <strong className="text-black">
                        ${amountToFreeShipping.toFixed(2)}
                      </strong>{" "}
                      for free express shipping
                    </span>
                  )}
                </span>
                <span className="font-bold text-[#C69B61]">
                  {freeShippingProgress}%
                </span>
              </div>
              {/* Progress Bar */}
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${freeShippingProgress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[#FFC475] to-[#C69B61]"
                />
              </div>
            </div>

            {/* Body: Items or Empty state */}
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                <div className="flex size-20 items-center justify-center rounded-full bg-[#F3EBE1] text-[#C69B61] shadow-inner">
                  <ShoppingBag className="size-9 stroke-[1.5]" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-normal text-black">
                  Your bag is empty
                </h3>
                <p className="mt-2 max-w-[280px] font-[family-name:var(--font-questrial)] text-sm leading-relaxed text-black/60">
                  Looks like you haven&apos;t added any luxury rituals to your
                  bag yet.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-6 flex items-center gap-2 rounded-full bg-black px-7 py-3.5 font-[family-name:var(--font-questrial)] text-sm tracking-widest uppercase text-white transition-all hover:bg-neutral-800 hover:shadow-lg"
                >
                  <span>Explore Best Sellers</span>
                  <ArrowRight className="size-4 text-[#FFC475]" />
                </button>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-6 py-4 sm:px-8">
                <ul className="divide-y divide-black/8">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.li
                        key={`${item.id}-${item.variantLabel || ""}`}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="py-5"
                      >
                        <div className="flex gap-4">
                          {/* Image */}
                          <Link
                            href={`/products/${item.id}`}
                            onClick={closeCart}
                            className="group relative size-20 shrink-0 overflow-hidden rounded-[14px] border border-black/10 bg-white p-1 sm:size-24"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="96px"
                            />
                          </Link>

                          {/* Details */}
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                {item.category && (
                                  <span className="font-[family-name:var(--font-questrial)] text-[11px] font-semibold tracking-[0.2em] text-[#C69B61] uppercase">
                                    {item.category}
                                  </span>
                                )}
                                <Link
                                  href={`/products/${item.id}`}
                                  onClick={closeCart}
                                  className="line-clamp-1 font-[family-name:var(--font-questrial)] text-base font-medium tracking-wide text-black transition-colors hover:text-[#C69B61]"
                                >
                                  {item.name}
                                </Link>
                                {item.variantLabel && (
                                  <p className="mt-0.5 text-xs text-black/50">
                                    {item.variantLabel}{" "}
                                    {item.volume && `· ${item.volume}`}
                                  </p>
                                )}
                              </div>

                              {/* Remove Button */}
                              <button
                                type="button"
                                onClick={() =>
                                  removeFromCart(item.id, item.variantLabel)
                                }
                                aria-label={`Remove ${item.name}`}
                                className="p-1 text-black/40 transition-colors hover:text-red-600"
                              >
                                <Trash2 className="size-4" />
                              </button>
                            </div>

                            {/* Price & Quantity Selector */}
                            <div className="mt-3 flex items-center justify-between">
                              {/* Quantity Pill */}
                              <div className="flex items-center rounded-full border border-black/15 bg-white px-2 py-1 shadow-2xs">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      item.quantity - 1,
                                      item.variantLabel,
                                    )
                                  }
                                  aria-label="Decrease quantity"
                                  className="flex size-6 items-center justify-center text-black/60 transition-colors hover:text-black"
                                >
                                  <Minus className="size-3" />
                                </button>
                                <span className="min-w-[24px] text-center font-[family-name:var(--font-questrial)] text-sm font-semibold text-black">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      item.quantity + 1,
                                      item.variantLabel,
                                    )
                                  }
                                  aria-label="Increase quantity"
                                  className="flex size-6 items-center justify-center text-black/60 transition-colors hover:text-black"
                                >
                                  <Plus className="size-3" />
                                </button>
                              </div>

                              {/* Price */}
                              <p className="font-[family-name:var(--font-questrial)] text-lg font-medium text-black">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
            )}

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="border-t border-black/10 bg-[#F4EDE4] p-6 sm:px-8">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between font-[family-name:var(--font-questrial)] text-black/70">
                    <span>Subtotal</span>
                    <span className="font-medium text-black">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between font-[family-name:var(--font-questrial)] text-black/70">
                    <span>Shipping</span>
                    <span>
                      {shippingCost === 0 ? (
                        <span className="font-semibold text-emerald-800">
                          Complimentary
                        </span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between border-t border-black/10 pt-2 font-[family-name:var(--font-display)] text-xl text-black">
                    <span>Estimated Total</span>
                    <span className="text-2xl font-normal text-black">
                      ${(subtotal + shippingCost).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Primary CTA Checkout */}
                <div className="mt-5 space-y-2.5">
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-black py-4 font-[family-name:var(--font-questrial)] text-base font-medium tracking-widest uppercase text-white shadow-lg transition-all duration-300 hover:bg-[#1f1a14] hover:shadow-xl hover:ring-2 hover:ring-[#FFC475]"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="size-4 text-[#FFC475]" />
                  </Link>

                  <button
                    type="button"
                    onClick={closeCart}
                    className="w-full py-2 text-center font-[family-name:var(--font-questrial)] text-xs tracking-wider text-black/60 uppercase transition-colors hover:text-black"
                  >
                    Continue Shopping
                  </button>
                </div>

                {/* Perks guarantee strip */}
                <div className="mt-4 flex items-center justify-center gap-5 border-t border-black/8 pt-3 text-[11px] text-black/60">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="size-3.5 text-[#C69B61]" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="size-3.5 text-[#C69B61]" />
                    <span>Free Samples</span>
                  </div>
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
