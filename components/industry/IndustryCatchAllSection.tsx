"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle, Layers } from "lucide-react";

export default function IndustryCatchAllSection() {
  const scrollToContact = () => {
    const el = document.getElementById("rfq-section") || document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "#rfq-section";
    }
  };

  return (
    <section className="bg-slate-900 text-white py-14 lg:py-18 relative overflow-hidden border-t border-slate-800">
      {/* Engineering Drafting Grid Background Texture */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.04] pointer-events-none" />

      {/* Ambient Radial Accent */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          {/* Left Narrative Area */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-[11px] font-mono tracking-widest uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-primary-light" />
              Versatile Production Architecture
            </div>

            <h3 className="font-heading font-light text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-3">
              Don’t See <span className="font-bold text-primary">Your Industry Listed?</span>
            </h3>

            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              If your product needs precise, reliable carton, label, or promotional printing, chances are we can help. Our production line is built for versatility.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-heading font-semibold text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
