"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const industries = [
  {
    title: "Pharmaceutical Packaging",
    desc: "Pharma packaging leaves no room for error. A misaligned fold, an unreadable batch code, or an inconsistent finish isn't just a quality issue; it's a compliance risk.\n\nWe print cartons, vial packaging, and injection boxes with the precision this industry demands, and our Bobst Visionfold line's Accubraille capability means we can handle Braille-compliant folding where it's required. From syrups and creams to injectables and tablets, we understand that \"close enough\" isn't a standard pharma brands can work with.",
    deliverables: [
      "Precision carton printing",
      "Accurate batch/regulatory text reproduction",
      "Braille-capable folding & gluing",
      "Vial and injection box packaging",
      "Consistent, inspection-checked output at scale"
    ],
    image: "https://images.unsplash.com/photo-1584308666744-24d5e4a5bf4d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "FMCG & Personal Care Packaging",
    desc: "In FMCG, packaging has about two seconds to earn attention on a shelf and it has to survive the journey from factory to retail without a scratch. We print cartons for soap, perfume, agarbatti, toothpaste, cosmetics, spices, and personal care products with the design-forward finish this category demands, backed by fast turnarounds so you can move at retail speed.",
    deliverables: [
      "Eye-catching, design-ready cartons",
      "Multiple size variants",
      "Hygienic packing standards",
      "Quality paper sourcing",
      "Fast, reliable turnaround"
    ],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Food, Beverage & Instant-Mix Packaging",
    desc: "Whether it's an instant-mix snack carton or a beverage box, food packaging has to look appetizing and stay food-safe. We produce vibrant, accurate color reproduction for food brands who need their packaging to sell the product before it's even opened.",
    deliverables: [
      "Vivid, appetite-driving print quality",
      "Food-safe production standards",
      "Reliable bulk-order turnaround"
    ],
    image: "https://images.unsplash.com/photo-1606859191214-25806e9e2463?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Nutraceutical & Supplement Packaging",
    desc: "Supplement buyers judge trust by presentation. We produce sharp, clean labels and cartons for nutraceutical and supplement brands; the kind of finish that signals quality before a customer reads a single ingredient.",
    deliverables: [
      "Premium label finishing",
      "Accurate, legible dosage/ingredient printing",
      "Bottle and carton label production"
    ],
    image: "https://images.unsplash.com/photo-1626808642875-0aa545464198?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function IndustryListSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {industries.map((ind, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
              
              {/* Image Block */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative h-[400px] sm:h-[500px] w-full rounded-sm overflow-hidden shadow-lg group ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  className="absolute inset-0 w-full h-full object-cover filter transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 blend-multiply"></div>
              </motion.div>

              {/* Text Block */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`${!isEven ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-8 leading-tight">
                  <span className="font-bold relative inline-block">
                    {ind.title.split(' ')[0]} 
                    <span className="absolute bottom-1 left-0 w-full h-1 bg-primary/30" />
                  </span>
                  {' '} {ind.title.split(' ').slice(1).join(' ')}
                </h2>
                
                <div className="prose prose-lg prose-slate font-sans leading-relaxed text-slate-600 mb-8 whitespace-pre-wrap">
                  {ind.desc}
                </div>

                <div className="bg-slate-50 p-6 sm:p-8 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-slate-900 mb-5">
                    What We Deliver:
                  </h4>
                  <ul className="space-y-4">
                    {ind.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="font-sans text-[15px] text-slate-700 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
