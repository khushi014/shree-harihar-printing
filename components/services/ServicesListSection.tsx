"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Carton Printing & Packaging",
    desc: "From small retail cartons to large bulk packaging runs, our carton printing service is built on Heidelberg 2-, 4-, and 6-color offset presses, precision punching, and automated carton inspection so every batch matches the last.",
    idealFor: "Pharmaceutical cartons · FMCG & personal care boxes · Food & beverage packaging · Bulk retail cartons",
    holdUp: [
      "Consistent colour matching across large runs",
      "Automatic carton inspection for defect-free output",
      "Multiple size and finish options",
      "Aqua/UV coating and drip-off finishing available"
    ],
    buttonText: "Request a Carton Printing Quote",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000" // boxes / manufacturing
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
    image: "https://images.unsplash.com/photo-1548345680-f5475ea90f5c?auto=format&fit=crop&q=80&w=1000" // labels / abstract
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
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=1000" // brochures / creative
  }
];

export default function ServicesListSection({ setQuoteModalOpen }: { setQuoteModalOpen: (open: boolean) => void }) {
  return (
    <div className="flex flex-col w-full">
      {services.map((svc, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section key={idx} className={`py-20 lg:py-28 ${isEven ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative h-[400px] sm:h-[500px] w-full shadow-lg group ${!isEven ? 'lg:order-2' : ''}`}
                >
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="absolute inset-0 w-full h-full object-cover filter transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </motion.div>

                {/* Text Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col ${!isEven ? 'lg:order-1' : ''}`}
                >
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-6">
                    {svc.title}
                  </h2>
                  <p className="font-sans text-lg text-slate-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  
                  <div className="mb-6 p-4 bg-primary/5 border border-primary/20 text-slate-800 font-sans text-[15px] leading-relaxed rounded-sm">
                    <strong>Ideal for:</strong> {svc.idealFor.split('·').map((item, i) => (
                      <span key={i}>
                        {item.trim()}
                        {i < svc.idealFor.split('·').length - 1 ? <span className="mx-2 text-primary/50">•</span> : ''}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">
                    Why it holds up:
                  </h4>
                  <ul className="space-y-3 mb-10">
                    {svc.holdUp.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-sans text-[15px] text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <button 
                      onClick={() => setQuoteModalOpen(true)}
                      className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 hover:text-primary hover:border-primary transition-colors pb-1"
                    >
                      {svc.buttonText} <ArrowRight className="w-4 h-4" />
                    </button>
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
