"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Carton Printing & Packaging",
    desc: "From small retail cartons to large bulk packaging runs, our carton printing service is built on advanced multi-color offset printing, precision blanking, and automated inspection so every single batch matches the last.",
    idealFor: "Pharmaceutical cartons · FMCG & personal care boxes · Food & beverage packaging · Bulk retail cartons",
    holdUp: [
      "Consistent colour matching across large runs",
      "Automatic carton inspection for defect-free output",
      "Multiple size and finish options",
      "Aqua/UV coating and drip-off finishing available"
    ],
    buttonText: "Request a Carton Printing Quote",
    image: "/images/img4.png" // auto carton folding-gluing line
  },
  {
    title: "Sticker & Label Printing",
    desc: "Small in size, big in impact. Whether it's a product label, a bottle sticker, or a compliance label for a pharma vial, we produce label runs with the same quality discipline we apply to full carton orders in the quantity you need, within the timeframe you were promised.",
    idealFor: "Bottle & product labels · Pharma vial and packaging labels · Supplement and nutraceutical labels · Promotional stickers",
    holdUp: [
      "Prerequisite-grade quality for regulated industries",
      "Fast turnaround on smaller runs",
      "Precision cutting and finishing"
    ],
    buttonText: "Request a Label Printing Quote",
    image: "/images/img11.png" // label printing roll press
  },
  {
    title: "Promotional Print Materials",
    desc: "Every brand needs a way to create noise in its market. We produce catalogues, standees, brochures, posters, danglers, and calendars with the same creative attention and production discipline as our packaging work, helping our clients show up sharp wherever they need to be seen.",
    idealFor: "Retail brochures & catalogues · In-store standees & danglers · Posters & seasonal calendars",
    holdUp: [
      "Creative, out-of-the-box execution",
      "Consistent print quality across formats",
      "Fast production for time-sensitive campaigns"
    ],
    buttonText: "Request a Promotional Printing Quote",
    image: "/images/img12.png" // promotional brochures / catalogues
  }
];

export default function ServicesListSection() {
  return (
    <div className="flex flex-col w-full">
      {services.map((svc, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section key={idx} className={`py-20 lg:py-28 ${isEven ? 'bg-white' : 'bg-slate-50'} border-b border-slate-200/80`}>
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
              {/* Flex row container ensures image is ALWAYS stacked on top of text on mobile (sm/md),
                  while gracefully alternating on desktop (lg:flex-row vs lg:flex-row-reverse) */}
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>

                {/* Image Block: Always first in DOM so it stacks on top on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 relative h-[380px] sm:h-[480px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group border border-slate-200 bg-slate-900"
                >
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover filter transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>

                {/* Text Block: Always second in DOM so it stacks below image on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full lg:w-1/2 flex flex-col"
                >
                  <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
                    {svc.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="font-bold text-primary">
                      {svc.title.split(' ').slice(-1)[0]}
                    </span>
                  </h2>
                  <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                    {svc.desc}
                  </p>

                  <div className="mb-6 p-4 bg-primary/5 border border-primary/20 text-slate-800 font-sans text-sm sm:text-[15px] leading-relaxed rounded-xl">
                    <strong className="font-heading font-bold text-slate-900">Ideal for:</strong>{' '}
                    {svc.idealFor.split('·').map((item, i) => (
                      <span key={i}>
                        {item.trim()}
                        {i < svc.idealFor.split('·').length - 1 ? <span className="mx-2 text-primary font-bold">•</span> : ''}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">
                    Why it holds up:
                  </h4>
                  <ul className="space-y-3 mb-10">
                    {svc.holdUp.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-sans text-sm sm:text-[15px] text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 hover:text-primary hover:border-primary transition-colors pb-1 group/btn"
                    >
                      {svc.buttonText}{' '}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
