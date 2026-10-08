"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { navLinks } from "@/data/content";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [active, setActive] = useState(isHome ? "Home" : "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On detail or subpages, or when scrolled, we use a rich luxury dark background so text is 100% visible
  const isSolid = !isHome || scrolled;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:px-6 sm:pt-5 lg:pt-[36px]"
    >
      {/* Floating Glassmorphic Pill Navbar */}
      <nav
        className={`pointer-events-auto relative flex h-16 w-full max-w-[1790px] items-center justify-between rounded-full px-5 backdrop-blur-[28px] transition-all duration-500 md:h-20 md:px-8 lg:h-[96px] lg:px-[60px] xl:px-[68px] ${
          isSolid
            ? "border border-[rgba(255,225,185,0.3)] bg-[rgba(22,14,9,0.94)] shadow-[0_16px_50px_rgba(0,0,0,0.4)]"
            : "border border-[rgba(255,225,185,0.22)] bg-[rgba(35,22,12,0.55)] shadow-[0_12px_40px_rgba(0,0,0,0.32)]"
        }`}
      >
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-[1.03]"
          aria-label="G&L Glow Home"
        >
          <Image
            src="/images/logo.png"
            alt="G&L"
            width={178}
            height={104}
            priority
            className="h-9 w-auto object-contain sm:h-11 md:h-12 lg:h-[50px]"
          />
        </Link>

        {/* Center: Navigation Links */}
        <ul className="hidden items-center gap-7 lg:flex xl:gap-[56px]">
          {navLinks.map((link) => {
            const isActive = isHome ? active === link.label : false;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`relative whitespace-nowrap font-[family-name:var(--font-questrial)] text-[17px] tracking-wide transition-all duration-300 xl:text-[18px] ${
                    isActive
                      ? "font-semibold text-[#FFC475]"
                      : "text-white/90 hover:text-[#FFC475]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-[#FFC475]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: Actions / Icons */}
        <div className="flex items-center gap-4 text-[#FFC475] sm:gap-5 md:gap-6">
          {/* Search Icon */}
          <button
            type="button"
            aria-label="Search"
            className="hidden items-center justify-center p-1 text-[#FFC475] transition-all duration-300 hover:scale-110 hover:text-white sm:flex"
          >
            <svg
              viewBox="0 0 30 30"
              fill="none"
              className="size-[22px] sm:size-6"
              aria-hidden
            >
              <path
                d="M21.8716 20.1923C23.5519 18.0918 24.5566 15.4274 24.5566 12.5283C24.5566 5.74718 19.0594 0.25 12.2783 0.25C5.49718 0.25 0 5.74718 0 12.5283C0 19.3094 5.49718 24.8066 12.2783 24.8066C15.1774 24.8066 17.8418 23.8019 19.9423 22.1216L27.671 29.8504C28.2038 30.3832 29.0676 30.3832 29.6004 29.8504C30.1332 29.3176 30.1332 28.4538 29.6004 27.921L21.8716 20.1923ZM12.2783 22.0917C6.99654 22.0917 2.71482 17.8101 2.71482 12.5283C2.71482 7.24654 6.99654 2.96482 12.2783 2.96482C17.5601 2.96482 21.8417 7.24654 21.8417 12.5283C21.8417 17.8101 17.5601 22.0917 12.2783 22.0917Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* User Profile Icon */}
          <button
            type="button"
            aria-label="Account"
            className="hidden items-center justify-center p-1 text-[#FFC475] transition-all duration-300 hover:scale-110 hover:text-white sm:flex"
          >
            <svg
              viewBox="74 0 28 32"
              fill="none"
              className="size-[22px] sm:size-6"
              aria-hidden
            >
              <path
                d="M96 9.25C96 13.6683 92.4183 17.25 88 17.25C83.5817 17.25 80 13.6683 80 9.25C80 4.83172 83.5817 1.25 88 1.25C92.4183 1.25 96 4.83172 96 9.25Z"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              />
              <path
                d="M75 30.25C75 23.75 79.9524 17.25 88 17.25C96.0476 17.25 101 23.75 101 30.25"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              />
            </svg>
          </button>

          {/* Wishlist Icon */}
          <button
            type="button"
            aria-label="Wishlist"
            className="hidden items-center justify-center p-1 text-[#FFC475] transition-all duration-300 hover:scale-110 hover:text-white sm:flex"
          >
            <svg
              viewBox="144 0 34 32"
              fill="none"
              className="size-[22px] sm:size-6"
              aria-hidden
            >
              <path
                d="M161 5.57872C158.001 2.03303 152.99 0.937253 149.232 4.18404C145.474 7.43083 144.945 12.8593 147.896 16.6993C150.35 19.8919 157.775 26.6256 160.208 28.8051C160.48 29.0489 160.617 29.1708 160.775 29.2187C160.914 29.2604 161.066 29.2604 161.204 29.2187C161.363 29.1708 161.499 29.0489 161.771 28.8051C164.205 26.6256 171.63 19.8919 174.083 16.6993C177.034 12.8593 176.57 7.39668 172.747 4.18404C168.925 0.971408 163.999 2.03303 161 5.57872Z"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              />
            </svg>
          </button>

          {/* Shopping Cart Icon with Drawer Trigger & Badge */}
          <button
            type="button"
            onClick={openCart}
            aria-label={`Shopping Cart (${totalItems} items)`}
            className="relative flex items-center justify-center p-1 text-[#FFC475] transition-all duration-300 hover:scale-110 hover:text-white"
          >
            <svg
              viewBox="220 0 41 32"
              fill="none"
              className="h-[23px] w-auto sm:h-[26px]"
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

            {/* Glowing gold badge counter */}
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={totalItems}
                className="absolute -right-2 -top-1.5 flex min-w-[20px] h-[20px] items-center justify-center rounded-full bg-[#FFC475] px-1 text-[11px] font-bold text-black shadow-md"
              >
                {totalItems}
              </motion.span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label="Toggle Menu"
            className="flex flex-col gap-1.5 p-1 text-[#FFC475] lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-[#FFC475] transition-transform duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#FFC475] transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#FFC475] transition-transform duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto absolute left-4 right-4 top-[84px] z-50 flex flex-col gap-4 rounded-3xl border border-[rgba(255,225,185,0.3)] bg-[rgba(22,14,9,0.96)] p-6 backdrop-blur-xl shadow-2xl sm:left-6 sm:right-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setMobileOpen(false);
                  }}
                  className={`block py-1 font-[family-name:var(--font-questrial)] text-lg tracking-wide transition-colors ${
                    active === link.label
                      ? "font-medium text-[#FFC475]"
                      : "text-white/85 hover:text-[#FFC475]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
