"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowDownRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

const cards = [
  {
    title: "FMCG Cartons",
    desc: "From agarbatti boxes to soap and perfume packaging, our fast, precise production keeps FMCG brands moving without delivery glitches.",
    img: "/images/img7.png",
    href: "/industry"
  },
  {
    title: "Sticker & Label Printing",
    desc: "Small in size, big in impact, bottle labels, product labels, and promotional stickers are finished to the same standard as our largest carton orders.",
    img: "/images/sticker_labels_roll.jpg",
    href: "/services"
  },
  {
    title: "Promotional Materials",
    desc: "Catalogues, standees, brochures, posters, and danglers built to fulfill out-of-the-box creative briefs for consumer brands.",
    img: "/images/img12.png",
    href: "/services"
  },
  {
    title: "Pharmaceutical Packaging",
    desc: "Compliance-driven printing for vials, injectables, liquids, and sterile products, where precision isn't optional.",
    img: "/images/pharma_carton_braille.jpg",
    href: "/industry"
  }
];

export default function SuccessFutureSection() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Half gray background */}
      <div className="absolute top-0 left-0 w-full h-[60%] sm:h-[55%] bg-[#f4f5f7] z-0" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto w-full max-w-4xl gap-6 mb-16 lg:mb-20">
          <motion.h2
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900"
          >
            What We <span className="font-bold text-primary">Print</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center gap-5 pb-2 w-full"
          >
            <p className="font-sans text-[16px] sm:text-[18px] text-slate-600 leading-relaxed font-medium">
              We don't just print; we solve packaging problems for industries that can't afford to get it wrong.
            </p>
            <Link
              href="/services"
              className="font-sans text-[14px] font-bold text-slate-900 hover:text-primary transition-colors inline-flex items-center gap-1 border-b-[3px] border-slate-900 hover:border-primary pb-1 uppercase tracking-wide mt-2"
            >
              View All Services <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              custom={idx * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative aspect-4/5 bg-white group overflow-hidden shadow-lg cursor-pointer"
            >
              <Link href={item.href} className="block w-full h-full relative" aria-label={`View ${item.title}`}>
                {/* Background Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Animated Overlay Container */}
                <div className="absolute left-0 bottom-0 w-full bg-primary text-white transition-all duration-300 ease-in-out px-6 flex flex-col justify-start overflow-hidden h-[60px] group-hover:h-[48%]">

                  {/* Default visible header */}
                  <div className="flex justify-between items-center w-full min-h-[60px] shrink-0">
                    <h3 className="font-heading text-lg font-medium tracking-wide m-0">{item.title}</h3>
                    <ArrowDownRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-[-90deg]" />
                  </div>

                  {/* Hidden description that reveals on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex-grow pt-2 pb-6">
                    <p className="font-sans text-[15.5px] leading-relaxed text-white/95">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Huge Background Text Since-1921 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
        className="mt-12 sm:mt-16 lg:mt-24 w-full text-center select-none relative z-10 px-4"
      >
        <span
          className="font-heading font-black text-[3.5rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] xl:text-[15rem] leading-[0.8] text-transparent inline-block whitespace-nowrap"
          style={{ WebkitTextStroke: "1px rgba(71, 85, 105, 0.8)" }}
        >
          Since-1921
        </span>
      </motion.div>
    </section>
  );
}
