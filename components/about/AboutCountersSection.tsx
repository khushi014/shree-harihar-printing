"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users2, Award } from "lucide-react";

export default function AboutCountersSection() {
  return (
    <section className="relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Full-Width Background Photo: The Faces of the Factory / Team */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/factory_team_craft.jpg"
          alt="Shree Harihar printing craft team and production engineers"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Vignette Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-xs font-heading font-semibold uppercase tracking-widest mb-6">
            <Users2 className="w-4 h-4" />
            The People Behind the Precision
          </div>

          <h2 className="font-heading font-light text-2xl sm:text-3xl lg:text-5xl text-white tracking-tight leading-tight max-w-4xl mb-6">
            &ldquo;Technology changed. <span className="font-bold text-primary">Our name didn&apos;t.</span> We are proud to be one of Gujarat&apos;s only 5th-generation family packaging institutions.&rdquo;
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Behind every micron-accurate carton fold and calibrated press run stands a dedicated team of master print technicians, QA inspectors, and conversion engineers who treat your packaging as their own.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
