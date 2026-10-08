"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
  CreditCard,
  Tag,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items, subtotal, shippingCost, clearCart } = useCart();

  // Form State
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("United States");
  const [phone, setPhone] = useState("");
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">(
    "standard",
  );
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "paypal" | "cod"
  >("card");

  // Mock Card state
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardName, setCardName] = useState("");

  // Promo code state
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<{
    text: string;
    isError: boolean;
  } | null>(null);

  // Submission & Success state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  // Calculate pricing
  const effectiveShipping = shippingMethod === "express" ? 15 : shippingCost;
  const discountAmount = appliedDiscount > 0 ? (subtotal * appliedDiscount) : 0;
  const taxes = Number(((subtotal - discountAmount) * 0.05).toFixed(2));
  const total = Number(
    (subtotal - discountAmount + effectiveShipping + taxes).toFixed(2),
  );

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (!clean) return;

    if (clean === "GLOW10" || clean === "WELCOME10" || clean === "LUXURY") {
      setAppliedDiscount(0.1); // 10% off
      setPromoMessage({
        text: "Promo code GLOW10 applied (-10%)!",
        isError: false,
      });
    } else if (clean === "GLOW20") {
      setAppliedDiscount(0.2); // 20% off
      setPromoMessage({
        text: "VIP code GLOW20 applied (-20%)!",
        isError: false,
      });
    } else {
      setPromoMessage({
        text: "Invalid code. Try 'GLOW10' for 10% off.",
        isError: true,
      });
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `GL-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();
    }, 1200);
  };

  // If order is completed, show luxury confirmation screen
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex size-20 items-center justify-center rounded-full bg-[#FFC475] mx-auto text-black shadow-lg"
          >
            <CheckCircle2 className="size-10 text-black" />
          </motion.div>

          <span className="mt-6 inline-block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-[0.3em] text-[#C69B61] uppercase">
            Order Confirmed · Ritual Journey Begun
          </span>

          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-normal text-black sm:text-5xl">
            Thank You, {firstName || "Valued Patron"}!
          </h1>

          <p className="mt-4 font-[family-name:var(--font-questrial)] text-base text-black/70 sm:text-lg">
            Your ritual preparation order{" "}
            <strong className="text-black font-semibold">#{orderId}</strong> has
            been received. A tracking confirmation has been sent to{" "}
            <span className="font-medium text-black">
              {email || "your email"}
            </span>
            .
          </p>

          <div className="mt-8 rounded-3xl border border-[#FFC475]/30 bg-[#F7EFE5] p-6 text-left sm:p-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-normal text-black">
              Order Details &amp; Summary
            </h3>
            <div className="mt-4 space-y-2 text-sm font-[family-name:var(--font-questrial)] text-black/75">
              <p>
                <strong>Delivery To:</strong> {firstName} {lastName}
              </p>
              <p>
                <strong>Destination:</strong> {address}, {city}, {stateProvince}{" "}
                {postalCode}, {country}
              </p>
              <p>
                <strong>Shipping Tier:</strong>{" "}
                {shippingMethod === "express"
                  ? "Express Courier (1-2 Days)"
                  : "Complimentary Standard (3-5 Days)"}
              </p>
              <p>
                <strong>Payment:</strong> {paymentMethod.toUpperCase()} (Billed $
                {total.toFixed(2)})
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl bg-white/70 p-3 text-xs text-black/80">
              <Sparkles className="size-4 shrink-0 text-[#C69B61]" />
              <span>
                Complimentary French frosted discovery vial has been packed with
                your order.
              </span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-[family-name:var(--font-questrial)] text-sm font-semibold tracking-widest uppercase text-white transition-all hover:bg-neutral-800 hover:shadow-lg"
            >
              <span>Return to Sanctuary</span>
              <ArrowRight className="size-4 text-[#FFC475]" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-black">
      {/* Distraction-Free Luxury Header */}
      <header className="border-b border-black/8 bg-white/70 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10">
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105"
          >
            <Image
              src="/images/logo.png"
              alt="G&L Glow"
              width={140}
              height={45}
              priority
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>

          <div className="flex items-center gap-4 text-xs font-[family-name:var(--font-questrial)] text-black/60 sm:gap-6 sm:text-sm">
            <div className="hidden items-center gap-1.5 sm:flex">
              <Lock className="size-3.5 text-[#C69B61]" />
              <span>256-Bit SSL Encrypted</span>
            </div>
            <Link
              href="/"
              className="flex items-center gap-1 font-medium text-black transition-colors hover:text-[#C69B61]"
            >
              <ArrowLeft className="size-4" />
              <span>Return to Shop</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Checkout Grid */}
      <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
        {items.length === 0 ? (
          <div className="mx-auto max-w-md py-16 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#F7EFE5] text-[#C69B61]">
              <ShoppingBag className="size-8" />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-normal text-black">
              Your bag is currently empty
            </h2>
            <p className="mt-2 font-[family-name:var(--font-questrial)] text-sm text-black/60">
              Please select a ritual essential before proceeding to checkout.
            </p>
            <Link
              href="/#bestsellers"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-widest uppercase text-white hover:bg-neutral-800"
            >
              <span>Explore Rituals</span>
              <ArrowRight className="size-4 text-[#FFC475]" />
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handlePlaceOrder}
            className="grid gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20"
          >
            {/* Left Column: Checkout Inputs (7 cols) */}
            <div className="space-y-10 lg:col-span-7">
              {/* Express Checkout Mockup */}
              <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-2xs sm:p-7">
                <span className="block text-center font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-[0.2em] text-black/60 uppercase">
                  Express Checkout
                </span>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setEmail("patron@luxury.com");
                      setFirstName("Elena");
                      setLastName("Vance");
                      setAddress("740 Park Avenue");
                      setCity("New York");
                      setStateProvince("NY");
                      setPostalCode("10021");
                    }}
                    className="flex h-12 items-center justify-center rounded-xl bg-black font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-white transition-all hover:bg-neutral-800"
                  >
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEmail("patron@luxury.com");
                      setFirstName("Elena");
                      setLastName("Vance");
                      setAddress("740 Park Avenue");
                      setCity("New York");
                      setStateProvince("NY");
                      setPostalCode("10021");
                    }}
                    className="flex h-12 items-center justify-center rounded-xl bg-[#5A31F4] font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-white transition-all hover:bg-[#4b26d8]"
                  >
                    Shop Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEmail("patron@luxury.com");
                      setFirstName("Elena");
                      setLastName("Vance");
                      setAddress("740 Park Avenue");
                      setCity("New York");
                      setStateProvince("NY");
                      setPostalCode("10021");
                    }}
                    className="flex h-12 items-center justify-center rounded-xl bg-[#FFC439] font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black transition-all hover:bg-[#e6af33]"
                  >
                    PayPal
                  </button>
                </div>

                <div className="relative mt-6 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-black/10" />
                  </div>
                  <span className="relative bg-white px-4 font-[family-name:var(--font-questrial)] text-xs text-black/40 uppercase tracking-widest">
                    Or Continue With Ritual Form
                  </span>
                </div>
              </div>

              {/* Step 1: Contact Information */}
              <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-2xs sm:p-7">
                <div className="flex items-center justify-between">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-normal text-black">
                    1. Contact Information
                  </h2>
                  <span className="font-[family-name:var(--font-questrial)] text-xs text-black/40">
                    Step 1 of 4
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena.vance@luxury.com"
                      className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none transition-colors focus:border-[#C69B61] focus:ring-1 focus:ring-[#C69B61]"
                    />
                  </div>

                  <div>
                    <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                      Phone Number (for Courier SMS updates)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none transition-colors focus:border-[#C69B61] focus:ring-1 focus:ring-[#C69B61]"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 pt-1 text-xs text-black/70 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="mt-0.5 rounded border-black/20 text-[#C69B61] focus:ring-[#C69B61]"
                    />
                    <span>
                      Keep me informed with private salon offerings &amp; secret
                      scent releases
                    </span>
                  </label>
                </div>
              </div>

              {/* Step 2: Shipping Destination */}
              <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-2xs sm:p-7">
                <div className="flex items-center justify-between">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-normal text-black">
                    2. Shipping Destination
                  </h2>
                  <span className="font-[family-name:var(--font-questrial)] text-xs text-black/40">
                    Step 2 of 4
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                      Country / Region *
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="France">France</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Elena"
                        className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Vance"
                        className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                      Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="740 Park Avenue"
                      className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                    />
                  </div>

                  <div>
                    <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                      Apartment, Suite, Unit (Optional)
                    </label>
                    <input
                      type="text"
                      value={apartment}
                      onChange={(e) => setApartment(e.target.value)}
                      placeholder="Penthouse B"
                      className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="New York"
                        className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={stateProvince}
                        onChange={(e) => setStateProvince(e.target.value)}
                        placeholder="NY"
                        className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                        ZIP *
                      </label>
                      <input
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="10021"
                        className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Shipping Method */}
              <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-2xs sm:p-7">
                <div className="flex items-center justify-between">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-normal text-black">
                    3. Delivery Speed
                  </h2>
                  <span className="font-[family-name:var(--font-questrial)] text-xs text-black/40">
                    Step 3 of 4
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <label
                    onClick={() => setShippingMethod("standard")}
                    className={`flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition-all ${
                      shippingMethod === "standard"
                        ? "border-black bg-[#F7EFE5]/50 shadow-xs"
                        : "border-black/10 hover:border-black/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                        className="text-black focus:ring-black"
                      />
                      <div>
                        <p className="font-[family-name:var(--font-questrial)] text-sm font-semibold text-black">
                          Complimentary Luxury Courier (3-5 Days)
                        </p>
                        <p className="text-xs text-black/60">
                          Includes carbon offset &amp; thermal packaging
                        </p>
                      </div>
                    </div>
                    <span className="font-[family-name:var(--font-questrial)] text-sm font-semibold text-emerald-800">
                      {shippingCost === 0
                        ? "FREE"
                        : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </label>

                  <label
                    onClick={() => setShippingMethod("express")}
                    className={`flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition-all ${
                      shippingMethod === "express"
                        ? "border-black bg-[#F7EFE5]/50 shadow-xs"
                        : "border-black/10 hover:border-black/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                        className="text-black focus:ring-black"
                      />
                      <div>
                        <p className="font-[family-name:var(--font-questrial)] text-sm font-semibold text-black">
                          Priority White-Glove Air (1-2 Days)
                        </p>
                        <p className="text-xs text-black/60">
                          Dispatched in temperature-controlled flacon boxes
                        </p>
                      </div>
                    </div>
                    <span className="font-[family-name:var(--font-questrial)] text-sm font-semibold text-black">
                      $15.00
                    </span>
                  </label>
                </div>
              </div>

              {/* Step 4: Payment Details */}
              <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-2xs sm:p-7">
                <div className="flex items-center justify-between">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-normal text-black">
                    4. Payment Selection
                  </h2>
                  <span className="font-[family-name:var(--font-questrial)] text-xs text-black/40">
                    Step 4 of 4
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Payment Tabs */}
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`flex items-center justify-center gap-2 rounded-xl border p-3 font-[family-name:var(--font-questrial)] text-xs font-semibold uppercase tracking-wider transition-all ${
                        paymentMethod === "card"
                          ? "border-black bg-black text-white"
                          : "border-black/15 bg-white text-black hover:border-black/40"
                      }`}
                    >
                      <CreditCard className="size-4" />
                      <span>Credit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("paypal")}
                      className={`flex items-center justify-center gap-2 rounded-xl border p-3 font-[family-name:var(--font-questrial)] text-xs font-semibold uppercase tracking-wider transition-all ${
                        paymentMethod === "paypal"
                          ? "border-black bg-black text-white"
                          : "border-black/15 bg-white text-black hover:border-black/40"
                      }`}
                    >
                      <span>PayPal</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("cod")}
                      className={`flex items-center justify-center gap-2 rounded-xl border p-3 font-[family-name:var(--font-questrial)] text-xs font-semibold uppercase tracking-wider transition-all ${
                        paymentMethod === "cod"
                          ? "border-black bg-black text-white"
                          : "border-black/15 bg-white text-black hover:border-black/40"
                      }`}
                    >
                      <span>Cash on Delivery</span>
                    </button>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 pt-3">
                      <div>
                        <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          placeholder="Elena Vance"
                          className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                        />
                      </div>

                      <div>
                        <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={19}
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="4532 ···· ···· 8921"
                          className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            required
                            maxLength={5}
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            placeholder="MM/YY"
                            className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                          />
                        </div>
                        <div>
                          <label className="block font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider text-black/70 uppercase">
                            CVV / CVC *
                          </label>
                          <input
                            type="password"
                            required
                            maxLength={4}
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value)}
                            placeholder="123"
                            className="mt-1.5 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-[family-name:var(--font-questrial)] text-sm text-black outline-none focus:border-[#C69B61]"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="rounded-2xl bg-[#F7EFE5] p-5 text-center text-sm font-[family-name:var(--font-questrial)] text-black/75">
                      You will be securely redirected to PayPal to complete your
                      authorized transaction.
                    </div>
                  )}

                  {paymentMethod === "cod" && (
                    <div className="rounded-2xl bg-[#F7EFE5] p-5 text-center text-sm font-[family-name:var(--font-questrial)] text-black/75">
                      Pay with cash directly to our luxury courier upon delivery
                      of your sealed package.
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  className="flex h-16 w-full items-center justify-center gap-3 rounded-full bg-[#FFC475] font-[family-name:var(--font-questrial)] text-base font-semibold tracking-widest uppercase text-black shadow-xl transition-all hover:bg-[#ffba61] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="size-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                      <span>Authorizing Ritual Order...</span>
                    </div>
                  ) : (
                    <>
                      <span>Complete Order · ${total.toFixed(2)}</span>
                      <ArrowRight className="size-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Right Column: Sticky Order Summary (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-[32px] border border-[#FFC475]/30 bg-[#F7EFE5] p-6 shadow-sm sm:p-8">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-normal text-black">
                  Bag Summary
                </h3>

                {/* Items List */}
                <div className="mt-6 max-h-[360px] overflow-y-auto space-y-4 pr-1 divide-y divide-black/8">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.variantLabel || ""}`}
                      className="flex items-center gap-4 pt-4 first:pt-0"
                    >
                      <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                        <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-[#FFC475] text-[10px] font-bold text-black shadow-xs">
                          {item.quantity}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="truncate font-[family-name:var(--font-questrial)] text-sm font-semibold text-black">
                          {item.name}
                        </p>
                        <p className="text-xs text-black/50">
                          {item.variantLabel}{" "}
                          {item.volume && `· ${item.volume}`}
                        </p>
                      </div>

                      <p className="font-[family-name:var(--font-questrial)] text-sm font-semibold text-black">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input */}
                <div className="mt-6 border-t border-black/10 pt-6">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-black/40" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Discount code (try GLOW10)"
                        className="h-11 w-full rounded-xl border border-black/15 bg-white pl-10 pr-3 font-[family-name:var(--font-questrial)] text-xs uppercase tracking-wider text-black outline-none focus:border-[#C69B61]"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="h-11 rounded-xl bg-black px-5 font-[family-name:var(--font-questrial)] text-xs font-semibold tracking-wider uppercase text-white transition-colors hover:bg-neutral-800"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p
                      className={`mt-2 font-[family-name:var(--font-questrial)] text-xs ${
                        promoMessage.isError
                          ? "text-red-600"
                          : "text-emerald-800 font-semibold"
                      }`}
                    >
                      {promoMessage.text}
                    </p>
                  )}
                </div>

                {/* Costs Breakdown */}
                <div className="mt-6 space-y-2.5 border-t border-black/10 pt-6 text-sm font-[family-name:var(--font-questrial)]">
                  <div className="flex justify-between text-black/70">
                    <span>Subtotal</span>
                    <span className="font-medium text-black">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-emerald-800 font-medium">
                      <span>Promotional Privilege</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-black/70">
                    <span>Shipping Method</span>
                    <span>
                      {effectiveShipping === 0 ? (
                        <span className="font-semibold text-emerald-800">
                          Complimentary
                        </span>
                      ) : (
                        `$${effectiveShipping.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-black/70">
                    <span>Estimated Sales Tax</span>
                    <span className="text-black">${taxes.toFixed(2)}</span>
                  </div>

                  <div className="flex items-baseline justify-between border-t border-black/10 pt-4 font-[family-name:var(--font-display)] text-2xl text-black">
                    <span>Total USD</span>
                    <span className="text-3xl font-normal text-black">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Guarantees Box */}
                <div className="mt-8 space-y-3 rounded-2xl bg-white/70 p-4 text-xs font-[family-name:var(--font-questrial)] text-black/70">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-[#C69B61]" />
                    <span>30-Day Ritual Exchange Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="size-4 text-[#C69B61]" />
                    <span>Climate-Neutral Secured Courier Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-[#C69B61]" />
                    <span>2 Complimentary Luxury Discovery Samples</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
