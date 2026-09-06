"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Procurement Head, Sun Pharma",
    rating: 5,
    quote:
      "Shree Harihar has been our trusted packaging partner for over a decade. Their Braille-embossed cartons meet every regulatory standard without a single deviation.",
  },
  {
    name: "Priya Nair",
    role: "Brand Manager, Dabur India",
    rating: 5,
    quote:
      "The color consistency across 50,000+ carton runs is simply unmatched. Our shelf presence improved dramatically after switching to their offset printing.",
  },
  {
    name: "Amit Shah",
    role: "Supply Chain Director, Cipla",
    rating: 5,
    quote:
      "On-time delivery has never been an issue. Even during peak demand seasons, Shree Harihar delivers without compromising on quality.",
  },
  {
    name: "Sunita Krishnan",
    role: "Operations Manager, Himalaya Wellness",
    rating: 5,
    quote:
      "Their team understands pharma compliance deeply. Every insert is perfectly folded, legible, and inspection-ready right out of the box.",
  },
  {
    name: "Vikram Desai",
    role: "CEO, Ahmedabad Naturals",
    rating: 5,
    quote:
      "Switched from two vendors to just Shree Harihar for all our FMCG packaging. The savings in coordination and rework alone justified the decision in month one.",
  },
  {
    name: "Ananya Bose",
    role: "Head of Procurement, Emami Group",
    rating: 5,
    quote:
      "Their 100-year legacy isn't just history - it shows in how meticulous and professional every interaction is. We trust them completely.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-primary" : "text-slate-400"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleDesktop = 3;
  const maxIndex = testimonials.length - visibleDesktop; // 3

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
  }, [maxIndex]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const go = (dir: 1 | -1) => {
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
    resetTimer();
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-zinc-100 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading - scroll animated */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-10"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-3">
            Client Voices
          </span>
          <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900">
            What Our Clients Say <span className="font-bold text-primary">About Us</span>
          </h2>
          <p className="font-sans text-[15px] sm:text-base text-slate-500 mt-5 max-w-lg mx-auto leading-relaxed">
            Over a century of craftsmanship, echoed by the brands that rely on us every single day.
          </p>
        </motion.div>

        {/* Arrow buttons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-6"
        >
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-zinc-400 text-slate-600 hover:border-primary hover:text-white hover:bg-primary flex items-center justify-center transition-all duration-200 focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-zinc-400 text-slate-600 hover:border-primary hover:text-white hover:bg-primary flex items-center justify-center transition-all duration-200 focus:outline-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Sliding Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / 3)))`,
            }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="w-full shrink-0 sm:w-1/2 lg:w-1/3 px-3"
              >
                <div className="bg-white border border-slate-200 p-7 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
                  {/* Top red rule */}
                  <div className="w-10 h-0.75 bg-primary mb-5" />

                  <StarRating count={t.rating} />

                  <p className="font-sans text-[15px] sm:text-base text-slate-700 leading-relaxed flex-1 mb-7">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="font-heading font-bold text-sm text-primary">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-slate-900 text-sm leading-tight">
                        {t.name}
                      </p>
                      <p className="font-sans text-[11px] text-slate-500 mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrent(idx); resetTimer(); }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${idx === current
                  ? "bg-primary w-6 h-2"
                  : "bg-zinc-400 hover:bg-zinc-500 w-2 h-2"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
