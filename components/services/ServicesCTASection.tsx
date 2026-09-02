"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquareQuote } from "lucide-react";

export default function ServicesCTASection({ setQuoteModalOpen }: { setQuoteModalOpen: (open: boolean) => void }) {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6"
        >
          Not Sure Which <span className="font-bold text-primary">Service You Need?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Tell us about your product and industry, and we'll recommend the right print solution; no obligation.
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
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-primary text-white font-heading text-sm font-bold tracking-widest uppercase px-10 py-5 transition-colors shadow-lg hover:-translate-y-1 transform duration-300"
          >
            <MessageSquareQuote className="w-5 h-5" /> Talk to Our Team <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
