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
    <footer className="px-6 pb-8 pt-14 md:px-10 lg:px-[134px] lg:pb-10 lg:pt-16">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <a
          href="#home"
          className="font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] text-black md:text-5xl"
        >
          G<span className="italic text-[#C69B61]">&</span>L
        </a>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-[family-name:var(--font-nav)] text-base font-bold md:text-lg ${
                  link.label === "Home"
                    ? "text-[#FFC475]"
                    : "text-black/31 hover:text-black/60"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-full max-w-[412px]">
          <p className="font-[family-name:var(--font-questrial)] text-lg uppercase tracking-[0.16em] text-[#FFC475] md:text-[23px]">
            Newsletter
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-3 flex h-[62px] items-center overflow-hidden rounded-[10px] border border-black"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Send Your Email"
              className="h-full min-w-0 flex-1 bg-transparent px-4 font-[family-name:var(--font-nav)] text-base text-black outline-none placeholder:text-black/22 md:text-[23px]"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="m-1.5 h-[52px] shrink-0 rounded-md bg-[#FFC475] px-5 font-[family-name:var(--font-nav)] text-base text-black/47 md:text-lg"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      <div className="mt-10 h-px w-full bg-black/29" />

      <div className="mt-6 flex flex-col gap-3 font-[family-name:var(--font-nav)] text-sm tracking-[0.08em] text-black md:flex-row md:items-center md:justify-between md:text-[23px]">
        <p>© 2026  G&L GLOW. All rights reserved.</p>
        <p className="md:text-right">Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
}
