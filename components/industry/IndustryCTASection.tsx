"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Speech } from "lucide-react";

export default function IndustryCTASection({ setQuoteModalOpen }: { setQuoteModalOpen: (open: boolean) => void }) {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 border-t border-slate-800 text-white relative">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
        >
          Don't See Your <span className="font-bold text-primary">Industry Listed?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          If your product needs precise, reliable carton, label, or promotional printing, chances are we can help. Our production line is built for versatility, allowing us to support a wide range of packaging and printing requirements across diverse sectors.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading text-sm font-bold tracking-widest uppercase px-10 py-5 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
          >
            <Speech className="w-5 h-5" /> Talk to Our Team <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
