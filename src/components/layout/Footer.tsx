"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { navLinks } from "@/data/content";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <footer className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[134px] pb-8 pt-12 sm:pt-14 md:pt-16">
      <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between">
        <a
          href="#home"
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl tracking-[0.04em] text-black"
        >
          G<span className="italic text-[#C69B61]">&</span>L
        </a>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-8 sm:gap-y-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-[family-name:var(--font-nav)] text-sm sm:text-base md:text-lg font-bold ${
                  link.label === "Home"
                    ? "text-[#FFC475]"
                    : "text-black/40 hover:text-black"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-full max-w-[412px]">
          <p className="font-[family-name:var(--font-questrial)] text-sm sm:text-base md:text-xl lg:text-[23px] uppercase tracking-[0.16em] text-[#FFC475]">
            Newsletter
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-3 flex h-[52px] sm:h-[58px] md:h-[62px] items-center overflow-hidden rounded-[10px] border border-black"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Send Your Email"
              className="h-full min-w-0 flex-1 bg-transparent px-3 sm:px-4 font-[family-name:var(--font-nav)] text-xs sm:text-sm md:text-lg text-black outline-none placeholder:text-black/30"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="m-1 sm:m-1.5 h-[42px] sm:h-[48px] md:h-[50px] shrink-0 rounded-md bg-[#FFC475] px-3.5 sm:px-5 font-[family-name:var(--font-nav)] text-xs sm:text-sm md:text-base font-semibold text-black"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 h-px w-full bg-black/15" />

      <div className="mt-6 flex flex-col gap-2.5 font-[family-name:var(--font-nav)] text-xs sm:text-sm md:text-base tracking-[0.04em] text-black/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 G&L GLOW. All rights reserved.</p>
        <p className="sm:text-right">Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
}
