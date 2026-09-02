"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutCTASection({ setQuoteModalOpen }: { setQuoteModalOpen: (open: boolean) => void }) {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 border-t border-slate-800 text-white relative">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      
      <div className="max-w-280 mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
        >
          A Centenary of <span className="font-bold text-primary">Trust and Commitment</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto mb-12"
        >
          We are committed to achieving perfection, and we genuinely care about the happiness and satisfaction of our clients, something we've been lucky to achieve through the solutions we've offered since our inception. Being transparent and customer-committed has been a cornerstone of our business from day one, and even after four (soon five) generations of presence in this industry, those values have remained undeterred. Our esteemed clientele is proud testimony to that.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading text-sm font-bold tracking-widest uppercase px-8 py-4 transition-colors"
          >
            <ClipboardList className="w-4 h-4" /> Request a Quote
          </button>
          
          <Link
            href="/industries"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading text-sm font-bold tracking-widest uppercase px-8 py-4 transition-colors"
          >
            Meet the Industries We Serve <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
