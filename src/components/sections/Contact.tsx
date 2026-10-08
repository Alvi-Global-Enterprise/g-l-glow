"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { contactInfo } from "@/data/content";
import { images } from "@/lib/assets";
import { SectionLabel } from "@/components/ui/SectionLabel";

const socialIcons: { label: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
        <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-none stroke-current" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
        <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.1l7.3-8.3L1 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
        <path d="M6.5 9H3.7v12h2.8V9zM5.1 3.5A1.8 1.8 0 1 0 5.1 7a1.8 1.8 0 0 0 0-3.5zM20.3 9.1c-1.5 0-2.6.7-3.1 1.5h-.1V9H14.4v12h2.8v-6.4c0-1.7.3-3.3 2.4-3.3s2.1 1.9 2.1 3.4V21H24v-6.9c0-3.4-1.8-5-3.7-5z" />
      </svg>
    ),
  },
];

interface FormState {
  fullName: string;
  email: string;
  location: string;
  message: string;
}

const initialForm: FormState = {
  fullName: "",
  email: "",
  location: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm(initialForm);
  };

  return (
    <section
      id="contact"
      className="contact-section relative mx-auto max-w-[1920px] overflow-hidden rounded-[40px] md:rounded-[60px] lg:rounded-[75px]"
    >
      <div className="absolute inset-0">
        <Image
          src={images.contactBg}
          alt="Soft floral background"
          fill
          className="contact-bg object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/35" />
      </div>

      <div className="relative z-10 grid gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1fr_640px] lg:gap-12 lg:px-[126px] lg:py-20">
        <div>
          <SectionLabel
            label="CONTACT US"
            className="mb-6 max-w-[900px]"
            lineClassName="bg-black/14"
            dotClassName="bg-black"
          />
          <h2 className="max-w-[709px] font-[family-name:var(--font-display)] text-[40px] leading-[0.95] text-black md:text-[60px] lg:text-[80px] lg:leading-[76px]">
            Let&apos;s Talk About{" "}
            <span className="italic text-[#C69B61]">Your Beauty Needs</span>
          </h2>
          <p className="mt-6 max-w-[701px] font-[family-name:var(--font-questrial)] text-base leading-[1.266] tracking-[0.07em] text-black/50 md:text-2xl">
            Have a question about our skincare, beauty or fragrance products?
            We&apos;re here to help. Reach out to our team and we&apos;ll get
            back to you as soon as possible.
          </p>

          <ul className="mt-10 space-y-6">
            <ContactRow
              icon={Mail}
              label="EMAIL US"
              value={contactInfo.email}
              href={`mailto:${contactInfo.email}`}
            />
            <ContactRow
              icon={Phone}
              label="CALL US"
              value={contactInfo.phone}
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            />
            <ContactRow
              icon={MapPin}
              label="OUR LOCATION"
              value={contactInfo.address}
            />
          </ul>

          <div className="mt-10 flex items-center gap-5 text-black">
            {socialIcons.map((social) => (
              <motion.a
                key={social.label}
                href="#"
                aria-label={social.label}
                whileHover={{ y: -3 }}
                className="transition-opacity hover:opacity-70"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="contact-form rounded-[26px] bg-white/46 p-4 backdrop-blur-md md:p-8"
        >
          <FormField
            label="Full Name *"
            value={form.fullName}
            onChange={(value) => setForm((prev) => ({ ...prev, fullName: value }))}
          />
          <FormField
            label="Email Address *"
            type="email"
            value={form.email}
            onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
          />
          <FormField
            label="Preferred Location *"
            value={form.location}
            onChange={(value) => setForm((prev) => ({ ...prev, location: value }))}
          />
          <label className="mb-4 block">
            <span className="sr-only">Message</span>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="MESSAGE *"
              className="w-full resize-none rounded-lg bg-white px-5 py-5 font-[family-name:var(--font-questrial)] text-sm uppercase tracking-[0.11em] text-black placeholder:text-black/19 md:text-xl"
            />
          </label>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-[52px] w-full items-center justify-center gap-3 rounded-full bg-black font-[family-name:var(--font-questrial)] text-lg uppercase tracking-wide text-white"
          >
            Send Enquiry
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
              <path
                d="M1 6H14M14 6L10 2M14 6L10 10"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex size-[46px] shrink-0 items-center justify-center rounded-full border border-black">
        <Icon className="size-5" strokeWidth={1.8} />
      </span>
      <span>
        <span className="block font-[family-name:var(--font-questrial)] text-lg tracking-[0.07em] text-black">
          {label}
        </span>
        <span className="mt-1 block whitespace-pre-line font-[family-name:var(--font-questrial)] text-lg tracking-[0.07em] text-black/50">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="flex items-start gap-4 transition-opacity hover:opacity-70">
          {content}
        </a>
      </li>
    );
  }

  return <li className="flex items-start gap-4">{content}</li>;
}

function FormField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="mb-4 block">
      <span className="sr-only">{label}</span>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        className="h-[69px] w-full rounded-lg bg-white px-5 font-[family-name:var(--font-questrial)] text-sm uppercase tracking-[0.11em] text-black placeholder:text-black/19 md:text-xl"
      />
    </label>
  );
}
