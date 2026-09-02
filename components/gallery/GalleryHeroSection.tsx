"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GalleryHeroSection() {
  return (
    <section className="bg-slate-950 text-white py-20 lg:py-28 relative overflow-hidden flex items-center min-h-[40vh]">
      
      {/* Background Image placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1600" 
          alt="Offset printing press in action" 
          className="absolute inset-0 w-full h-full object-cover opacity-15 filter grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>

      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-light text-4xl sm:text-5xl lg:text-7xl leading-tight mb-8"
        >
          See the Work — <br className="hidden sm:block" />
          <span className="font-bold relative inline-block text-primary mt-2">
            Not Just the Promise.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
        >
          Numbers and machine names only tell part of the story. Here's a look at the packaging, labels, and promotional materials we've actually produced for brands across pharma, FMCG, food, and personal care.
        </motion.p>
      </div>
    </section>
  );
}
