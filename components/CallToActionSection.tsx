"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Phone } from "lucide-react";

export default function CallToActionSection({ setQuoteModalOpen }: { setQuoteModalOpen: (open: boolean) => void }) {
  return (
    <section className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6"
        >
          Ready to Print With a Partner <br className="hidden sm:block" /> Who's Been Doing This{" "}
          <span className="font-bold relative inline-block text-primary">
            Since 1921?
            <span className="absolute bottom-1 left-0 w-full h-[3px] bg-primary/20" />
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl"
        >
          Tell us what you need: a carton, a label, or promotional print and our team will respond with a quote fast.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark font-heading text-sm font-bold text-white px-8 py-4 tracking-wider uppercase transition-all duration-200"
          >
            <ClipboardList className="w-4 h-4" /> Request a Quote
          </button>
          
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 font-heading text-sm font-bold px-8 py-4 tracking-wider uppercase transition-all duration-200"
          >
            <Phone className="w-4 h-4" /> Call / WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
