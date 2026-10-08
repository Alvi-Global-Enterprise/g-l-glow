"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PillButtonVariant = "solid" | "ghost" | "outline" | "white" | "dark";

interface PillButtonProps {
  children: ReactNode;
  variant?: PillButtonVariant;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  showArrow?: boolean;
  arrowTone?: "gold" | "white" | "dark";
}

const variantClasses: Record<PillButtonVariant, string> = {
  solid: "bg-[#FFC475] text-black",
  ghost: "bg-[rgba(255,196,117,0.2)] text-white",
  outline: "border border-black bg-transparent text-black",
  white: "bg-white text-black",
  dark: "bg-black text-white",
};

const arrowClasses: Record<"gold" | "white" | "dark", string> = {
  gold: "bg-[#D9A96A] text-black",
  white: "bg-white text-black",
  dark: "bg-[#FFC475] text-black",
};

export function PillButton({
  children,
  variant = "solid",
  href,
  className = "",
  type = "button",
  onClick,
  showArrow = true,
  arrowTone = "gold",
}: PillButtonProps) {
  const content = (
    <>
      <span className="px-6 font-[family-name:var(--font-questrial)] text-[17px] tracking-wide md:text-[21px]">
        {children}
      </span>
      {showArrow ? (
        <span
          className={`flex size-12 shrink-0 items-center justify-center rounded-full ${arrowClasses[arrowTone]}`}
        >
          <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            aria-hidden
            className="-rotate-[30deg]"
          >
            <path
              d="M1 6H13M13 6L9 2M13 6L9 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
    </>
  );

  const classes = `inline-flex h-12 items-center rounded-full pl-1 pr-0 transition-shadow ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {content}
    </motion.button>
  );
}
