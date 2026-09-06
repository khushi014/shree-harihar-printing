"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    name: "Prepress",
    desc: "Protek plate-making for accurate, consistent print setup"
  },
  {
    name: "Printing",
    desc: "Heidelberg 2-colour, 4-color+coater, and 6-color+coater offset presses"
  },
  {
    name: "Coating",
    desc: "Auto Print Aqua/UV coating and Heidelberg drip-off finishing"
  },
  {
    name: "Stripping & Inspection",
    desc: "Maxima blanking machines and AutoPrint carton inspection for zero-defect output"
  },
  {
    name: "Punching",
    desc: "Manual and fully automatic punching (Friends, Maxima)"
  },
  {
    name: "Folding-Gluing",
    desc: "Auto side & lock-bottom folder-gluers, plus a Bobst Visionfold line with Accubraille capability for compliance-sensitive packaging"
  }
];

export default function AboutInfrastructureSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-center"
          >
            <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
              State-of-the-Art <span className="font-bold text-primary">Infrastructure</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              We invested in owning the entire production process because quality is hardest to control when it's spread across multiple vendors. Our in-house capability includes everything needed from setup to final compliance-ready finishing.
            </p>
            
            <div className="relative h-64 sm:h-80 w-full rounded-sm overflow-hidden mb-8 shadow-md">
              <img 
                src="/images/modern_offset_press.jpg" 
                alt="Modern Heidelberg Printing Press offset" 
                className="absolute inset-0 w-full h-full object-cover filter hover:scale-105 transition-transform duration-1000" 
              />
            </div>

            <div>
              <Link 
                href="/gallery" 
                className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 hover:text-primary hover:border-primary transition-colors pb-1"
              >
                See Full Machinery Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-10 border border-slate-200 shadow-sm"
          >
            <ul className="space-y-6">
              {capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">{item.name}</h3>
                    <p className="font-sans text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
