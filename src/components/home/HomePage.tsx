"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Categories } from "@/components/sections/Categories";
import { BestSellers } from "@/components/sections/BestSellers";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const reveal = (
        target: string,
        vars: gsap.TweenVars,
        trigger: string,
        start = "top 80%",
      ) => {
        gsap.from(target, {
          ...vars,
          immediateRender: false,
          scrollTrigger: {
            trigger,
            start,
            toggleActions: "play none none none",
          },
        });
      };

      reveal(
        ".about-copy",
        { opacity: 0, x: -48, duration: 1, ease: "power3.out" },
        ".about-section",
        "top 75%",
      );
      reveal(
        ".about-img-perfume",
        { opacity: 0, x: 56, duration: 1.1, ease: "power3.out" },
        ".about-section",
        "top 70%",
      );
      reveal(
        ".about-img-woman",
        { opacity: 0, y: 48, duration: 1, ease: "power3.out" },
        ".about-img-woman",
        "top 85%",
      );
      reveal(
        ".category-card",
        {
          opacity: 0,
          y: 64,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
        },
        ".categories-track",
      );
      reveal(
        ".bestseller-featured",
        { opacity: 0, x: -40, duration: 1, ease: "power3.out" },
        ".bestsellers-section",
        "top 70%",
      );
      reveal(
        ".product-card",
        {
          opacity: 0,
          y: 48,
          stagger: 0.12,
          duration: 0.85,
          ease: "power3.out",
        },
        ".bestsellers-section",
        "top 65%",
      );
      reveal(
        ".feature-card",
        {
          opacity: 0,
          y: 36,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
        },
        ".why-cards",
      );
      reveal(
        ".contact-form",
        { opacity: 0, y: 40, duration: 0.9, ease: "power3.out" },
        ".contact-section",
        "top 70%",
      );

      gsap.to(".contact-bg", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="min-h-screen bg-white text-black">
      <Hero />
      <About />
      <Categories />
      <BestSellers />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
