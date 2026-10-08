"use client";

import { motion } from "framer-motion";

interface NavArrowButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
  size?: "lg" | "sm";
  className?: string;
}

export function NavArrowButtons({
  onPrev,
  onNext,
  size = "lg",
  className = "",
}: NavArrowButtonsProps) {
  const dims =
    size === "lg"
      ? "size-14 sm:size-16 md:size-[76px] lg:size-[84px]"
      : "size-11 sm:size-12 md:size-14";

  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      {/* Previous Button (Peach/Gold Circle with Black Arrow) */}
      <motion.button
        type="button"
        aria-label="Previous"
        onClick={onPrev}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${dims} flex aspect-square shrink-0 items-center justify-center rounded-full bg-[#FFD6A4] transition-colors duration-200 hover:bg-[#ffc98a] shadow-sm`}
      >
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          aria-hidden
          className="text-black"
        >
          <path
            d="M23 9H2M2 9L9 2M2 9L9 16"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Next Button (Black Circle with White Arrow) */}
      <motion.button
        type="button"
        aria-label="Next"
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${dims} flex aspect-square shrink-0 items-center justify-center rounded-full bg-black transition-colors duration-200 hover:bg-neutral-800 shadow-sm`}
      >
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          aria-hidden
          className="text-white"
        >
          <path
            d="M1 9H22M22 9L15 2M22 9L15 16"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
}
