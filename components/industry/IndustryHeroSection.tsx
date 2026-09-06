"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IndustryHeroSection() {
  return (
    <section className="bg-slate-950 text-white py-24 md:py-32 relative overflow-hidden flex items-center min-h-[50vh]">
      
      {/* Background Image: Diverse Array of Finished Packaging Cartons */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_brand_print.jpg" 
          alt="Diverse assortment of pharmaceutical, cosmetic, and food packaging cartons on display" 
          className="absolute inset-0 w-full h-full object-cover opacity-35 filter saturate-105" 
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/50"></div>
      </div>

      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-light text-4xl sm:text-5xl lg:text-7xl leading-tight mb-8"
        >
          Packaging Built Around What <br className="hidden lg:block" />
          <span className="font-bold text-primary mt-2">
            Your Industry Actually Needs.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
        >
          A pharma carton and an FMCG carton might come off the same press, but they don't share the same demands. One needs precision and compliance; the other needs shelf appeal and speed. We've spent a century learning the difference and building the in-house capability to deliver both consistently.
        </motion.p>
      </div>
    </section>
  );
}
