"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CLIENTS_DATA } from "../../data/clientsData";
import ClientLogoCard from "./ClientLogoCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function ClientMarqueeSection() {
  const row1 = CLIENTS_DATA.slice(0, 18);
  const row2 = CLIENTS_DATA.slice(18);

  return (
    <section className="py-20 lg:py-28 bg-slate-100 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto w-full max-w-4xl gap-6 mb-12 lg:mb-16">
          <motion.h2
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900"
          >
            Trusted by 100+ <span className="font-bold text-primary">Industry Leaders</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-[16px] sm:text-[18px] text-slate-600 leading-relaxed font-medium max-w-2xl"
          >
            From regulated pharmaceutical giants to FMCG household names, India&apos;s leading enterprises rely on our precision packaging lines.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container with side fade masks */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-slate-100 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-slate-100 to-transparent" />

        {/* Row 1 - Scrolling Left */}
        <div className="flex animate-marquee mb-4">
          {/* Double list to ensure smooth infinite loop without gaps */}
          {row1.concat(row1).map((client, idx) => (
            <ClientLogoCard key={`row1-${client.id}-${idx}`} client={client} compact />
          ))}
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex animate-marquee-reverse">
          {/* Double list to ensure smooth infinite loop without gaps */}
          {row2.concat(row2).map((client, idx) => (
            <ClientLogoCard key={`row2-${client.id}-${idx}`} client={client} compact />
          ))}
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div className="mt-8 flex justify-center px-4">
        <Link
          href="/about#clients"
          className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-heading font-bold tracking-wider uppercase text-slate-700 hover:text-primary transition-colors group cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 shrink-0 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
